import express from "express";
import { authRoutes } from "./router/auth-router";

const app = express();

app.use("/",authRoutes());
export { app };
