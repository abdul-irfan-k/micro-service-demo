import express from "express";
import bodyParser from "body-parser";
import "express-async-errors";

import busRoute from "./route/bus";
import scheduleRoute from "./route/schedule-route";
import travellRouteRoute from "./route/travell-route";
import uploadRoute from "./route/upload-route";
import { ErrorHandler } from "@lib/middleware/error-handler";

const app = express();

// app.use(express.json())
app.use(bodyParser());
app.use(bodyParser.json());
// app.use(express.json())

app.use("/", busRoute);
app.use("/", scheduleRoute);
app.use("/", travellRouteRoute);
app.use("/", uploadRoute);
app.use(ErrorHandler);
export { app };
