import { IbusRepository } from "../../app/repository/bus";
import moment from "moment";

export class SeaachBusesUseCase {
  constructor(private busRepository: IbusRepository) {}
  async execute(query: any) {
    const { startingPlace, destinationPlace, travellDate, type } = query;

    const dayShortForm = moment(travellDate).format("ddd");
    const buses = this.busRepository.searchAvailableBuses({
      dayShortForm,
      destinationPlace,
      startingPlace,
    });

    return buses;
  }
}
