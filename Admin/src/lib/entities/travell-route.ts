export interface travellRouteEntity {
  _id: string;
  routeName: string;
  originPlace: placeDetails;
  destinationPlace: placeDetails;
  distance: number;
  stops: Array<placeDetails>;
}

interface placeDetails {
  _id: string;
  name: string;
  location: {
    type: "Point";
    coordinates: number[];
  };
}
