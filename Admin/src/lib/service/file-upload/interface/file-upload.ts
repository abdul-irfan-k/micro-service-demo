export interface File {
  name: string;
  size: number;
  type: string;
  extension: string;
  path: string;
}
export interface UploadedFile {
  path: string;
}

export interface FileUpload {
  upload: (files: File | File[]) => Promise<UploadedFile | UploadedFile[]>;
}
