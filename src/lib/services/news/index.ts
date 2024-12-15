import useAxios from "~/lib/hooks/useAxios";

const API_URL = "https://newsdata.io/api/1/latest";
const API_KEY = "pub_62164d097dcff2cda1d1e525b2fde72609f22";

export interface NewsRequestProps {
  article_id: string;
  title: string;
  description: string;
  image_url: string;
  pubDate: string;
  link: string;
}

export const useNews = () => {
  const api = useAxios();

  const fetchNews = async () => {
    try {
      const response = await api.get(API_URL, {
        params: {
          apikey: API_KEY,
          category: "top",
          country: "br",
        },
      });

      const newsData = response.data.results || [];
      return newsData.map((item: NewsRequestProps) => ({
        article_id: item.article_id,
        title: item.title,
        description: item.description,
        image_url: item.image_url,
        pubDate: item.pubDate,
        link: item.link,
      }));
    } catch (error) {
      console.error("Erro ao buscar notícias:", error);
      return [];
    }
  };

  return { fetchNews };
};
