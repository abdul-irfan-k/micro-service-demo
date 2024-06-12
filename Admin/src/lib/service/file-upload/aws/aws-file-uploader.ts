import { File, FileUpload, UploadedFile } from "../interface/file-upload";
import { S3 } from "aws-sdk";
import { v4 as uuid } from "uuid";
import fs from "fs";
import { BadRequestError } from "@lib/util/bad-request-error";

const s3Config = {
  bucketName: process.env.AWS_S3_BUCKET,
  defaultRegion: process.env.DEFAULT_REGION,
  defaultFilesACL: process.env.DEFAULT_FILES_ACL,
};

export class AWSFileUpload implements FileUpload {
  private s3: S3;
  //@ts-ignore
  private readonly bucketName: string = s3Config.bucketName;
  constructor(accessKeyId: string, secretAccessKey: string) {
    this.s3 = new S3({ accessKeyId, secretAccessKey });
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

  private async uploadFile(file: File) {
    const fileKey = this.generateFileKey(file);
    await this.s3.upload({
      Bucket: this.bucketName,
      Key: fileKey,
      ContentType: file.type,
      Body: fs.createReadStream(file.path),
      ACL: s3Config.defaultFilesACL,
    });

    return `${this.bucketName}/${fileKey}`;
  }

  private generateFileKey(file: File): string {
    const randomUUID = uuid();
    return `${randomUUID}.${file.extension}`;
  }
}
