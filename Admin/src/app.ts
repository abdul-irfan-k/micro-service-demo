import express from "express";
import bodyParser from "body-parser";
import { ErrorHandler } from "./lib/middleware/error-handler";
import "express-async-errors";
import { busRoute } from "./route/bus";

const app = express();

// app.use(express.json())
app.use(bodyParser());
app.use(bodyParser.json());
// app.use(express.json())




app.use("/",busRoute())
app.use(ErrorHandler);
export { app };
