import { Request, Response } from "express";
import { AppError } from "../../error/AppError";
import { UpdateCompanyUseCase } from "./updateCompanyUseCase";

class UpdateCompanyController {
    async handle(request: Request, response: Response): Promise<Response> {
        const data = request.body;
        const { id } = request.query;

        if (!id) {
            throw new AppError("Id is missing!", 400);
        }
        const updateCompanyUseCase = new UpdateCompanyUseCase();
        await updateCompanyUseCase.execute(data, parseInt(String(id)));

        return response.status(200).send();
    }
}

export { UpdateCompanyController };
