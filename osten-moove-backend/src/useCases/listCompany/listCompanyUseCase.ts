import { Company } from "../../entity/Company";
import { CompanyRepository } from "../../repository/CompanyRepository";

class ListCompanyUseCase {
  async execute(): Promise<Company[] | null> {
    const companyRepository = new CompanyRepository();
    const result = await companyRepository.list();
    return result;
  }
}

export { ListCompanyUseCase };
