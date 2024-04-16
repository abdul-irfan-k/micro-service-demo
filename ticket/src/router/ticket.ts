import express from "express";
import ticketController from "../lib/controller";

export const ticketRoute = () => {
  const router = express.Router();

  const controller = ticketController();

  router.get("/search-buses", controller.getSearchBuses);
  router.get("/buses/:id",controller.getBus);
  router.get("/bus/:id/ticket-chart",controller.getBusChart);
  
  router.post("/book-ticket",controller.postBookTicket); 
  
  router.get("/booked-tickets", controller.getBookedTickets);
  router.get("/booked-tickets/:id", controller.getBookedTicket);

  return router;
};
