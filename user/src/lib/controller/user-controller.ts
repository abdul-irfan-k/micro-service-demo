import { NextFunction } from "express";
import { dependiciesData } from "../interface/dependicies";
import { Request, Response } from "express";

export const userController = (dependicies: dependiciesData) => {
  const { repository, useCase } = dependicies;
  const createUser = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    useCase
      .createUserProfile(repository)
      .execute(req.body)
      .then((result) => res.json(result))
      .catch((err) => next(err));
  };

  const getUser = async (req: Request, res: Response, next: NextFunction) => {
    const { _id } = req.body;
    useCase
      .getUserProfile(repository)
      .execute(_id)
      .then((result) => res.json(result))
      .catch((err) => next(err));
  };

  const updateUser = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    const { _id } = req.body;
    useCase
      .updateUserProfile(repository)
      .execute(_id, req.body)
      .then((result) => res.json(result))
      .catch((err) => next(err));
  };

  return {
    createUser,
    updateUser,
    getUser,
  };
};
