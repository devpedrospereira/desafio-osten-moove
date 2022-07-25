import Router from "next/router";
import React from "react";
import { deleteCompany } from "../../../services/repository";

interface IDeleteCompanyProps {
    id: number;
    closeModal: () => void;
}

export function DeleteCompany(props: IDeleteCompanyProps) {
    async function handleClick() {
        const result = await deleteCompany(props.id.toString());
        if (result.status != 204) {
            alert("Erro ao excluir. Por favor, tente novamente");
            return;
        }
        props.closeModal();
    }

    return (
        <div className="flex flex-col h-auto w-[36rem] px-14 py-7">
            {/* <div className="flex flex-col h-[85vh] w-[36rem] px-14 py-7">
                onSubmit={handleSubmit}
                className="flex flex-col w-full h-full "
            > */}
            <h1 className="text-2xl font-bold text-gray-600">
                Excluir empresa
            </h1>
            <div className="w-full h-[3px] bg-gray-100"></div>

            <p className="text-gray-300 text-xl w-full mb-6">
                Tem certeza que deseja excluir a empresa da base de dados? Não
                sera possivel recuperar os dados excluidos.
            </p>

            <div className="flex w-full h-14 items-center justify-end gap-4 ">
                <button
                    onClick={props.closeModal}
                    type="button"
                    className={
                        "w-[8rem] h-full rounded-md bg-blue-700 text-white text-lg hover:opacity-90 hover:transition-opacity hover:cursor-pointer"
                    }
                >
                    Cancelar
                </button>
                <button
                    type="button"
                    className={
                        "w-[8rem] h-full rounded-md bg-red-500 text-white text-lg hover:opacity-90 hover:transition-opacity hover:cursor-pointer"
                    }
                    onClick={handleClick}
                >
                    Sim, excluir!
                </button>
            </div>
        </div>
    );
}
