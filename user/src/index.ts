import express from "express";

import userRouter from "./router/user-route";

const app = express();

app.use("/user", userRouter);
app.get("/", (req, res) => {
  return res.status(200).send("user api modified");
});

app.listen(8000, () => {
  console.log("listening on port 8000");
});
