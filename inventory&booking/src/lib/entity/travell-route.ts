export interface travellRouteEntity {
  _id: string;
  routeName: string;
  originPlace: placeDetails;
  destinationPlace: placeDetails;
  distance:number
  stops: Array<placeDetails>;
}

interface placeDetails {
  name: string;
  coordinate: coordinates;
  distanceFromStart?: string;
}

export interface coordinates {
  lat: number;
  lng: number;
}
