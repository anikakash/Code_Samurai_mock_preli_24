import express from 'express';
import { StationController } from './station.controller';

const router = express.Router();

router.post('/', StationController.insertIntoDb);
router.get('/', StationController.getAllFromDb);
router.get('/:id/trains', StationController.getSpecificTrainStations);

export const StationRoutes = router;
