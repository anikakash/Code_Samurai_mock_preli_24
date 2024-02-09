/* eslint-disable @typescript-eslint/no-explicit-any */
import httpStatus from 'http-status';
import { Train } from '../train/train.model';
import { IStation } from './station.interface';
import { Station } from './station.model';

//insert data into database
const insertIntoDb = async (
  stationData: IStation
): Promise<IStation | null> => {
  const result = await Station.create(stationData);

  return result;
};

const getAllFromDb = async (): Promise<IStation[]> => {
  const result = await Station.find({});

  return result;
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const getSpecificTrainStations = async (id: number): Promise<any> => {
  let result = {} as any;

  const singleStation = await Station.findOne({
    station_id: id,
  });

  if (!singleStation) {
    result.status = httpStatus.NOT_FOUND;
    result.message = `Station with id: ${id} was not found`;
    return result;
  }

  result = await Train.aggregate([
    {
      $unwind: '$stops',
    },
    {
      $match: {
        'stops.station_id': id,
      },
    },
    {
      $group: {
        _id: null,
        trains: {
          $push: {
            train_id: '$train_id',
            arrival_time: '$stops.arrival_time',
            departure_time: '$stops.departure_time',
          },
        },
      },
    },
    {
      $project: {
        _id: 0,
        station_id: id,
        trains: 1,
      },
    },
    {
      $replaceRoot: {
        newRoot: '$$ROOT',
      },
    },
  ]);

  return result.length > 0
    ? result[0]
    : {
        trains: [],
      };
};

export const StationService = {
  insertIntoDb,
  getAllFromDb,
  getSpecificTrainStations,
};
