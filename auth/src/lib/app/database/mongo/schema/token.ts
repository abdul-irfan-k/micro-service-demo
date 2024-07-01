import mongoose from 'mongoose';
import bcrypt from 'bcrypt';
import { v4 as uuidv4 } from 'uuid';
import { tokenEntity } from '@lib/entities';

const tokenSchema = new mongoose.Schema(
  {
    _id: { type: String, default: uuidv4() },
    userId: { type: String, required: true },
    token: { type: String, required: true },
  },
  {
    timestamps: true,
  },
);

tokenSchema.pre('save', async function (next) {
  const hashedToken = await bcrypt.hash(this.token, 12);
  this.token = hashedToken;
  next();
});

tokenSchema.methods.checkIsValidToken = async function (plainToken: string) {
  const isValidToken = await bcrypt.compare(plainToken, this.token);
  return isValidToken;
};

interface methodInterface {
  checkIsValidToken(plainToken: string): boolean;
}

export interface ITokenModel extends tokenEntity, methodInterface {}
export const TokenModel = mongoose.model<ITokenModel>('Token', tokenSchema);
