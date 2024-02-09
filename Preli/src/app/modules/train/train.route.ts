import express from 'express';
import { TrainController } from './train.controller';

const router = express.Router();

router.post('/', TrainController.insertIntoDb);

export const TrainRoutes = router;
