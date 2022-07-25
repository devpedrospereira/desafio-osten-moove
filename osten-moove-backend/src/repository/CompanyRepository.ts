import { ICreateCompanyDTO } from "../dtos/ICreateCompanyDTO";
import { ICompanyRepository } from "./ICompanyRepository";
import { IUpdateCompanyDTO } from "../dtos/IUpdateCompanyDTO";
import { AppDataSource } from "../../data-source";
import { Company } from "../entity/Company";
import { AppError } from "../error/AppError";

class CompanyRepository implements ICompanyRepository {
    private repository;
    constructor() {
        this.repository = AppDataSource.manager;
    }

    async create(data: ICreateCompanyDTO): Promise<void> {
        try {
            const company = this.repository.create(Company, data);
            await this.repository.save(company);
        } catch (err) {
            throw new AppError("Error while creating!", 500);
        }
    }

    async list(): Promise<Company[] | null> {
        try {
            const allCompanies = await this.repository.find(Company);
            return allCompanies;
        } catch (err) {
            throw new AppError("Error while listing!", 500);
        }
    }

    async findById(id: number): Promise<Company | null> {
        try {
            const company = await this.repository.findOneBy(Company, {
                id: id,
            });
            return company;
        } catch (err) {
            throw new AppError("Error while finding!", 500);
        }
    }

    async findByFantasyName(fantasyName: string): Promise<Company[]> {
        try {
            const companies = await this.repository.find(Company, {
                where: { fantasyName: fantasyName },
                // select: ["id", "fantasyName", "cnpj"],
            });
            return companies;
        } catch (err) {
            throw new AppError("Error while finding!", 500);
        }
    }

    async findByCnpj(cnpj: string): Promise<Company | null> {
        try {
            const company = await this.repository.findOne(Company, {
                where: { cnpj: cnpj },
                select: ["id"],
            });
            return company;
        } catch (err) {
            throw new AppError("Error while finding!", 500);
        }
    }

    async update(id: number, data: IUpdateCompanyDTO): Promise<void> {
        const company = await this.findById(id);
        if (!company) {
            throw new AppError("Company not found!");
        }
        try {
            console.log(data);

            await this.repository.update(Company, id, data);
        } catch (err) {
            throw new AppError("Error while updating!", 500);
        }
    }

    async delete(id: number): Promise<void> {
        const company = await this.findById(id);
        if (!company) {
            throw new AppError("Company not found!");
        }
        try {
            await this.repository.delete(Company, id);
        } catch (err) {
            throw new AppError("Error while updating!", 500);
        }
    }
}

export { CompanyRepository };
