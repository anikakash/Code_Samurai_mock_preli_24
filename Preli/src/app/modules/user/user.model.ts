import { Schema, model } from 'mongoose';
import { IUser, UserModel } from './user.interface';

const userSchema = new Schema<IUser>(
  {
    user_id: { type: Number, required: true },
    user_name: { type: String, required: true },
    balance: { type: Number, required: true },
  },

  {
    versionKey: false,
    toJSON: {
      transform: function (doc, ret) {
        delete ret._id;
        return ret;
      },
    },
  }
);

// Create a Model.
export const User = model<IUser, UserModel>('User', userSchema);
