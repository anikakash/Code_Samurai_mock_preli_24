import { Model } from 'mongoose';

export type IStation = {
  _id?: string;
  station_id: number;
  station_name: string;
  longitude: number;
  latitude: number;
};

export type StationModel = Model<IStation, Record<string, unknown>>;
