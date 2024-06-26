import { placeDetails, travellRouteEntity } from "@lib/entity";
import { ITravellRouteModel, TravellRouteModel } from "../database/schema";
import { RequireAtLeastOne } from "@lib/util/type-helper";
export const travellRouteRepository: ITravellRouteRepository = {
  update: async (_id, data) => {
    const updatedRouteDetail = await TravellRouteModel.findOneAndUpdate(
      { _id },
      data,
      { new: true }
    );
    return updatedRouteDetail;
  },

  create: async (data) => {
    const newRouteDetails = new TravellRouteModel(data);
    await newRouteDetails.save();
    return newRouteDetails;
  },
  findOne: async (args) => {
    const routeDetails = await TravellRouteModel.findOne(args);
    return routeDetails;
  },
  //@ts-ignore
  findOneByPlaces: async (args) => {
    const { destinationPlace, startPlace } = args;
    console.log("desnation place", destinationPlace, startPlace);
    const maxDistance = 5000;
    const routeDetails = await TravellRouteModel.aggregate([
      {
        $match: {
          "stops.location.coordinates": {
            $geoWithin: {
              $centerSphere: [
                startPlace.location.coordinates,
                maxDistance / 6378.1,
              ], // Divide maxDistance by Earth's radius in kilometers (approx. 6378.1) for $centerSphere
            },
          },
        },
      },
      {
        $match: {
          "stops.location.coordinates": {
            $geoWithin: {
              $centerSphere: [
                destinationPlace.location.coordinates,
                maxDistance / 6378.1,
              ],
            },
          },
        },
      },
    ]);
    //@ts-ignore
    return routeDetails;
  },
};

export interface ITravellRouteRepository {
  update: (
    routeId: string,
    data: Partial<travellRouteEntity>
  ) => Promise<ITravellRouteModel | null>;
  create: (
    data: Omit<travellRouteEntity, "_id"> & {
      _id?: string;
    }
  ) => Promise<ITravellRouteModel | null>;

  findOne: (
    args: RequireAtLeastOne<Pick<travellRouteEntity, "_id" | "routeName">>
  ) => Promise<ITravellRouteModel | null>;
  findOneByPlaces: (args: {
    startPlace: placeDetails;
    destinationPlace: placeDetails;
    maxDistance?: number;
    minDistance?: number;
  }) => Promise<ITravellRouteModel | null>;
}
