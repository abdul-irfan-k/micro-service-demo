import express from "express";

export const paymentRoute = () => {
  const router = express.Router();

  router.post("payment-request");
  router.post("payment");

  router.post("payment-success");
  router.post("payment-cancel");
  router.post("payment-failure");
  return router;
};
