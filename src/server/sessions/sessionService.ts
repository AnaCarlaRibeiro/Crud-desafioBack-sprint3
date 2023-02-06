import { IUserLogin, IUserRequest } from './../../interfaces/users/index';

import { AppError } from './../../errors/appErrors';
import { User } from "../../entities/user.entity";
import AppDataSource from "../../data-source";

import { compare } from "bcrypt";
import jwt from 'jsonwebtoken';
import 'dotenv/config'


const sessionService = async ({
  email,
  password,
}: IUserLogin): Promise<string> => {
  const userRepository = AppDataSource.getRepository(User);

  
  const user = await userRepository.findOneBy({
    email:email
  })



  if (!user) {
    throw new AppError(403, 'Invalid user or password')
  }
  const passwordMatch= await compare(password, user.password)

  if (!passwordMatch) {
    throw new AppError(403, 'Invalid user or password')
  }
// na criação de usuário eu estou armazenando no token tando o id quanto o token
  const token= jwt.sign({
     },
     process.env.SECRET_KEY as string,
     {
        expiresIn: '24h',
        subject:user.id
     }
     )
     return token
};

export default sessionService;
