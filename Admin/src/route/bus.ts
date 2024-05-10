import express from "express";
export const busRoute = () => {
  const router = express.Router();

  router.get("/buses");
  router.get("/bus/:id");

  router.post("/buses");
  router.put("/buses/:id");

  router.post("/buses/:id/schedule");
  return router;
};
