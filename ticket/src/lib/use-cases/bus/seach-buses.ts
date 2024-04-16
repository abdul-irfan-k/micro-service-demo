import { IbusRepository } from "../../../app/repository/bus";
import moment from "moment";

export const makeSeachBusesUseCase = ({
  busRepository,
}: {
  busRepository: IbusRepository;
}) => {
  return (query: any) => {
    const { startingPlace, destinationPlace, travellDate, type } = query;

    const dayShortForm = moment(travellDate).format("ddd");
    const buses = busRepository.searchAvailableBuses({
      dayShortForm,
      destinationPlace,
      startingPlace,
    });

    return buses;
  };
};
