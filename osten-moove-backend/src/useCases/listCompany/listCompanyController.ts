import { Request, Response } from "express";
import { ListCompanyUseCase } from "./listCompanyUseCase";

class ListCompanyController {
    async handle(request: Request, response: Response): Promise<Response>{
        const listCompanyUseCase = new ListCompanyUseCase()
        const result = await listCompanyUseCase.execute()

        return response.json(result)
    }
}

export {ListCompanyController}