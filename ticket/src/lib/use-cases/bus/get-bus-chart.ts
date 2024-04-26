import { IbusRepository } from "../../../app/repository/bus";

export const makeGetBusChartUseCase = ({
  busRepository,
}: {
  busRepository: IbusRepository;
}) => {
  return (busId: string) => {
    const buschart = busRepository.getBusesAvailabeAndBookedSeatsChart({
      busId,
    });
    return buschart
  };
};
