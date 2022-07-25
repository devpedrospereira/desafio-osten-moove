import { Company } from "../../entity/Company";
import { CompanyRepository } from "../../repository/CompanyRepository";

class FindByFantasyNameCompanyUseCase {
  async execute(fantasyName: string): Promise<Company[] | null> {
    const companyRepository = new CompanyRepository();
    const result = await companyRepository.findByFantasyName(fantasyName);
    return result;
  }
}

export { FindByFantasyNameCompanyUseCase };
