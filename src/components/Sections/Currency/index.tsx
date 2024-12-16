import dolarIMG from "~/assets/images/dolar.png";
import euroIMG from "~/assets/images/euro.png";
import TitleComponent from "~/components/Typography/Title";
import useExchangeRateService, {
  ExchangeRateData,
} from "~/lib/services/currency";
import { Col, InputNumber, Row, Select, Spin } from "antd";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import Image from "next/image";
import React, { FC, ReactElement, useEffect, useState } from "react";
import { Bar } from "react-chartjs-2";

import S from "./styles"; // Supondo que você tenha um arquivo de estilos.

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const { Option } = Select;

const Currency: FC = (): ReactElement => {
  const [exchangeRate, setExchangeRate] = useState(null);

  useEffect(() => {
    const fetchExchangeRate = async () => {
      const response = await fetch(
        "https://www.alphavantage.co/query?function=CURRENCY_EXCHANGE_RATE&from_currency=BRL&to_currency=USD&apikey=VTN3FJYMWZG991RC"
      );
      const data = await response.json();
      setExchangeRate(data);
    };
    fetchExchangeRate();
  }, []);

  const convertCurrency = () => {
    if (exchangeRate) {
      // const rate = parseFloat(exchangeRate["5. Exchange Rate"]);
      const rate = 5.95;
      console.log("exchangeRate", exchangeRate);

      const convertedAmount = 1 * rate;
      return `1 Dólar americano igual a ${convertedAmount.toFixed(
        2
      )} Real brasileiro`;
    }
    return "";
  };

  return (
    <S.Container>
      {/* <TitleComponent>Câmbio de Moedas</TitleComponent> */}

      <S.SectionCurrency>
        <S.ItemCurrency>
          <Image
            src={dolarIMG}
            alt="logo-dolar"
            width={50}
            height={50}
            quality={90}
            loading="lazy"
          />

          <S.TitleCurrency>
            1 <strong>Dolar</strong> americano é igual a:
          </S.TitleCurrency>

          <S.SubtitleCurrency>
            <span>R$ 5,96</span> Real brasileiro
          </S.SubtitleCurrency>
        </S.ItemCurrency>

        <S.ItemCurrency>
          <Image
            src={euroIMG}
            alt="logo-euro"
            width={50}
            height={50}
            quality={90}
            loading="lazy"
          />

          <S.TitleCurrency>
            1 <strong>Euro</strong> é igual a:
          </S.TitleCurrency>

          <S.SubtitleCurrency>
            <span>R$ 6,25</span> Real brasileiro
          </S.SubtitleCurrency>
        </S.ItemCurrency>
      </S.SectionCurrency>

      {/* <button onClick={() => console.log(convertCurrency())}>Converter</button>
      <p>{convertCurrency()}</p> */}
    </S.Container>
  );
};

export default Currency;
