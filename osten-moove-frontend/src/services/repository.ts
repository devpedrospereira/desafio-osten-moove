import { Company } from "../entities/Company";
import { server } from "../../config";

interface IResponse {}

interface IUpdateCompany {
    corporateName?: string;
    fantasyName?: string;
    cnpj: string;
    phoneNumber?: string;
    street?: string;
    addressNumber?: string;
    complement?: string;
    district?: string;
    city?: string;
    federatedUnit?: string;
}

interface ICreateCompany {
    corporateName: string;
    fantasyName: string;
    cnpj: string;
    phoneNumber: string;
    street: string;
    addressNumber: string;
    complement?: string;
    district: string;
    city: string;
    federatedUnit: string;
}

const baseURL = process.env.URL;

async function listAllCompanies(): Promise<Company[]> {
    const res = await fetch(`${server}/company/list`);
    const data = await res.json();
    return data;
}

async function findCompanyById(id: number): Promise<Company> {
    const res = await fetch(`${server}/company?id=${id}`);
    const data = await res.json();
    return data;
}

async function updateCompany(id: string, data: IUpdateCompany): Promise<any> {
    const result = await fetch(`${server}/company/update?id=${id}`, {
        method: "PATCH",
        body: JSON.stringify(data),
        headers: {
            "Content-Type": "application/json",
        },
    });
    return result;
}

async function deleteCompany(id: string): Promise<any> {
    const result = await fetch(`${server}/company/delete?id=${id}`, {
        method: "DELETE",
    });
    return result;
}

async function createCompany(data: ICreateCompany): Promise<any> {
    const result = await fetch(`${server}/company`, {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
            "Content-Type": "application/json",
        },
    });
    return result;
}

async function searchCompanyByFantasyName(
    fantasyName: string
): Promise<Company[]> {
    const res = await fetch(
        `${server}/company/search?fantasyName=${fantasyName}`
    );
    const data = await res.json();
    return data;
}

export {
    listAllCompanies,
    findCompanyById,
    updateCompany,
    createCompany,
    searchCompanyByFantasyName,
    deleteCompany,
};
