import express from "express";
import { ticketRoute } from "./route/ticket";

const app = express();

app.use("/", ticketRoute);
export { app };
