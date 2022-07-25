import { Request, Response } from "express";
import { CreateCompanyUseCase } from "./createCompanyUseCase";

class CreateCompanyController {
    async handle(request: Request, response: Response): Promise<Response>{
        const data = request.body

        const createCompanyUseCase = new CreateCompanyUseCase()
        await createCompanyUseCase.execute(data)

        return response.status(201).send()
    }
}   


export {CreateCompanyController}