import { Company } from "../../entity/Company";
import { CompanyRepository } from "../../repository/CompanyRepository";

class FindByIdCompanyUseCase {
  async execute(id: number): Promise<Company | null> {
    const companyRepository = new CompanyRepository();

    const company = await companyRepository.findById(id);

    if (!company) {
      throw new Error("Company not found!");
    }
    const result = await companyRepository.findById(id);
    return result;
  }
}

export { FindByIdCompanyUseCase };
