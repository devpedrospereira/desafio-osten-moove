import { Request, Response } from "express";
import { FindByFantasyNameCompanyUseCase } from "./findByFantasyNameCompanyUseCase";

class FindByFantasyNameCompanyController {
    async handle(request: Request, response: Response): Promise<Response>{
        const {fantasyName} = request.query
        if (!fantasyName) {
            throw new Error("Fantasy name not found!");
        }
        const findByFantasyNameCompanyUseCase = new FindByFantasyNameCompanyUseCase()
        const result = await findByFantasyNameCompanyUseCase.execute(String(fantasyName))

        return response.json(result)
    }
}

export {FindByFantasyNameCompanyController}