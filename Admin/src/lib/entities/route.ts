export interface routeEntity {
    _id:string
    startPlace: string;
    destinationPlace: string;
    stops: Array<{
      address: string;
      name:string
    }>;
    distance?: number;
}