import express from "express";

export const ticketRoute = () => {
  const router = express.Router();

  router.get("/search-tickets");
  router.post("/book-ticket");
  router.get("/:id");

  router.get("/booked-tickets");
  router.get("/booked-tickets/:id");


  router.get('/ticket-chart')

  return router;
};
