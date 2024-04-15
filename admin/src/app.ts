import express from "express";
import { adminRoutes } from "./router/admin-router";

const app = express();

app.use("/", adminRoutes());
export { app };
