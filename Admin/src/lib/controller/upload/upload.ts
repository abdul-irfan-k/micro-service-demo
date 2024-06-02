import { Request,Response } from "express";
import {
  FileUpload,
  File,
} from "../../service/file-upload/interface/file-upload";

export class FileUploadController {
  constructor(private fileUploader: FileUpload) {}

  async processRequest(req: Request & { files: File[] }, res: Response) {
    const { files } = req.body as { files: File[] };
    const filesPaths = await this.fileUploader.upload(files);

    return res.status(200).json({ filesPaths });
  }
}
