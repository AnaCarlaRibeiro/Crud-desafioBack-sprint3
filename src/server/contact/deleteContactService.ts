import { Contacts } from "../../entities/contact.entity";

import AppDataSource from "../../data-source";
import { AppError } from "./../../errors/appErrors";

const deleteContactService = async (id: string) => {
  const contactRepository = AppDataSource.getRepository(Contacts);

  const findUser = await contactRepository.findOneBy({
    id,
  });

  if (!findUser) {
    throw new AppError(404, "User not found");
  }

  await contactRepository.delete(id);
};
export default deleteContactService;
