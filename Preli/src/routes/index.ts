import express from 'express';
import { StationRoutes } from '../app/modules/station/station.routes';
import { TrainRoutes } from '../app/modules/train/train.route';
import { UserRoutes } from '../app/modules/user/user.routes';

const router = express.Router();

const moduleRoutes = [
  {
    path: '/users',
    route: UserRoutes,
  },
  {
    path: '/stations',
    route: StationRoutes,
  },
  {
    path: '/trains',
    route: TrainRoutes,
  },
];

moduleRoutes.forEach(route => router.use(route.path, route.route));

export default router;
