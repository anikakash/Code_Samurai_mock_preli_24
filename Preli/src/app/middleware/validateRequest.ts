import { Response, Request, NextFunction } from 'express';
import { AnyZodObject } from 'zod';

const validateRequest =
  (schema: AnyZodObject) =>
  async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      await schema.parseAsync({
        body: req.body,
        query: req.query,
        param: req.params,
        cookies: req.cookies,
      });
      return next();
    } catch (error) {
      next(error);
    }
  };

export default validateRequest;

// middleaware=>validateRequest(userZOd)=> async(req, res, next)
