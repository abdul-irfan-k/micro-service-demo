import express from "express";
const router = express.Router();

router.get("/", (req, res) => {
  return res.status(200).send("/user route");
});

export default router;
