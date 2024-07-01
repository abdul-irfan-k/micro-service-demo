import { Request, Response, NextFunction } from 'express';

//@ts-ignore
export const makeExpressCallBack =
  (callback: any) => (req: Request, res: Response, next: NextFunction) =>
    callback.processRequest(req, res, next);
