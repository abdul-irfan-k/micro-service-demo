import express from "express";

import {userRoutes} from "./router/user-route";
const app = express();

app.use("/", userRoutes());
export { app };
