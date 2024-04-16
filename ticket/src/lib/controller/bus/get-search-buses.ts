import { NextFunction, Request, Response } from "express";

export default ({ searchBusesUseCase }) => {
  return (req: Request, res: Response, next: NextFunction) => {
    const tickets = searchBusesUseCase(req.body);
    if (!tickets) return;
    return res.json(tickets);
  };
};
