import express from "express";
import { ticketRoute } from "./router/ticket";

const app = express();

app.use("/", ticketRoute);
export { app };
