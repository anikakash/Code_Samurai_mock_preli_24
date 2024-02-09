/* eslint-disable @typescript-eslint/no-explicit-any */
import { ITrain } from './train.interface';
import { Train } from './train.model';

//insert data into database
const insertIntoDb = async (trainData: ITrain): Promise<any | null> => {
  const { stops, ...restData } = trainData;

  await Train.create(trainData);

  const res = {
    ...restData,
    service_start: stops[0]?.departure_time,
    service_ends: stops[stops.length - 1].arrival_time,
    num_stations: stops.length,
  };

  return res;
};

export const TrainService = {
  insertIntoDb,
};
