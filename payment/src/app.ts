import express from "express";
import paymentRouter from './router/payment-router'

const app = express();

app.use("/",paymentRouter)
export { app }; 
