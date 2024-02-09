import { Model } from 'mongoose';

export type IUser = {
  _id?: string;
  user_id: number;
  user_name: string;
  balance: number;
};

export type UserModel = Model<IUser, Record<string, unknown>>;
