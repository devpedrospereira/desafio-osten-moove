interface ICreateCompanyDTO {
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

export { ICreateCompanyDTO };
