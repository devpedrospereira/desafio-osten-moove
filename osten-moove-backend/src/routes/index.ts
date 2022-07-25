import express from "express";
import { companyRoutes } from "./company.routes";

const routes = express();

routes.use('/company', companyRoutes);

export { routes };