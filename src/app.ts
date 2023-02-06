import { AppError } from './errors/appErrors';
import "express-async-errors";
import "reflect-metadata";

import express, { NextFunction, Request, Response } from "express";
import "express-async-errors";
import "reflect-metadata";
import contactsRoutes from "./routes/contactsRoutes";
import userRoutes from "./routes/usersRoutes";
import sessionRoutes from './routes/sessions.routes';

const cors= require("cors")
const app = express();

app.use(express.json());
app.use(cors())
app.use("/users", userRoutes);

app.use("/login", sessionRoutes);


app.use("/contacts", contactsRoutes )

app.use(
  (err: Error, request: Request, response: Response, Next: NextFunction) => {
    if (err instanceof AppError) {
      return response.status(err.statusCode).json({
        status: "erro",
        message: err.message,
      });
    }
    return response.status(500).json({
      status: "error",
      message: "Internal server error",
    });
  }
);

export default app;
