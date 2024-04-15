export interface IRoute {
  startPlace: string;
  destinationPlace: string;
  stops: Array<{
    placeName: string;
  }>;
  distance?: number;
}

export class Route {
  startPlace: string;
  destinationPlace: string;
  stops: Array<{
    placeName: string;
  }>;
  distance?: number;
  constructor({ destinationPlace, startPlace, stops, distance }: IRoute) {
    this.startPlace = startPlace;
    this.destinationPlace = destinationPlace;
    this.stops = stops;
    this.distance = distance;
  }
}
