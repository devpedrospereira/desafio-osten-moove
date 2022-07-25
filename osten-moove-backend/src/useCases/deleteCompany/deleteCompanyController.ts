import { Request, Response } from "express";
import { AppError } from "../../error/AppError";
import { DeleteCompanyUseCase } from "./deleteCompanyUseCase";

class DeleteCompanyController {
    async handle(request: Request, response: Response): Promise<Response> {
        const { id } = request.query;
        if (!id) {
            throw new AppError("Id is missing!", 404);
        }
        const deleteCompanyUseCase = new DeleteCompanyUseCase();
        await deleteCompanyUseCase.execute(Number(id));

        return response.status(204).send();
    }
}

export { DeleteCompanyController };
