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

class Company {
    id?: number;
    corporateName!: string;
    fantasyName!: string;
    cnpj!: string;
    phoneNumber!: string;
    street!: string;
    addressNumber!: string;
    complement?: string;
    district!: string;
    city!: string;
    federatedUnit!: string;
    created_at!: Date;

    // constructor({
    //     corporateName,
    //     fantasyName,
    //     cnpj,
    //     phoneNumber,
    //     street,
    //     addressNumber,
    //     complement,
    //     district,
    //     city,
    //     federatedUnit,
    // }: ICompany) {
    //     (this.corporateName = corporateName),
    //         (this.fantasyName = fantasyName),
    //         (this.cnpj = cnpj),
    //         (this.phoneNumber = phoneNumber),
    //         (this.street = street),
    //         (this.addressNumber = addressNumber),
    //         (this.complement = complement),
    //         (this.district = district),
    //         (this.city = city),
    //         (this.federatedUnit = federatedUnit);
    // }
}

export { Company };
