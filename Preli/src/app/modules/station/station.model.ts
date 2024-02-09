import { Schema, model } from 'mongoose';
import { IStation, StationModel } from './station.interface';

const stationSchema = new Schema<IStation>(
  {
    station_id: { type: Number, required: true },
    station_name: { type: String, required: true },
    longitude: { type: Number, required: true },
    latitude: { type: Number, required: true },
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
export const Station = model<IStation, StationModel>('Station', stationSchema);
