import {
  ICreateBookingChartUseCase,
  IGetBookingChartUseCase,
  IUpdateBookingChartUseCase,
} from "@lib/use-cases/interface/booking-chart-use-case";
import { ICreateBookingUseCase } from "@lib/use-cases/interface/booking-use-case";
import { IGetBusUseCase } from "@lib/use-cases/interface/bus-use-case";
import { IUpdateTravellHistoryUseCase } from "@lib/use-cases/interface/travell-history-use-case";
import { BadRequestError } from "@lib/util/bad-request-error";
import { NextFunction, Request, Response } from "express";
import { validationResult } from "express-validator";

export class PostBookingController {
  constructor(
    private getBusUseCase: IGetBusUseCase,
    private createBookingUseCase: ICreateBookingUseCase,
    private getBookingChartUseCase: IGetBookingChartUseCase,
    private createBookingChartUseCase: ICreateBookingChartUseCase,
    private updateBookingChartUseCase: IUpdateBookingChartUseCase,
    private updateTravellHistoryUseCase: IUpdateTravellHistoryUseCase
  ) {}
  async processRequest(req: Request, res: Response, next: NextFunction) {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      throw new BadRequestError({ code: 400, validatorError: errors.array() });
    }

    const { userId } = req.body;
    const { busId, travellingDate } = req.body;
    const busDetails = await this.getBusUseCase.execute({ _id: busId });
    if (busDetails == null)
      throw new BadRequestError({ code: 400, message: "invalid bus id" });

    const bookingDetails = await this.createBookingUseCase.execute(req.body);
    if (bookingDetails == null)
      throw new BadRequestError({ code: 400, message: "booking not created" });

    let bookingChart = await this.getBookingChartUseCase.execute({
      busId,
      travellingDate,
    });
    const isBookingChartExist = bookingChart != null;
    let updateBookingChart = null;
    if (!isBookingChartExist) {
      const totalBookedSeats = bookingDetails.totalMembers;
      const totalAvailabeSeats = busDetails.totalSeats - totalBookedSeats;
      const bookedSeats = bookingDetails.seatDetail.map((seats) => {
        return { ...seats, travellorId: userId };
      });
      updateBookingChart = await this.createBookingChartUseCase.execute({
        busId,
        totalAvailabeSeats,
        totalBookedSeats,
        travellingDate,
        bookedSeats: bookedSeats,
      });
    } else {
      const totalAvailabeSeats =
        bookingChart.totalAvailabeSeats - bookingDetails.totalMembers;
      const totalBookedSeats =
        bookingChart.totalBookedSeats + bookingDetails.totalMembers;
      const bookedSeats = bookingChart.bookedSeats;
      bookingDetails.seatDetail.forEach((seat) => {
        bookedSeats.push({ ...seat, travellorId: userId });
      });
      updateBookingChart = await this.updateBookingChartUseCase.execute({
        busId,
        totalAvailabeSeats,
        totalBookedSeats,
        bookedSeats,
      });
    }

    if (bookingChart == null)
      throw new BadRequestError({
        code: 400,
        message: "booking not added to bus booking chart",
      });
    const updatedTravellHistory =
      await this.updateTravellHistoryUseCase.execute({
        userId,
        travells: [{ bookingId: bookingDetails._id, status: "NOTTRAVELLED" }],
      });
    if (updatedTravellHistory == null)
      throw new BadRequestError({
        code: 400,
        message: "travell history not updated",
      });

    return res
      .status(200)
      .json({ bookingDetails, bookingChart: updateBookingChart });
  }
}
