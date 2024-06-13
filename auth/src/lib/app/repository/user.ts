import { userEntity } from "@lib/entities";
import { User, IUserModel } from "../database/mongo";

export const userRepository: IUserRepository = {
  signUp: async (userData: any) => {
    const user = new User(userData);
    await user.save();
    return user.toJSON();
  },

  getUser: async (userData: any) => {
    const user = await User.findOne({ ...userData });
    return user;
  },
  updateUser: async (userId, data) => {
    return await User.findOneAndUpdate({ _id: userId }, data, {
      new: true,
      projection: { password: 0 },
    });
  },
};

export interface IUserRepository {
  signUp: (userData: any) => Promise<IUserModel>;
  getUser: (data: any) => Promise<IUserModel | null>;
  updateUser: (userId: string, data: any) => Promise<IUserModel | null>;
}
