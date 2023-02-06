import { User } from './../entities/user.entity';
import { instanceToPlain } from 'class-transformer';
import { IUserRequest, IUserUpdate } from "./../interfaces/users/index";
import { Response, Request } from "express";
import createUserService from "../server/user/createUserService";
import listUserService from '../server/user/listUserService';
import updateUserService from '../server/user/updateUserService';
import deleteUserService from '../server/user/deleteUserService';


const createUserController = async (req: Request, res: Response) => {
  const user: IUserRequest = req.body;
  const createdUser = await createUserService(user);
  return res.status(201).json(instanceToPlain(createdUser));
};

const listUserController = async (req: Request, res: Response) => {

  
  const users = await listUserService();

  return res.json(instanceToPlain(users));
};

const updateUserController = async (req: Request, res: Response) => {

  try {
    const user: IUserUpdate = req.body;
    console.log(user);
    
    const id: string = req.params.id;
    const updateUser = await updateUserService(user, id);
    if (updateUser instanceof User) {
      return res.json(updateUser);
    }
    return res.status(updateUser[1] as number).json({
      message: updateUser[0],
    });
  } catch (error) {
    if (error instanceof Error) {
      return res.status(400).json({
        message: error.message,
      });
    }
  }
};

const deleteUserController = async (req: Request, res: Response) => {
  const id: string = req.params.id;

  await deleteUserService(id);

  return res.status(204).send();
  //send() Envia a solicitação. Se o pedido é assíncrono (que é o padrão), este método retorna assim que o pedido for enviado. Se o pedido é síncrono, este método não retorna até a resposta chegar.
};

export {
  createUserController,
  listUserController,
  updateUserController,
  deleteUserController,
};
