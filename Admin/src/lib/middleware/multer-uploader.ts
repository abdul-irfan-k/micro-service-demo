import multer from "multer";
import path from "path";
import { rootPath } from "src/base-file-path";

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(rootPath, "../", "public", "upload"));
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(
      null,
      file.fieldname + "-" + uniqueSuffix + "." + file.mimetype.split("/")[1]
    );
  },
});
export const upload = multer({ storage });
