import { NextFunction, Request, Response } from "express";

export default ({ getBusUseCase }) => {
  return (req: Request, res: Response, next: NextFunction) => {
    const tickets = getBusUseCase(req.body);
    if (!tickets) return;
    return res.json(tickets);
  };
};
