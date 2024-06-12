import express from "express";
import { uploadController } from "../lib/controller";
import { fileHandler } from "../lib/middleware/file-handler";
import { upload } from "../lib/middleware/multer-uploader";
import { makeExpressCallBack } from "@lib/middleware/express-callback";

const router = express.Router();

router.post(
  "upload0-multiple/",
  upload.array("files"),
  fileHandler,
  makeExpressCallBack(uploadController.postUpload)
);
router.post(
  "upload-single/",
  upload.array("file"),
  fileHandler,
  //@ts-ignore
  makeExpressCallBack(uploadController.postUpload)
);
export default router;
