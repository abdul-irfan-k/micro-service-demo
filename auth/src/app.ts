import express from 'express';
import bodyParser from 'body-parser';
import 'express-async-errors';
import { busOwnerauthRoutes } from './router/admin-auth';
import authRoutes from './router/user-auth';
import { ErrorHandler } from './lib/middleware/error-handler';
import cookieParser from 'cookie-parser';

const app = express();

// app.use(express.json())
app.use(cookieParser());
app.use(bodyParser());
app.use(bodyParser.json());
// app.use(express.json())
app.use('/', authRoutes);
//asdf"
// app.use("/bus-owner/", busOwnerauthRoutes());
app.use(ErrorHandler);
export { app };
