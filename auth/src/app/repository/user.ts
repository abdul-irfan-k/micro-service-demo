import { Document, Types } from "mongoose";
import { User, IUserModel } from "../database/mongo";

export const userRepository: IUserRepository = {
  signUp: async (userData: any) => {
    const user = new User(userData);
    await user.save();
    return user;
  },

  signIn: async (userData: any) => {
    // const user = await User.findOne({ email: userData.email });
    return true;
  },

  getUser: async (userData: any) => {
    const user = await User.findOne({ email: userData.email });
    return user;
  },
};

export interface IUserRepository {
  signUp: (userData: any) => Promise<IUserModel>;
  signIn: (userData: any) => Promise<boolean>;
  getUser: (data: any) => Promise<
    | (IUserModel & {
        _id: Types.ObjectId;
      })
    | null
  >;
}
