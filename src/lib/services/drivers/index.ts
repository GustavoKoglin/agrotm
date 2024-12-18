import useAxios from "~/lib/hooks/useAxios";
import { Response } from "~/types/Response";

export interface DriversProps {
  name: string;
  cpf: string;
  birthDate: string;
  phone: string;
  email: string;
  cnhNumber: string;
  cnhCategory: string;
  antt: string;
  anttValidity: string;
  vehicleType: string;
  vehicleBrand: string;
  vehicleYear: string;
  vehiclePlate: string;
  experience: number | null;
  workingAreas: string;
  availability: string;
  notes: string;
}

type RequisicaoRegistroRespostaStringType = (
  registro: DriversProps
) => Promise<Response>;

export interface ServicoType {
  post: RequisicaoRegistroRespostaStringType;
}

const useDriversService = (): ServicoType => {
  const api = useAxios();

  const post: RequisicaoRegistroRespostaStringType = (registro) =>
    api
      .post<Response>("drivers", registro)
      .then((response) => response.data)
      .catch((error) => ({ ...error?.response?.data, sucesso: false }));

  return {
    post,
  };
};

export default useDriversService;
