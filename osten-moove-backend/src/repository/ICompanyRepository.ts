import { ICreateCompanyDTO } from "../dtos/ICreateCompanyDTO";
import { IUpdateCompanyDTO } from "../dtos/IUpdateCompanyDTO";
import { Company } from "../entity/Company";

interface ICompanyRepository {
    create: (data: ICreateCompanyDTO) => Promise<void>;
    list: () => Promise<Company[] | null>;
    findById: (id: number) => Promise<Company | null>;
    findByFantasyName: (fantasyName: string) => Promise<Company[]>;
    update: (id: number, data: IUpdateCompanyDTO) => Promise<void>;
    delete: (id: number) => Promise<void>;
    findByCnpj: (cpnj: string) => Promise<Company | null>
}

export {ICompanyRepository}