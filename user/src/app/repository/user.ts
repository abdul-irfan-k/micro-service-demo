import { Document, Types } from "mongoose";
import { UserData } from "../../lib/entities/user";
import { UserModel, IUserModel } from "../database/schema";

export const userRepository: IUserRepository = {
  findOne: async (_id: string) => {
    const user = await UserModel.findOne({ _id });
    return user;
  },

  update: async (_id: string, data: any) => {
    const user = await UserModel.findOneAndUpdate({ _id }, data, { new: true });
    return user;
  },

  create: async (data: UserData) => {
    const user = new UserModel(data);
    await user.save();
    return user;
  },
};

export interface IUserRepository {
  findOne: (_id: string) => Promise<
    | (Document<unknown, {}, IUserModel> &
        IUserModel & {
          _id: Types.ObjectId;
        })
    | null
  >;

  update: (
    _id: string,
    data: any
  ) => Promise<
    | (Document<unknown, {}, IUserModel> &
        IUserModel & {
          _id: Types.ObjectId;
        })
    | null
  >;

  create: (data: UserData) => Promise<
    Document<unknown, {}, IUserModel> &
      IUserModel & {
        _id: Types.ObjectId;
      }
  >;
}
