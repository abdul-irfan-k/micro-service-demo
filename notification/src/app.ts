import express from "express";
import bodyParser from "body-parser";
import "express-async-errors";
import { ErrorHandler } from "@/lib/middleware/error-handler";

const app = express();

// app.use(express.json())
app.use(bodyParser());
app.use(bodyParser.json());
// app.use(express.json())
 

app.use(ErrorHandler);
export { app };
