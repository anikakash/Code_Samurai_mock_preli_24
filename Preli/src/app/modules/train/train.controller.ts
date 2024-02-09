/* eslint-disable @typescript-eslint/ban-ts-comment */
import { Request, Response } from 'express';
import catchAsync from '../../../shared/catchAsync';
import { TrainService } from './train.service';

const insertIntoDb = catchAsync(async (req: Request, res: Response) => {
  const result = await TrainService.insertIntoDb(req?.body);

  res.status(201).json(result);
});

export const TrainController = {
  insertIntoDb,
};
