import AppDataSource from '../../data-source';
import { User } from '../../entities/user.entity';


const listUserService = async (): Promise<User[]> => {
  const listRepository = AppDataSource.getRepository(User);
  // const users = await listRepository.find();
  const users = await listRepository.find({relations: ['contacts'],});

  return users;
};

export default listUserService;
