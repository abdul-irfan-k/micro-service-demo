import express from "express";

import {userRoutes} from "./route/user";
const app = express();

app.use("/", userRoutes());
export { app };
