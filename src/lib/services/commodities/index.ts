import useAxios from "~/lib/hooks/useAxios";

export interface CommodityData {
  commodity: string;
  price: number;
  date: string;
}

type GetCommoditiesType = () => Promise<Array<CommodityData>>;

export interface CommodityServiceType {
  getCommodities: GetCommoditiesType;
}

const useCommodityService = (): CommodityServiceType => {
  const api = useAxios();

  const getCommodities: GetCommoditiesType = () =>
    api
      .get<Array<CommodityData>>("commodities")
      .then((response) => response.data)
      .catch((error) => {
        console.error("Erro ao buscar commodities:", error);
        return [];
      });

  return { getCommodities };
};

export default useCommodityService;
