import { IUserBasicDetail } from "../../lib/entities/";
import { UserModel, IUserModel } from "../database/schema";

export const userRepository: IUserRepository = {
  //@ts-ignore
  findOne: async (_id: string) => {
    const user = await UserModel.findOne(
      { _id },
       { _id: 1, name: 1, email: 1 } 
    );
    return user;
  },
//@ts-ignore
  update: async (_id: string, data: any) => {
    const user = await UserModel.findOneAndUpdate({ _id }, data, {new:true,projection:{_id:1,name:1,email:1,}});
   console.log("update user details",user)
    return user;
  },

  create: async (data: IUserBasicDetail) => {
    const user = new UserModel(data);
    await user.save();
    return user;
  },
};

export interface IUserRepository {
  findOne: (_id: string) => Promise<IUserModel | null>;
  update: (_id: string, data: any) => Promise<IUserModel | null>;
  create: (data: IUserBasicDetail) => Promise<IUserModel | null>;
}
