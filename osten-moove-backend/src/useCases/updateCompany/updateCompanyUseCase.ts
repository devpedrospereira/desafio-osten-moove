import { IUpdateCompanyDTO } from "../../dtos/IUpdateCompanyDTO";
import { AppError } from "../../error/AppError";
import { CompanyRepository } from "../../repository/CompanyRepository";
import { validateCNPJ } from "../../utils/cnpjValidate";

class UpdateCompanyUseCase {
    async execute(data: IUpdateCompanyDTO, id?: number) {
        const { cnpj } = data;

        const companyRepository = new CompanyRepository();
        if (!id) {
            throw new AppError("Id is missing!");
        }
        const company = await companyRepository.findById(id);
        if (!company) {
            throw new AppError("Company not found!", 404);
        }

        const isValidCnpj = validateCNPJ(cnpj);

        if (!isValidCnpj) {
            throw new AppError("CNPJ is invalid!", 450);
        }
        await companyRepository.update(id, data);
    }
}

export { UpdateCompanyUseCase };
