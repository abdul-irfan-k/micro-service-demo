import express from "express";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import "express-async-errors";

import busRoute from "@route/bus";
import bookingRoute from "@route/booking";
import { ErrorHandler } from "@lib/middleware/error-handler";

const app = express();
app.use(cookieParser());
app.use(bodyParser());
app.use(bodyParser.json());

app.use("/", busRoute);
app.use("/", bookingRoute);
app.use(ErrorHandler);
export { app };
