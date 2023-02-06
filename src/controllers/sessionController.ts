import { IUserRequest } from "./../interfaces/users/index";

import { Request, Response } from "express";
import sessionService from "../server/sessions/sessionService";


const createSessionController = async (req: Request, res: Response) => {
  const data: IUserRequest = req.body;
  console.log(data, "------DATA");
  const token = await sessionService(data);
  
  return res.json({ token });
};

export default createSessionController;
