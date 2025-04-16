export interface CommodityItem {
  uf: string;
  cidade: string;
  cultura_id: string;
  cultura: string;
  produto: string;
  produto_id: string;
  preco: string;
  variacao: string;
  data: string;
  atualizacao: string;
}

export interface CommodityResponse {
  root: {
    row: CommodityItem[];
  };
}
