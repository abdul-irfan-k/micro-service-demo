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
    const maxDistance = 2;
    const routeDetails = await TravellRouteModel.aggregate([
      {
        $geoNear: {
          near: {
            type: "Point",
            coordinates: [
              startPlace.location.coordinates[0],
              startPlace.location.coordinates[1],
            ],
          },
          distanceField: "dist.calculated1",
          maxDistance: maxDistance,
          spherical: true,
        },
      },
      {
        $geoNear: {
          near: {
            type: "Point",
            coordinates: [
              destinationPlace.location.coordinates[0],
              destinationPlace.location.coordinates[1],
            ],
          },
          distanceField: "dist.calculated2",
          maxDistance: maxDistance,
          spherical: true,
        },
      },
      {
        $match: {
          $and: [
            {
              "stops.location.coordinates": {
                $near: {
                  $geometry: {
                    type: "Point",
                    coordinates: [
                      startPlace.location.coordinates[0],
                      startPlace.location.coordinates[1],
                    ],
                  },
                  $maxDistance: maxDistance,
                },
              },
            },
            {
              "stops.location.coordinates": {
                $near: {
                  $geometry: {
                    type: "Point",
                    coordinates: [
                      destinationPlace.location.coordinates[0],
                      destinationPlace.location.coordinates[1],
                    ],
                  },
                  $maxDistance: maxDistance,
                },
              },
            },
          ],
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
