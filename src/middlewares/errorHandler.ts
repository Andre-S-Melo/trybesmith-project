import { Request, Response, NextFunction } from 'express';
import Error from '../interfaces/error.interface';

const errorHandler = (err: Error, _req: Request, res: Response, _next: NextFunction) => {
  if (!err.statusCode) {
    console.log(err);
    return res.status(500).json({ message: 'INTERNAL SERVER ERROR' });
  }
  return res.status(err.statusCode).json({ message: err.message });
};

export default errorHandler;
