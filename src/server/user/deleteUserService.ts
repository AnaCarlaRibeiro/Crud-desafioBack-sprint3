import { Contacts } from "./../../entities/contact.entity";
import { User } from "../../entities/user.entity";
import AppDataSource from "../../data-source";
import { AppError } from "./../../errors/appErrors";

const deleteUserService = async (id:string) => {
  const userRepository = AppDataSource.getRepository(User);

  const contactRepository = AppDataSource.getRepository(Contacts);

  const findUser = await userRepository.findOneBy({
    id,
  });

  

  if (!findUser) {
    throw new AppError(404, "User not found");
  }
  

  await userRepository.delete(id);
};
export default deleteUserService;
