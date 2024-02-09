import { IUser } from './user.interface';
import { User } from './user.model';

//insert book data into database
const insertIntoDb = async (userData: IUser): Promise<IUser | null> => {
  const result = await User.create(userData);

  return result;
};

export const UserService = {
  insertIntoDb,
};
