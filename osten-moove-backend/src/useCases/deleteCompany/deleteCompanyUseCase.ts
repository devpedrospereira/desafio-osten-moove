import { AppError } from "../../error/AppError";
import { CompanyRepository } from "../../repository/CompanyRepository";

class DeleteCompanyUseCase {
  async execute(id: number) {
    const companyRepository = new CompanyRepository();

    const company = await companyRepository.findById(id);

    if (!company) {
      throw new AppError("Company not found!");
    }
    await companyRepository.delete(id);
  }
}

export { DeleteCompanyUseCase };
