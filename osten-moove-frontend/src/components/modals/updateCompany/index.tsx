import React from "react";
import { Form } from "@unform/web";
import Input from "../../input";
import styles from "./styles.module.scss";
import { Company } from "../../../entities/Company";
import { updateCompany } from "../../../services/repository";

interface IUpdateCompanyProps {
    company: Company;
    closeModal: () => void;
}

interface IFormData {
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

export function UpdateCompany(props: IUpdateCompanyProps) {
    async function handleSubmit(data: IFormData) {
        const { id } = props.company;

        const result = await updateCompany(id!.toString(), data);

        if (result.status !== 200) {
            switch (result.status) {
                case 400:
                    alert(
                        "Erro ao editar! Por favor tente novamente." + id + data
                    );
                    return;
                case 450:
                    alert("CNPJ inválido! Por favor, tente novamente.");
                    return;
            }
            return;
        }
        props.closeModal();
    }

    return (
        <div className="flex flex-col h-[85vh] w-[36rem] px-14 py-7">
            <Form
                onSubmit={handleSubmit}
                className="flex flex-col w-full h-full "
            >
                <h1 className="text-2xl font-bold text-gray-600">
                    Adicionar Empresa
                </h1>
                <div className="w-full h-[3px] bg-gray-100"></div>
                <label className="text-lg font-bold text-gray-600 mt-5 ">
                    Dados
                </label>

                <Input
                    defaultValue={props.company.corporateName}
                    name="corporateName"
                    placeholder="Razão social"
                    required
                    className={styles.input}
                />
                <Input
                    defaultValue={props.company.fantasyName}
                    name="fantasyName"
                    placeholder="Nome fantasia"
                    required
                    className={styles.input}
                />
                <Input
                    defaultValue={props.company.cnpj}
                    name="cnpj"
                    placeholder="CNPJ"
                    required
                    className={styles.input}
                />
                <Input
                    defaultValue={props.company.phoneNumber}
                    name="phoneNumber"
                    placeholder="Telefone para contato"
                    required
                    className={styles.input}
                />

                <label className="text-lg font-bold text-gray-600 mt-5">
                    Endereço
                </label>
                <Input
                    defaultValue={props.company.street}
                    name="street"
                    placeholder="Logradouro"
                    required
                    className={styles.input}
                />
                <Input
                    defaultValue={props.company.complement}
                    name="complement"
                    placeholder="Complemento"
                    className={styles.input}
                />
                <Input
                    defaultValue={props.company.addressNumber}
                    name="addressNumber"
                    placeholder="Número"
                    required
                    className={styles.input}
                />
                <Input
                    defaultValue={props.company.district}
                    name="district"
                    placeholder="Bairro"
                    required
                    className={styles.input}
                />
                <Input
                    defaultValue={props.company.city}
                    name="city"
                    placeholder="Cidade"
                    required
                    className={styles.input}
                />
                <Input
                    defaultValue={props.company.federatedUnit}
                    name="federatedUnit"
                    placeholder="Estado"
                    required
                    className={styles.input}
                />
                <div className="flex justify-end gap-4 mt-6">
                    <button
                        onClick={props.closeModal}
                        className={
                            "w-[8rem] h-14 rounded-md bg-red-500 text-white text-lg hover:opacity-90 hover:transition-opacity hover:cursor-pointer"
                        }
                    >
                        Cancelar
                    </button>
                    <button
                        type="submit"
                        className={
                            "w-[8rem] h-14 rounded-md bg-blue-700 text-white text-lg hover:opacity-90 hover:transition-opacity hover:cursor-pointer"
                        }
                    >
                        Salvar
                    </button>
                </div>
            </Form>
        </div>
    );
}
