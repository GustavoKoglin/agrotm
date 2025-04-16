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
import { CommodityItem, CommodityResponse } from "./types";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const Commodities: FC = (): ReactElement => {
  const [commodities, setCommodities] = useState<CommodityItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCommodities = async () => {
      try {
        const res = await fetch("/api/commodities");
        const json: CommodityResponse = await res.json();
        setCommodities(json.root.row);
      } catch (error) {
        console.error("Erro ao buscar dados das commodities:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchCommodities();
  }, []);

  const filterCommodity = (name: string) =>
    commodities.filter(
      (item) => item.cultura.toLowerCase() === name.toLowerCase()
    );

  const formatPreco = (preco: string) => parseFloat(preco.replace(",", "."));

  const sojaData = filterCommodity("soja");
  const milhoData = filterCommodity("milho");
  const feijaoData = filterCommodity("feijão");
  const bovinosData = filterCommodity("bovinos");
  const milhosData = filterCommodity("milhos");

  const chartData = {
    labels: sojaData.map((item) => item.cidade),
    datasets: [
      {
        label: "Soja",
        data: sojaData.map((item) => formatPreco(item.preco)),
        backgroundColor: "rgba(75, 192, 192, 0.6)",
        borderColor: "rgba(75, 192, 192, 1)",
        borderWidth: 1,
        produtoInfo: sojaData.map((item) => item.produto),
      },
      {
        label: "Milho",
        data: milhoData.map((item) => formatPreco(item.preco)),
        backgroundColor: "rgba(255, 159, 64, 0.6)",
        borderColor: "rgba(255, 159, 64, 1)",
        borderWidth: 1,
        produtoInfo: milhoData.map((item) => item.produto),
      },
      {
        label: "Feijão",
        data: feijaoData.map((item) => formatPreco(item.preco)),
        backgroundColor: "rgba(153, 102, 255, 0.6)",
        borderColor: "rgba(153, 102, 255, 1)",
        borderWidth: 1,
        produtoInfo: feijaoData.map((item) => item.produto),
      },
      {
        label: "Bovinos",
        data: bovinosData.map((item) => formatPreco(item.preco)),
        backgroundColor: "#95420e",
        borderColor: "#75350d",
        borderWidth: 1,
        produtoInfo: bovinosData.map((item) => item.produto),
      },
      {
        label: "Milhos",
        data: milhosData.map((item) => formatPreco(item.preco)),
        backgroundColor: "#ddff00",
        borderColor: "#bdd907",
        borderWidth: 1,
        produtoInfo: milhosData.map((item) => item.produto),
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: { position: "top" as const },
      title: { display: true, text: "Cotações de Commodities" },
      tooltip: {
        callbacks: {
          label: function (context: any) {
            const index = context.dataIndex;
            const dataset = context.dataset;
            const produto = dataset.produtoInfo?.[index] || "";
            const preco = context.formattedValue;
            return `${produto}: R$ ${preco}`;
          },
        },
      },
    },
  };

  return (
    <S.Container id="commodities">
      <TitleComponent>Cotações de commodities</TitleComponent>

      <S.WrapperContent>
        <S.SectionBar>
          <Bar data={chartData} options={options} />
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
