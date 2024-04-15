import express from "express";

export const adminRoutes = () => {
  const router = express.Router();

  router.get("/sign-in");
  router.post("/sign-up");
  // router.put("/:id",controller.updateUser);

  return router;
};
