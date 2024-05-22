import { Request, Response } from "express"

export const makeGetBusController  = ({}:{getBusUseCase}) => {
    return async (req:Request,res:Response) => {
        const {id:busId} = req.body


    }
}