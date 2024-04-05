import mongoose, { Document } from "mongoose";
import bcrypt from "bcrypt";

interface IUserSchema {
  name: string;
  email: string;
  userId: string;
  password: string;
  profileImageUrl?: string | undefined;
  isBlocked: boolean;
  accountVerification: {
    isVerified: boolean;
    veriftionType: string | "phone" | "email";
  };
}

const userSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    userId: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    profileImageUrl: { type: String },
    isBlocked: { type: Boolean, default: false },
    accountVerification: {
      isVerified: { type: Boolean },
      veriftionType: { type: String },
    },
  },
  {
    timestamps: true,
  }
);

userSchema.pre("save", async function (next) {
  const hashedPassword = await bcrypt.hash(this.password, 12);
  this.password = hashedPassword;
  next();
});

userSchema.methods.checkIsCorrectPassword = async function (
  plainPassword: string
) {
  const isCorrectPassword = await bcrypt.compare(plainPassword, this.password);
  return isCorrectPassword;
};

userSchema.methods.changePassword = async function (password: string) {
  const hashedPassword = await bcrypt.hash(password, 12);
  this.password = hashedPassword;
  return { isValid: true, isChangedPassword: true };
};

interface methodInterface {
  checkIsCorrectPassword(plainPassword: string): boolean;
  changePassword(password: string): {
    isValid: boolean;
    isChangedPassword: boolean;
  };
}

export interface IUserModel extends IUserSchema, methodInterface, Document {}
const UserModel = mongoose.model<IUserModel>("User", userSchema);
export default UserModel;
