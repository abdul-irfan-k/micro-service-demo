import { NextFunction, Request, Response } from "express";

export default ({ getBusChartUseCase }) => {
  return (req: Request, res: Response, next: NextFunction) => {
    const tickets = getBusChartUseCase(req.body);
    if (!tickets) return;
    return res.json(tickets);
  };
};
