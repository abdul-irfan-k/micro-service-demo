import { User, IUserModel } from "../database/mongo";

export const userRepository: IUserRepository = {
  signUp: async (userData: any) => {
    const user = new User(userData);
    await user.save();
    return user.toJSON();
  },


  getUser: async (userData: any) => {
    const user = await User.findOne({ email: userData.email });
    return user;
  },
};

export interface IUserRepository {
  signUp: (userData: any) => Promise<IUserModel>;
  getUser: (data: any) => Promise<
    | IUserModel 
    | null
  >;
}
