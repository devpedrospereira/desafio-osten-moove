import { Request, Response } from "express";
import { AppError } from "../../error/AppError";
import { FindByIdCompanyUseCase } from "./findByIdCompanyUseCase";

class FindByIdCompanyController {
    async handle(request: Request, response: Response): Promise<Response> {
        const { id } = request?.query;
        if (!id) {
            throw new AppError("Id is missing!", 404);
        }
        const findByIdCompanyUseCase = new FindByIdCompanyUseCase();
        const result = await findByIdCompanyUseCase.execute(
            parseInt(String(id))
        );

        return response.json(result);
    }
}

export { FindByIdCompanyController };
