import express from "express";
import { ErrorHandler } from "@lib/middleware/error-handler";
import { paymentRoute } from "@route/payment";

const app = express();

app.use("/",paymentRoute)
app.use(ErrorHandler)
export { app }; 
