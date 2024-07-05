import User, { IUser } from '../models/userModel';

class UserService {
  async createUser(userData: Partial<IUser>): Promise<IUser> {
    const newUser = new User(userData);
    return await newUser.save();
  }

  async getUserById(id: string): Promise<IUser | null> {
    return await User.findById(id);
  }
}

export default new UserService();
