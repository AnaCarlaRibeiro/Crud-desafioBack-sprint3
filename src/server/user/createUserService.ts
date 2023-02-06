import { Contacts } from './../../entities/contact.entity';
import { AppError } from './../../errors/appErrors';
import AppDataSource from '../../data-source';
import { User } from '../../entities/user.entity';
import { IUserRequest } from './../../interfaces/users/index';
import { hash } from "bcrypt";



const createUserService= async({
    name,
    email, 
    phone,
    createdAt,
    contactId,
    password
    

}:IUserRequest):Promise<User> =>{
  const contactRepository = AppDataSource.getRepository(Contacts);

  const contact = await contactRepository.findOneBy({
    id: contactId,
  });
 

  if (!contact) {
    throw new AppError(404, "contact not found");
  }

  
    const userRepository = AppDataSource.getRepository(User);

    const userEmail = await userRepository.findOneBy({
      //buscara o usuário que tem esse email
      email,
    });
    if (userEmail) {
        throw new AppError(500, "E-mail already registered");
      }
      if (!userRepository) {
        throw new AppError(409, "Repository not exist");
      }

      if (!password) {
        throw new AppError(409, "Password is missing");
      }
    
      const hashePassword = await hash(password, 10);
      const user ={
        name,
        email, 
        phone, 
        createdAt,
        contact:{...contact},
        password: hashePassword,
      }
      const response= userRepository.create({
        ...user
      })
      await userRepository.save(user);
      return response;
    };
    
    export default createUserService;
    