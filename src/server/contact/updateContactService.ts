import { Contacts } from "../../entities/contact.entity";

import { IContactUpdate } from "./../../interfaces/contacts/index";
import { User } from "../../entities/user.entity";

import { AppError } from "./../../errors/appErrors";
import AppDataSource from "../../data-source";

const updateContactService = async (
  { email, phone }: IContactUpdate,
  id: string
): Promise<Contacts | Array<string | number>> => {
  const contactRepository = AppDataSource.getRepository(Contacts);
  const findContact = await contactRepository.findOneBy({
    id,
  });
  if (!findContact) {
    throw new AppError(404, "User not found");
  }

  await contactRepository.update(id, {
    email: email ? email : findContact.email,
    phone: phone ? phone : findContact.phone,
  });
  const contact = await contactRepository.findOneBy({
    id,
  });
  return contact!;
};

export default updateContactService;
