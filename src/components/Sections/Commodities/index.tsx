import dolarIMG from "~/assets/images/dolar.png";
import euroIMG from "~/assets/images/euro.png";
import TitleComponent from "~/components/Typography/Title";
import useCommodityService, { CommodityData } from "~/lib/services/commodities";
import { Spin } from "antd";
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

import S from "./styles";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const Commodities: FC = (): ReactElement => {
  const [commodityData, setCommodityData] = useState<CommodityData[]>([]);
  const commodityService = useCommodityService();

  // Função para buscar dados da API
  const fetchCommodities = async () => {
    const data = await commodityService.getCommodities();
    setCommodityData(data);
  };

  useEffect(() => {
    fetchCommodities();
  }, []);

  // Filtra os dados para as commodities específicas
  const filterCommodity = (name: string) =>
    commodityData.filter((item) => item.commodity === name);

  const soja = filterCommodity("soja").map((item) => item.price);
  const milho = filterCommodity("milho").map((item) => item.price);
  const feijao = filterCommodity("feijao").map((item) => item.price);

  const labels = filterCommodity("soja").map((item) => item.date);

  // Configuração do gráfico
  const data = {
    labels,
    datasets: [
      {
        label: "Soja",
        data: soja,
        backgroundColor: "rgba(75, 192, 192, 0.6)",
        borderColor: "rgba(75, 192, 192, 1)",
        borderWidth: 1,
      },
      {
        label: "Milho",
        data: milho,
        backgroundColor: "rgba(255, 159, 64, 0.6)",
        borderColor: "rgba(255, 159, 64, 1)",
        borderWidth: 1,
      },
      {
        label: "Feijão",
        data: feijao,
        backgroundColor: "rgba(153, 102, 255, 0.6)",
        borderColor: "rgba(153, 102, 255, 1)",
        borderWidth: 1,
      },
    ],
  };

  const mockCommoditiesData = {
    labels: ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho"],
    datasets: [
      {
        label: "Soja (USD/ton)",
        data: [520, 540, 515, 530, 550, 560],
        backgroundColor: "rgba(75, 192, 192, 0.6)",
        borderColor: "rgba(75, 192, 192, 1)",
        borderWidth: 1,
      },
      {
        label: "Milho (USD/ton)",
        data: [320, 300, 310, 305, 315, 325],
        backgroundColor: "rgba(255, 159, 64, 0.6)",
        borderColor: "rgba(255, 159, 64, 1)",
        borderWidth: 1,
      },
      {
        label: "Feijão (USD/ton)",
        data: [410, 400, 420, 430, 440, 450],
        backgroundColor: "rgba(153, 102, 255, 0.6)",
        borderColor: "rgba(153, 102, 255, 1)",
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: { position: "top" as const },
      title: { display: true, text: "Cotações de Commodities" },
    },
  };

  return (
    <S.Container id="commodities">
      <TitleComponent>Cotações de commodities</TitleComponent>

      <S.WrapperContent>
        <S.SectionBar>
          <Bar data={mockCommoditiesData} options={options} />
        </S.SectionBar>

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
      </S.WrapperContent>
    </S.Container>
  );
};

export default Commodities;
