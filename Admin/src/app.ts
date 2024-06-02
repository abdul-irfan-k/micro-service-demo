import express from "express";
import bodyParser from "body-parser";
import { ErrorHandler } from "./lib/middleware/error-handler";
import { busRoute } from "./route/bus";
import { scheduleRoute } from "./route/schedule-route";
import { travellRouteRouter } from "./route/travell-route";
import { uploadRoute } from "./route/upload-route";
import "express-async-errors";

const app = express();

// app.use(express.json())
app.use(bodyParser());
app.use(bodyParser.json());
// app.use(express.json())

app.use("/", busRoute());
app.use("/", scheduleRoute());
app.use("/", travellRouteRouter());
app.use("/", uploadRoute());
app.use(ErrorHandler);
export { app };
