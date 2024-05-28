export interface travellRouteEntity {
  _id: string;
  routeName: string;

  startPlace: placeDetails;
  destinationPlace: placeDetails;
  stops: Array<placeDetails>;
}

interface placeDetails {
  placeName:string
  coordinate:coordinates
  distanceFromStart?:string
}

interface coordinates {
  lat: number;
  lng: number;
}
