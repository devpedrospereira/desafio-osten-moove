import React from "react";
import { Form } from "@unform/web";
import Input from "../../input";
import styles from "./styles.module.scss";
import { createCompany } from "../../../services/repository";

interface ICreateCompanyProps {
    closeModal: () => void;
}

interface IValidDataCreateCampany {
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

export function CreateCompany(props: ICreateCompanyProps) {
    async function handleSubmit(data: IValidDataCreateCampany) {
        const result = await createCompany(data);
        if (result.status !== 201) {
            switch (result.status) {
                case 450:
                    alert("CNPJ inválido! Por favor, tente novamente.");
                    return;
                case 409:
                    alert("Já existe um risgistro para o CNPJ informado.");
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
                    name="corporateName"
                    placeholder="Razão social"
                    required
                    className={styles.input}
                />
                <Input
                    name="fantasyName"
                    placeholder="Nome fantasia"
                    required
                    className={styles.input}
                />
                <Input
                    name="cnpj"
                    placeholder="CNPJ"
                    required
                    className={styles.input}
                />
                <Input
                    name="phoneNumber"
                    placeholder="Telefone para contato"
                    required
                    className={styles.input}
                />

                <label className="text-lg font-bold text-gray-600 mt-5">
                    Endereço
                </label>
                <Input
                    name="street"
                    placeholder="Logradouro"
                    required
                    className={styles.input}
                />
                <Input
                    name="complement"
                    placeholder="Complemento"
                    className={styles.input}
                />
                <Input
                    name="addressNumber"
                    placeholder="Número"
                    required
                    className={styles.input}
                />
                <Input
                    name="district"
                    placeholder="Bairro"
                    required
                    className={styles.input}
                />
                <Input
                    name="city"
                    placeholder="Cidade"
                    required
                    className={styles.input}
                />
                <Input
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
