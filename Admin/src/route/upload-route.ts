import express from "express";
import { uploadController } from "../lib/controller";
import { fileHandler } from "../lib/middleware/file-handler";
import { upload } from "../lib/middleware/multer-uploader";

export const uploadRoute = () => {
  const router = express.Router();

  router.post(
    "upload0-multiple/",
    upload.array("files"),
    fileHandler,
    //@ts-ignore
    uploadController.postUpload.processRequest
  );
  router.post(
    "upload-single/",
    upload.array("file"),
    fileHandler,
    //@ts-ignore
    uploadController.postUpload.processRequest
  );
  return router;
};
