export interface IUser {
  _id: string;
  name: string;
  email: string;
  profileImageUrl?: string | undefined;
  isBlocked: boolean;
}

export interface IUserBasicDetail {
  name: string;
  email: string;
  password: string;
  profileImageUrl?: string | undefined;
  isBlocked?: boolean;
}
