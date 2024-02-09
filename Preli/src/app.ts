import cors from 'cors';
import express, { Application, NextFunction, Request, Response } from 'express';
// import cookieParser from 'cookie-parser';
import httpStatus from 'http-status';
import globalErrorHandler from './app/middleware/globalErrorHandler';
import router from './routes';

const app: Application = express();
app.use(cors());

//parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// app.use(cookieParser());

// application routes
app.use('/api/', router);

// //testing
// app.get('/', (req: Request, res: Response, next: NextFunction) => {
//   throw new ApiError(400, 'ulala');
//   // next('ulala')
// });

//global error handler
app.use(globalErrorHandler);

//handle not found
app.use((req: Request, res: Response, next: NextFunction) => {
  res.status(httpStatus.NOT_FOUND).json({
    success: false,
    message: 'Not Found',
    errorMessages: [
      {
        path: req.originalUrl,
        message: 'API Not Found',
      },
    ],
  });
  next();
});
export default app;
