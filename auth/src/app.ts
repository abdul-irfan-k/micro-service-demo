import express from "express";
import { authRoutes } from "./router/user-auth";
import { busOwnerauthRoutes } from "./router/admin-auth";

const app = express();

app.use("/",authRoutes());
app.use("/bus-owner/",busOwnerauthRoutes())
export { app };
