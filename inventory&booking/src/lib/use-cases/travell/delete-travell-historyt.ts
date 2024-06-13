import { ItravellHistoryRepository } from "../../app/repository";

export const makeDeleteTravellHistoryUseCase = ({
  travellHistoryRepository,
}: {
  travellHistoryRepository: ItravellHistoryRepository;
}) => {
  return async (data: { userId: string; bookingId: string }) => {
    const { bookingId, userId } = data;

    const travellHistory = await travellHistoryRepository.findOne(userId);
    if (travellHistory == null) return;

    const updatedTravells = travellHistory.travells.filter(
      (travell) => travell.bookingId != bookingId
    );

    const updatedTravellHistory = await travellHistoryRepository.update(
      travellHistory._id,
      { travells: updatedTravells }
    );
    return updatedTravellHistory
  };
};
