import { IbookingRespository } from "../../app/repository/booking";

export const makeGetBookedTicketUseCase = ({
  bookingRespository,
}: {
  bookingRespository: IbookingRespository;
}) => {
  return async (ticketId: string) => {
    const ticket = await bookingRespository.getTicketDetail({ ticketId });
    return ticket;
  };
};
