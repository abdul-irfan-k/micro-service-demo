import express from "express";

import userRouter from "./router/user-route";
const app = express();

app.use("/", userRouter);
export { app };
