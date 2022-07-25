import { Router } from "express";
import { CreateCompanyController } from "../useCases/createCompany/createCompanyController";
import { DeleteCompanyController } from "../useCases/deleteCompany/deleteCompanyController";
import { FindByFantasyNameCompanyController } from "../useCases/findByFantasyNameCompany/findByFantasyNameCompanyController";
import { FindByIdCompanyController } from "../useCases/findByIdCompany/findByIdCompanyController";
import { ListCompanyController } from "../useCases/listCompany/listCompanyController";
import { UpdateCompanyController } from "../useCases/updateCompany/updateCompanyController";

const companyRoutes = Router();

const createCompanyController = new CreateCompanyController();
const listCompanyController = new ListCompanyController();
const updateCompanyController = new UpdateCompanyController();
const findByIdCompanyController = new FindByIdCompanyController();
const findByFantasyNameCompanyController = new FindByFantasyNameCompanyController();
const deleteCompanyController = new DeleteCompanyController();

companyRoutes.post("/", createCompanyController.handle)
companyRoutes.get("/list", listCompanyController.handle)
companyRoutes.patch("/update", updateCompanyController.handle)
companyRoutes.get("/", findByIdCompanyController.handle)
companyRoutes.get("/search", findByFantasyNameCompanyController.handle)
companyRoutes.delete("/delete", deleteCompanyController.handle)

export { companyRoutes };
