import { bookingEntity } from "@lib/entity";
import {
  IbookingRespository,
  ItravellRepository,
  IbusRepository,
} from "../../app/repository";
import {
  ICreateBookingUseCase,
  ICreateBookingUseCaseArgs,
} from "../interface/booking-use-case";

export class createBookingUseCase implements ICreateBookingUseCase {
  constructor(
    private bookingRespository: IbookingRespository,
    private travellRepository: ItravellRepository,
    private busRepository: IbusRepository
  ) {}

  async execute(args: ICreateBookingUseCaseArgs): Promise<bookingEntity | null> {
    const booking = await this.bookingRespository.create(args);
    if (booking == null) return null;

    const travellChart = await this.travellRepository.findOneByBusIdAndDate(
      busId:args.busId,
      travellingDate:args.travellingDate
    );

    if (travellChart == null) {
      const totalBookedSeats =
        1 + (totalMembers != undefined ? totalMembers : 0);

      const busDetail = await busRepository.getBusDetail(busId);
      if (busDetail.length == 0) return;
      const totalAvailabeSeats = busDetail.totalSeats - totalBookedSeats;
      const travellChart = await travellRepository.create({
        bookedSeats,
        busId,
        routeId,
        totalAvailabeSeats,
        totalBookedSeats,
        travellingDate,
        travellorId: userId,
      });
    } else {
      const userTotalSeats = 1 + (totalMembers != undefined ? totalMembers : 0);
      const totalBookedSeats = travellChart.totalBookedSeats + userTotalSeats;
      const totalAvailabeSeats =
        travellChart.totalAvailabeSeats - userTotalSeats;
      const bookedSeats = travellChart.bookedSeats;

      seat.forEach((seat) => {
        bookedSeats.push({
          arrangement: seat.arrangement,
          position: seat.position,
          rowNumber: seat.rowNumber,
          travellorId: userId,
        });
      });

      const updatedTravellChart = await this.travellRepository.update(
        travellChart._id,
        { totalBookedSeats, bookedSeats, totalAvailabeSeats }
      );
    }
    return booking
  }
}
