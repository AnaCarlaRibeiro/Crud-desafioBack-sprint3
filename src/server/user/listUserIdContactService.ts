// import { AppError } from './../../errors/appErrors';
// import { User } from './../../entities/user.entity';
// import AppDataSource from "../../data-source";




// const getUserWithContactsService = async (id: string): Promise<User> => {
//     const userRepository = AppDataSource.getRepository(User);
  
//     const user = await userRepository.find( {id : userId, relations: ["contacts"] });
    
//     if (!user) {
//       throw new AppError(404, "User not found");
//     }
  
//     return user;
//   };
  
//   export default getUserWithContactsService;