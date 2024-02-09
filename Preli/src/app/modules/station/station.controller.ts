/* eslint-disable @typescript-eslint/ban-ts-comment */
import { Request, Response } from 'express';
import catchAsync from '../../../shared/catchAsync';
import { StationService } from './station.service';

const insertIntoDb = catchAsync(async (req: Request, res: Response) => {
  const result = await StationService.insertIntoDb(req?.body);

  res.status(201).json(
    //@ts-ignore
    result?.toJSON()
  );
});

const getAllFromDb = catchAsync(async (req: Request, res: Response) => {
  const result = await StationService.getAllFromDb();

  res.status(201).json({
    stations: result,
  });
});

const getSpecificTrainStations = catchAsync(
  async (req: Request, res: Response) => {
    const id = Number(req?.params?.id);
    const result = await StationService.getSpecificTrainStations(id);

    const ans = { station_id: id, ...result };

    console.log(ans);

    if (ans.status) {
      res.status(404).json({ message: ans.message });
    } else {
      res.status(201).json(ans);
    }
  }
);

export const StationController = {
  insertIntoDb,
  getAllFromDb,
  getSpecificTrainStations,
};
