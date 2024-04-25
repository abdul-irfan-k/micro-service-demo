import express from "express";
import bodyParser from "body-parser";
import { userRoutes } from "./route/user";
import { ErrorHandler } from "./lib/middleware/error-handler";
import "express-async-errors";

const app = express();
app.use(bodyParser());
app.use(bodyParser.json());

app.use("/", userRoutes());
app.use(ErrorHandler);
export { app };
