import { AWSFileUpload } from "./aws/aws-file-uploader";
import { CloudinaryFileUploadHandler } from "./cloudinary/cloudinary-uploader";
import { FileUpload } from "./interface/file-upload";

export class FileUploadFactory {
  static createFileUploader(): FileUpload {
    const isProduction = process.env.NODE_ENV == "production";
    if (isProduction) {
      const awsAcessKeyId = process.env.AWS_ACESS_KEY_ID || "";
      const awsSecretKey = process.env.AWS_SECRET_KEY || "";
      return new AWSFileUpload(awsAcessKeyId, awsSecretKey);
    } else {
      const cloudinarCloudName = process.env.CLOUDINARY_CLOUD_NAME || "";
      const cloudinarApiKey = process.env.CLOUDINARY_API_KEY || "";
      const cloudinarApiSecret = process.env.CLOUDINARY_API_SECRET || "";
      return new CloudinaryFileUploadHandler(
        cloudinarCloudName,
        cloudinarApiKey,
        cloudinarApiSecret
      );
    }
  }
}
