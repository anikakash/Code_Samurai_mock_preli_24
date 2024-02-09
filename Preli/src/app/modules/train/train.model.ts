import { Schema, model } from 'mongoose';
import { ITrain, TrainModel } from './train.interface';

const trainSchema = new Schema<ITrain>(
  {
    train_id: { type: Number, required: true },
    train_name: { type: String, required: true },
    capacity: { type: Number, required: true },
    stops: { type: [], required: true },
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
export const Train = model<ITrain, TrainModel>('Train', trainSchema);
