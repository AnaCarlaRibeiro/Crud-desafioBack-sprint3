import { Contacts } from './../entities/contact.entity';
import { IContactRequest, IContactUpdate } from './../interfaces/contacts/index';
import { instanceToPlain } from 'class-transformer';

import { Response, Request } from "express";
import createcontactsService from '../server/contact/createContactService';
import listContactsUserService from '../server/contact/listContactService';
import updateContactService from '../server/contact/updateContactService';
import deleteContactService from '../server/contact/deleteContactService';


const createContactController = async (req: Request, res: Response) => {
  
  try {
    const contact: IContactRequest = req.body;
    const createdContact = await createcontactsService(contact);
    return res.status(201).json(instanceToPlain(createdContact));
    
  } catch (error) {
    if(error instanceof Error){
      return res.status(400).json({
          message: error.message
      })
  }
  }
  
};

const listContactController = async (req: Request, res: Response) => {
  console.log("aqui listar");
  
  
  const users = await listContactsUserService();

  return res.json(instanceToPlain(users));
};

const updateContactController = async (req: Request, res: Response) => {

  try {
    const contact: IContactUpdate = req.body;

    const id: string = req.params.id;
    const updateContact = await updateContactService(contact, id);
     if (updateContact instanceof Contacts) {
      return res.json(updateContact);
    }
    return res.status(updateContact[1] as number).json({
      message: updateContact[0],
    });
  } catch (error) {
    if (error instanceof Error) {
      return res.status(400).json({
        message: error.message,
      });
    }
  }
  
  return res.status(401).json({
    message:"update performed successfully"
  });
};

const deleteContactController = async (req: Request, res: Response) => {
  const id: string = req.params.id;

  await deleteContactService(id);

  return res.status(204).send();
  
};

export {
    createContactController,
  listContactController,
  updateContactController,
  deleteContactController,
};
