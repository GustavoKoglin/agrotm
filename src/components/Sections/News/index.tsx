import TitleComponent from "~/components/Typography/Title";
import { NewsRequestProps, useNews } from "~/lib/services/news";
import { Pagination, Spin } from "antd";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import React, { FC, ReactElement, useEffect, useState } from "react";

import ItemNews from "./components/ItemNews";
import S from "./styles";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const News: FC = (): ReactElement => {
  const [news, setNews] = useState<NewsRequestProps[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize] = useState(6);

  const { fetchNews } = useNews();

  // Função para paginar as notícias
  const paginatedNews = news.slice(
    (currentPage - 1) * pageSize,
    currentPage * pageSize
  );

  // Função para lidar com a mudança de página
  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  useEffect(() => {
    const loadNews = async () => {
      setLoading(true);
      const fetchedNews = await fetchNews();
      console.log("fetchedNews", fetchedNews);

      setNews(fetchedNews);
      setLoading(false);
    };

    loadNews();
  }, []);

  return (
    <S.Container id="news">
      <TitleComponent>Notícias do setor Agropecuário</TitleComponent>
      <S.SectionNews>
        {loading ? (
          <Spin />
        ) : (
          <>
            {paginatedNews.map((item, index) => (
              <ItemNews key={item.article_id} data={item} />
            ))}
          </>
        )}
      </S.SectionNews>

      {news.length > pageSize && (
        <Pagination
          current={currentPage}
          pageSize={pageSize}
          total={news.length}
          onChange={handlePageChange}
          showSizeChanger={false}
          style={{ marginTop: "20px", textAlign: "center" }}
        />
      )}
    </S.Container>
  );
};

export default News;
