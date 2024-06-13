import { ItravellHistoryRepository } from "../../app/repository";

export const makeGetTravellHistoryUseCase = ({
  travellHistoryRepository,
}: {
  travellHistoryRepository: ItravellHistoryRepository;
}) => {
  return async (data: {
    userId: string;
    limit?: number;
    skip?: number;
    step?: number;

  }) => {
    const {userId} =data
    const travellHistory = await travellHistoryRepository.getTravellHistory(userId)
    return travellHistory
  };
};
