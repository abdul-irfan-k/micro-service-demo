import { IbookingRespository } from "../../app/repository/booking";

export const makeGetBookedTicketsUseCase = ({
  bookingRespository,
}: {
  bookingRespository: IbookingRespository;
}) => {
  return async (data: any) => {
    const { userId } = data;
    const tickets = await bookingRespository.getBookedUpComingTickets({
      userId,
    });
    return tickets;
  };
};
