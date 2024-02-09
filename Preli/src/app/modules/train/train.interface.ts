import { Model } from 'mongoose';

export type IStop = {
  station_id: number;
  arrival_time: string | null;
  departure_time: string | null;
  fare: number;
};

export type ITrain = {
  _id?: string;
  train_id: number;
  train_name: string;
  capacity: number;
  stops: IStop[];
};

export type TrainModel = Model<ITrain, Record<string, unknown>>;
