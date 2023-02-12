import { Contacts } from './../../entities/contact.entity';
  import { IUserLogin, IUserRequest } from './../../interfaces/users/index';

  import { AppError } from './../../errors/appErrors';
  import { User } from "../../entities/user.entity";
  import AppDataSource from "../../data-source";

  import { compare } from "bcrypt";
  import jwt from 'jsonwebtoken';
  import 'dotenv/config'

 const sessionService = async ({
    email,
    password,
  }: IUserLogin): Promise<string> => {
    const userRepository = AppDataSource.getRepository(User);
    const contactRepository = AppDataSource.getRepository(Contacts);

    
    const user = await userRepository.findOneBy({
      email:email
    })
    
    // A chave "email" está sendo usada como uma forma de buscar um usuário específico pelo seu endereço de e-mail no banco de dados
    
    
    if (!user) {
      throw new AppError(403, 'Invalid user or password')
    }
    const passwordMatch= await compare(password, user.password)
    
    if (!passwordMatch) {
      throw new AppError(403, 'Invalid user or password')
    }
   
    const contacts = await contactRepository.find({
      relations: ['user'],
      
    });
console.log(contacts[0]["id"], '==============');

    // console.log(contacts, "aqui ------------------");
  // na criação de usuário eu estou armazenando no token tando o id quanto o token
   const token = jwt.sign({
  name: user.name,
  id: user.id,
  phone: user.phone,
  email: user.email,
  contacts:contacts,
  contactsId:contacts[0]["id"]
  
  
},
process.env.SECRET_KEY as string,
{
  expiresIn: '24h',
  subject: user.id
}
);

const responseData:any = {
  token,
  name: user.name,
  id: user.id,
  phone: user.phone,
  email: user.email,
  contacts:contacts,
  contactsId:contacts[0]["id"]

};
// const contactsIds = [];

// for (const contact of contacts) {
//   contactsIds.push(contact.id);
// }

// responseData.contactsIds = contactsIds;

return responseData;
     
      
      // return token
  };

  export default sessionService;
