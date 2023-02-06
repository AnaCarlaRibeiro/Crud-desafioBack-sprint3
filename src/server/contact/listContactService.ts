import { Contacts } from './../../entities/contact.entity';
import AppDataSource from '../../data-source';

import { AppError } from './../../errors/appErrors';




const listContactsUserService = async (): Promise<Contacts[]> => {
    const contactsContactRepository = AppDataSource.getRepository(Contacts);
    const contactsContact = await contactsContactRepository.find();   
   

    if (!contactsContact) {
      throw new AppError(404, "not")
    }
    return contactsContact;
  };
  
  export default listContactsUserService;
  