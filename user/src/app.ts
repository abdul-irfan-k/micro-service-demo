import express from "express";
import bodyParser from "body-parser";
import "express-async-errors";
import userRoutes from "./route/user";
import { ErrorHandler } from "./lib/middleware/error-handler";
import cookieParser from "cookie-parser";

const app = express();
app.use(cookieParser());
app.use(bodyParser());
app.use(bodyParser.json());
app.use("/", userRoutes);
app.use(ErrorHandler);
export { app };
