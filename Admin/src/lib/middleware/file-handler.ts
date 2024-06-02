import { File } from "../service/file-upload/interface/file-upload";
import { Request, Response, NextFunction } from "express";

export const fileHandler = (req: Request, _: Response, next: NextFunction) => {
  const { files } = req;

  const mappedFiles: File[] = ((files as Express.Multer.File[]) || []).map(
    (file) => ({
      name: file.originalname,
      type: file.mimetype,
      path: file.path,
      size: file.size,
      extension: `${file.originalname.split(".").pop()}`,
    })
  );

  Object.assign(req.body, { files: mappedFiles });
  return next();
};
