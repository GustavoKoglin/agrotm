import useAxios from "~/lib/hooks/useAxios";

const API_URL = "https://newsapi.org/v2/everything";
const API_KEY = "71155d0524f1469eb37bf0e3fa10f9d4";

interface NewsApiArticle {
  source: {
    id: string | null;
    name: string;
  };
  author: string | null;
  title: string;
  description: string;
  url: string;
  urlToImage: string;
  publishedAt: string;
  content: string;
}

interface NewsApiResponse {
  status: string;
  totalResults: number;
  articles: NewsApiArticle[];
}

export interface NewsArticle {
  article_id: string;
  title: string;
  description: string;
  image_url: string;
  pubDate: string;
  link: string;
  source_name: string;
  author?: string | null;
}

export const useNews = () => {
  const api = useAxios();

  const fetchNews = async (): Promise<NewsArticle[]> => {
    try {
      const response = await api.get<NewsApiResponse>(API_URL, {
        params: {
          q: "agricultura",
          language: "pt",
          apiKey: API_KEY,
        },
      });

      return response.data.articles.map((item, index) => ({
        article_id: `news-${index}`,
        title: item.title || "Sem título",
        description: item.description || "Sem descrição",
        image_url: item.urlToImage || "",
        pubDate: item.publishedAt,
        link: item.url,
        source_name: item.source.name || "Fonte desconhecida",
        author: item.author,
      }));
    } catch (error) {
      console.error("Erro ao buscar notícias:", error);
      return [];
    }
  };

  return { fetchNews };
};
