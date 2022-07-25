import type { NextPage } from "next";
import {
    Plus,
    MagnifyingGlass,
    TrashSimple,
    PencilSimple,
} from "phosphor-react";
import { FC, ReactComponentElement, useState } from "react";
import { Form } from "@unform/web";
import {
    listAllCompanies,
    searchCompanyByFantasyName,
} from "../services/repository";
import { customStyles } from "../components/modals/styles/styleModal";
import Modal from "react-modal";
import { ShowCompany } from "../components/modals/showCompany";
import { CreateCompany } from "../components/modals/createCompany";
import { UpdateCompany } from "../components/modals/updateCompany";
import { DeleteCompany } from "../components/modals/deleteCompany";
import { useRouter } from "next/router";
import Input from "../components/input";
import { Company } from "../entities/Company";

interface IModalProps {
    state: boolean;
    component: ReactComponentElement<FC> | undefined;
}

export async function getServerSideProps() {
    const data = await listAllCompanies();
    return { props: { data } };
}

const Home: NextPage<{ data: Company[] }> = ({ data }) => {
    const router = useRouter();
    const allCompanies = data;

    const [foundCompanies, setFoundCompanies] = useState<Company[] | null>(
        null
    );

    const companiesToShow = foundCompanies || allCompanies;

    const [modal, setModal] = useState<IModalProps>({
        state: false,
        component: undefined,
    });

    const refreshData = () => {
        router.replace(router.asPath);
    };

    function closeModal() {
        setModal({
            state: false,
            component: undefined,
        });
        refreshData();
    }

    // Handles ###########################################################################
    function handleShowCompany(id: number) {
        const company = allCompanies.find((company) => company.id === id);
        setModal({
            state: true,
            component: (
                <ShowCompany closeModal={closeModal} company={company} />
            ),
        });
    }

    function handleUpdateCompany(id: number) {
        const company = allCompanies.find((company) => company.id === id);
        setModal({
            state: true,
            component: (
                <UpdateCompany closeModal={closeModal} company={company!} />
            ),
        });
    }

    function handleCreateCompany() {
        setModal({
            state: true,
            component: <CreateCompany closeModal={closeModal} />,
        });
    }

    function handleDeleteCompany(id: number) {
        setModal({
            state: true,
            component: <DeleteCompany closeModal={closeModal} id={id} />,
        });
    }

    async function handleSearch(data: { fantasyName: string }) {
        if (!data.fantasyName) {
            setFoundCompanies(null);
            return;
        }
        try {
            const companies = await searchCompanyByFantasyName(
                data.fantasyName
            );
            setFoundCompanies(companies);
        } catch (err) {
            return;
        }
    }

    return (
        <>
            <header className="bg-white w-full h-24 border-b-[2px] border-gray-100 flex items-center justify-between pr-[5%]">
                {/* Logo Osten Moove */}
                <div className="bg-blue-700 w-[25%] h-full flex items-center justify-center px-7">
                    <img
                        src="./images/logo-osten-moove.png"
                        alt="Logo Osten Moove"
                        className="w-full"
                    />
                </div>

                <div className="flex w-full h-full gap-11 items-center justify-end">
                    {/* Input search company*/}
                    <Form
                        onSubmit={handleSearch}
                        className="w-[45%] h-14 border-2 border-gray-100 rounded-md flex items-center justify-start pl-4 gap-3"
                    >
                        <MagnifyingGlass
                            size={25}
                            color="#A1A1A1"
                            weight="bold"
                        />
                        <Input
                            name="fantasyName"
                            type="text"
                            className="w-full h-full text-xl text-gray-300"
                            placeholder="Buscar empresa"
                        />
                        <button
                            type="submit"
                            className="bg-blue-700 w-24 h-full  rounded-r-md flex items-center justify-center gap-3 hover:opacity-90 transition-opacity text-white text-base"
                        >
                            Buscar
                        </button>
                    </Form>
                </div>
            </header>
            <main className="flex flex-col items-end bg-blue-100 w-full h-screen  px-24 pt-14 gap-4 ">
                {/* Button create new company */}
                <button
                    className="bg-blue-700 w-40 h-14 rounded-md flex items-center justify-center gap-3 hover:opacity-90 transition-opacity text-white text-xl"
                    onClick={handleCreateCompany}
                >
                    <Plus size={25} weight="bold" color="#ffffff" />
                    Adicionar
                </button>
                {/* Companies table */}
                <table className="bg-white w-full h-fit shadow-md rounded-md">
                    <thead className="w-full h-12 border-b-[1px] flex items-center px-[10%] text-lg  font-bold text-gray-300">
                        <tr className="flex w-full h-full">
                            <th className="w-[30%] lg:w-[20%]  h-full flex items-center">
                                Identificador
                            </th>
                            <th className="w-[40%] h-full flex items-center">
                                Razão Social
                            </th>
                            <th className="w-[30%] h-full flex items-center">
                                CNPJ
                            </th>
                        </tr>
                    </thead>

                    <tbody className="w-full h-full ">
                        {companiesToShow.map((company) => {
                            const { id, fantasyName, cnpj } = company;
                            return (
                                <tr
                                    key={id}
                                    className="w-full h-10 border-b-[1px] flex items-center justify-start px-[10%] hover:bg-gray-100 hover:cursor-pointer transition-colors"
                                >
                                    <td
                                        className="w-full h-10 flex items-center justify-start  "
                                        onClick={() => handleShowCompany(id!)}
                                    >
                                        <div className="w-[30%] lg:w-[20%]  ">
                                            {id}
                                        </div>

                                        <div className="w-[40%]  truncate">
                                            {fantasyName}
                                        </div>
                                        <div className="w-[30%] pr-5 ">
                                            {cnpj}
                                        </div>
                                    </td>
                                    <td className=" hidden  absolute right-28  md:flex gap-2 ">
                                        <TrashSimple
                                            size={20}
                                            color="#F75A68"
                                            weight="bold"
                                            onClick={() => {
                                                handleDeleteCompany(id!);
                                            }}
                                        />
                                        <PencilSimple
                                            size={20}
                                            color="#121214"
                                            weight="bold"
                                            onClick={() =>
                                                handleUpdateCompany(id!)
                                            }
                                        />
                                    </td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </main>

            {/* Create company modal */}
            <Modal
                isOpen={modal.state}
                onRequestClose={() => closeModal()}
                style={customStyles}
                contentLabel="Generic modal"
                ariaHideApp={false}
            >
                {modal.component}
            </Modal>
        </>
    );
};
export default Home;
