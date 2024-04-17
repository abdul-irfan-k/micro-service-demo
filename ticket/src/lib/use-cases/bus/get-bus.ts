import { IbusRepository } from "../../../app/repository/bus";
import moment from "moment";

export const makeGetBusUseCase = ({
  busRepository,
}: {
  busRepository: IbusRepository;
}) => {
  return async (busId: string) => {
    const busDetail = await busRepository.getBusDetail(busId);
    return busDetail
  };
};
