import "reflect-metadata";
import "express-async-errors";
import "dotenv/config";
import express, { NextFunction, Request, Response } from "express";
import { routes } from "../src/routes";
import { AppError } from "./error/AppError";
import cors from "cors";

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

app.use(
    (err: Error, request: Request, response: Response, next: NextFunction) => {
        if (err instanceof AppError) {
            response.status(err.statusCode).json({
                message: err.message,
            });
        }

        return response.status(500).json({
            status: "Error",
            message: `Internal server Error - ${err.message}`,
        });
    }
);

app.get("/", (req: Request, res: Response) => {
    res.json({ Hello: "Welcome to Osten Moove!" });
});

app.listen(process.env.PORT || 3333, () => console.log("Server is running!"));
