import { User } from '../../entities/user.entity';
import { IUserUpdate } from './../../interfaces/users/index';
import { AppError } from "./../../errors/appErrors";
import AppDataSource from '../../data-source';

const updateUserService = async (
  { name, email, phone }: IUserUpdate,
  id: string
): Promise<User | Array<string | number>> => {
  const userRepository = AppDataSource.getRepository(User);
  const findUser = await userRepository.findOneBy({
    id,
  });

  
  if (!findUser) {
    throw new AppError(404, "User not found");
  }

  // esse metodo recebe dois parâmetros, o primeiro é o ID que ele vai atualizar e o segundo parametro é um objeto passando os dados desse usuário
  await userRepository.update(id, {
    name: name ? name : findUser.name,
    email: email ? email : findUser.email,
    phone: phone ? phone: findUser.phone,
  });
  const user = await userRepository.findOneBy({
    id,
  });
  return user!; // "!" quer dizer que: com certeza esse usuário que estou procurando ele existe
};

export default updateUserService
