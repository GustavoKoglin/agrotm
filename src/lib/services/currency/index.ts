import useAxios from "~/lib/hooks/useAxios";

export interface ExchangeRateData {
  currency: string;
  rate: number;
}

type GetExchangeRatesType = () => Promise<Array<ExchangeRateData>>;

export interface ExchangeRateServiceType {
  getExchangeRates: GetExchangeRatesType;
}

const useExchangeRateService = (): ExchangeRateServiceType => {
  const api = useAxios();
  const apiKey = "SUA_CHAVE_API_ALPHA_VANTAGE"; // Substitua pela sua chave da API Alpha Vantage

  const getExchangeRates: GetExchangeRatesType = () =>
    api
      .get<any>(
        `https://www.alphavantage.co/query?function=CURRENCY_EXCHANGE_RATE&from_currency=BRL&to_currency=USD&apikey=VTN3FJYMWZG991RC`
      )
      .then((response) => {
        const rates = response.data;

        console.log("rates", rates);

        // Obtem as taxas de câmbio para o Dólar e o Euro
        const filteredRates = Object.keys(rates).map((currency) => ({
          currency,
          rate: rates[currency],
        }));

        return filteredRates;
      })
      .catch((error) => {
        console.error("Erro ao buscar taxas de câmbio:", error);
        return [];
      });

  return { getExchangeRates };
};

export default useExchangeRateService;
