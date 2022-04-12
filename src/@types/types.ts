export interface CollectionsProps {
  id: string;
  situation: string;
  type: string;
  cnpj_cpf: string;
  remetente: string;
  collect_date: string;
  cep: string;
  state: string;
  street: string;
  number: string;
  neighborhood: string;
  complement: string;
  reference_point: string;
  city_id: string;
  customer_id: string;
  cityIDAddress: CityIDProps;
  customerIDAddress: IDAddressProps;
}

export interface CityIDProps {
  id: string;
  situation: string;
  name: string;
  state: string;
}

export interface IDAddressProps {
  id: string;
  type: string;
  situation: string;
  trading_firstname: string;
  company_lastname: string;
  cnpj_cpf: string;
}

export interface UserProps {
  email: string;
  password: string;
  username: string;
}
