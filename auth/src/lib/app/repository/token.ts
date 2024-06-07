import { tokenEntity } from "@lib/entities";
import { ITokenModel, TokenModel } from "../database/mongo";

export const userRepository: ITokenRepository = {
  createToken: async (tokenData) => {
    const token = new TokenModel(tokenData);
    await token.save();
    return token.toJSON();
  },

  getTokenByUserId: async (userId: string) => {
    const token = await TokenModel.findOne({ userId });
    return token;
  },
  removeToken: async (userId: string) => {
    return TokenModel.deleteMany({ userId });
  },
};

export interface ITokenRepository {
  createToken: (
    tokenData: Omit<tokenEntity, "_id"> & Partial<Pick<tokenEntity, "_id">>
  ) => Promise<tokenEntity | null>;
  getTokenByUserId: (userId: string) => Promise<ITokenModel | null>;
  removeToken: (userId: string) => Promise<any>
}
