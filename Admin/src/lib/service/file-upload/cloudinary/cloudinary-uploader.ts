import { BadRequestError } from "../../../util/bad-request-error";
import { File, FileUpload, UploadedFile } from "../interface/file-upload";
import { UploadApiOptions, v2 as cloudinary } from "cloudinary";

export class CloudinaryFileUploadHandler implements FileUpload {
  constructor(
    cloudName: string,
    cloudinaryApiKey: string,
    cloudinaryApiSecret: string
  ) {
    cloudinary.config({
      cloud_name: cloudName,
      api_key: cloudinaryApiKey,
      api_secret: cloudinaryApiSecret,
    });
  }
  async upload(files: File | File[]): Promise<UploadedFile | UploadedFile[]> {
    try {
      if (Array.isArray(files)) {
        const paths = await Promise.all(
          files.map(async (file) => this.uploadFile(file))
        );
        return paths.map((path) => ({ path }));
      }

      const path = await this.uploadFile(files);
      return {
        path,
      };
    } catch {
      throw new BadRequestError({ code: 400, message: "File upload error" });
    }
  }

  private async uploadFile(file: File, options?: UploadApiOptions) {
    const { url } = await cloudinary.uploader.upload(file.path, options);
    return url;
  }

  private getResourceType() {}
}
