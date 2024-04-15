import { NextFunction, Request, Response } from "express";

export default ({ seachTicketUseCase }) => {
  return (req: Request, res: Response, next: NextFunction) => {

    const tickets = seachTicketUseCase(req.body)
    if(!tickets)return 
    return res.json(tickets)
  };
};
