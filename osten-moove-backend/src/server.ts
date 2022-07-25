import "reflect-metadata";
import "express-async-errors";
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
    res.send("Hello!");
});

app.listen(3333, () => console.log("Server is running!"));
