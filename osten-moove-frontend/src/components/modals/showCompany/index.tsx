import React from "react";
import { X } from "phosphor-react";
import styles from "./styles.module.scss";
import { Company } from "../../../entities/Company";

interface ICompany {
    id: number;
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
    created_at: Date;
}

interface ShowCompanyProps {
    company: Company | undefined;
    closeModal: () => void;
}

export function ShowCompany(props: ShowCompanyProps) {
    const { company } = props;

    if (!company) {
        return <></>;
    }

    return (
        <div className="w-[44rem] ">
            <div className="w-full border-b-[2px] border-gray-100 pl-14 pt-7 pb-2 ">
                <div className="absolute right-3 top-3 hover:cursor-pointer hover:opacity-80 transition-opacity ">
                    <X
                        size={30}
                        color="#F75A68"
                        weight="bold"
                        onClick={() => props.closeModal()}
                    />
                </div>
                <h1 className="text-2xl font-bold text-gray-600 ">
                    Dados da empresa
                </h1>
            </div>
            <div className="px-14 py-8">
                <dl className={styles.list}>
                    <dt>Identificador</dt>
                    <dd>{company.id}</dd>
                    <dt>Razão social</dt>
                    <dd>{company.corporateName}</dd>
                    <dt>Nome fantasia</dt>
                    <dd>{company.fantasyName}</dd>
                    <dt>CNPJ</dt>
                    <dd>{company.cnpj}</dd>
                    <dt>Telefone</dt>
                    <dd>{company.phoneNumber}</dd>
                    <dt>Endereço</dt>
                    <dd>
                        {company.street} <span>{company.addressNumber}</span>
                    </dd>
                    <dd>{company.district}</dd>
                    <dd>
                        {company.city}
                        {" - "}
                        <span>{company.federatedUnit}</span>
                    </dd>
                </dl>
            </div>
        </div>
    );
}
