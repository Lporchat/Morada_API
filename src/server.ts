import express, { NextFunction, Request, Response } from "express";
import "express-async-errors";
import "reflect-metadata";
import morgan from "morgan";
import swaggerUI from "swagger-ui-express";
import swaggerFile from "../swagger.json";

import "../src/shared/infra/typeorm";
import { AppError } from "../src/shared/errors/AppError";

const app = express();

app.use(express.json());
app.use(morgan("dev"));

app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(swaggerFile));

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  if (err instanceof AppError) {
    return res.status(err.statusCode).json({ message: err.message });
  }
  return res.status(500).json({
    status: "Error",
    message: `Internal Server Error: ${err.message}`,
  });
});


app.listen(3000, () => console.log("its running !!! 🙈"));