import {
  IbookingRespository,
  ItravellRepository,
  IbusRepository,
} from "../../../app/repository";

export const makeBookTicketUseCase = ({
  bookingRespository,
  travellRepository,
  busRepository,
}: {
  bookingRespository: IbookingRespository;
  travellRepository: ItravellRepository;
  busRepository: IbusRepository;
}) => {
  return async (data) => {
    const {
      routeId,
      busId,
      price,
      seat,
      totalMembers,
      membersDetail,
      appliedCoupon,
      Schedule,
      travellingDate,
      departurePlace,
      destinationPlace,
      userId,
    } = data;

    const booking = await bookingRespository.create({
      routeId,
      busId,
      price,
      seat,
      totalMembers,
      membersDetail,
      appliedCoupon,
      Schedule,
      travellingDate,
      departurePlace,
      destinationPlace,
    });

    if (booking == null) return;

    const travellChart = await travellRepository.findOneByBusIdAndDate(
      busId,
      travellingDate
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
      const totalBookedSeats =
        travellChart.totalBookedSeats +
        1 +
        (totalMembers != undefined ? totalMembers : 0);

      const bookedSeats = travellChart.bookedSeats;
      seat.forEach((seat) => {
        bookedSeats.push({
          arrangement: seat.arrangement,
          position: seat.position,
          rowNumber: seat.rowNumber,
          travellorId: userId,
        });
      });

      const updatedTravellChart = await travellRepository.update(
        travellChart._id,
        { totalBookedSeats, bookedSeats }
      );
    }
  };
};
