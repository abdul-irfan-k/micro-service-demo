import express from "express";
const router = express.Router();

router.get("/", (req, res) => {
  return res.status(200).send("/user route");
});



router.post("/tickets", async (req, res) => {
  console.log("tickets route ");
  return res.send("tickets");
});
export default router;
