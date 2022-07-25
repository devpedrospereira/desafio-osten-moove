import { Company } from "../entities/Company";

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

// const baseURL = process.env.URL;
const baseURL = "http://localhost:3333/company";

async function listAllCompanies(): Promise<Company[]> {
    const res = await fetch(baseURL + "/list");
    const data = await res.json();
    return data;
}

async function findCompanyById(id: number): Promise<Company> {
    const res = await fetch(baseURL + `?id=${id}`);
    const data = await res.json();
    return data;
}

async function updateCompany(id: string, data: IUpdateCompany): Promise<any> {
    const result = await fetch(baseURL + `/update?id=${id}`, {
        method: "PATCH",
        body: JSON.stringify(data),
        headers: {
            "Content-Type": "application/json",
        },
    });
    return result;
}

async function deleteCompany(id: string): Promise<any> {
    const result = await fetch(baseURL + `/delete?id=${id}`, {
        method: "DELETE",
    });
    return result;
}

async function createCompany(data: ICreateCompany): Promise<any> {
    const result = await fetch(baseURL, {
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
    const res = await fetch(baseURL + `/search?fantasyName=${fantasyName}`);
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
