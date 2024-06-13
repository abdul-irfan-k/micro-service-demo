import { ItravellHistoryRepository } from "../../app/repository";

export const makeDeleteAllTravellHistoryUseCase = ({
  travellHistoryRepository,
}: {
  travellHistoryRepository: ItravellHistoryRepository;
}) => {
  return async(userId: string) => {
    const updatedTravellHistory = await travellHistoryRepository.update(
      userId,
      { travells: [] }
    );
    return updatedTravellHistory
  };
};
