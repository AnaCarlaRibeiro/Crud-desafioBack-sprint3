import { User } from '../../entities/user.entity';
import { Contacts } from '../../entities/contact.entity';

import { IContactRequest } from './../../interfaces/contacts/index';

import { AppError } from "../../errors/appErrors";
import AppDataSource from '../../data-source';

const createcontactsService = async ({
  userId,
  email,
  phone,
  createdAt
}: IContactRequest) => {
  const contactsRepository = AppDataSource.getRepository(Contacts);

  const userRepository = AppDataSource.getRepository(User);

  const user = await userRepository.findOneBy({
    id: userId,
  });
 

  if (!user) {
    throw new AppError(404, "Users not found");
  }
   const contacts = contactsRepository.create({
    email,
    phone,
    createdAt,
    user
  });
  await contactsRepository.save(contacts);
  return contacts;
};

export default createcontactsService;
