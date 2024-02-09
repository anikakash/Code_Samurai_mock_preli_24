/* eslint-disable @typescript-eslint/ban-ts-comment */
import { Request, Response } from 'express';
import catchAsync from '../../../shared/catchAsync';
import { UserService } from './user.service';

const insertIntoDb = catchAsync(async (req: Request, res: Response) => {
  const result = await UserService.insertIntoDb(req?.body);

  res.status(201).json(
    //@ts-ignore
    result?.toJSON()
  );
});

export const userController = {
  insertIntoDb,
};
