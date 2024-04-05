export interface UserData {
  _id: string;
  name: string;
  email: string;
  image?: string | undefined;
  isBlocked: boolean;
  accountVerification?: {
    isVerified: boolean;
    veriftionType?: string | "phone" | "email";
  };
}

export class UserProfile {
  _id: string;
  name: string;
  email: string;
  image?: string | undefined;
  isBlocked: boolean;
  accountVerification?: {
    isVerified: boolean;
    veriftionType?: string | "phone" | "email";
  };
  constructor({
    _id,
    email,
    isBlocked,
    name,
    accountVerification,
    image,
  }: UserData) {
    this._id = _id;
    this.name = name;
    this.email = email;
    this.image = image;
    this.isBlocked = isBlocked;
    this.accountVerification = accountVerification;
  }
}
