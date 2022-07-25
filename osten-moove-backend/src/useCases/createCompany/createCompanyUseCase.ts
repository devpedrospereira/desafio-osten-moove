import { ICreateCompanyDTO } from "../../dtos/ICreateCompanyDTO";
import { AppError } from "../../error/AppError";
import { CompanyRepository } from "../../repository/CompanyRepository";
import { validateCNPJ } from "../../utils/cnpjValidate";

class CreateCompanyUseCase {
    async execute(data: ICreateCompanyDTO) {
        const { cnpj } = data;
        const companyRepository = new CompanyRepository();
        const companyAlreadyExists = await companyRepository.findByCnpj(cnpj);

        if (companyAlreadyExists) {
            throw new AppError("Company already exists!", 409);
        }

        const isValidCnpj = validateCNPJ(cnpj);

        if (!isValidCnpj) {
            throw new AppError("CNPJ is invalid", 450);
        }

        await companyRepository.create(data);
    }
}

export { CreateCompanyUseCase };
