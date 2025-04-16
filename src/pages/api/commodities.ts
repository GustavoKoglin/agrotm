import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const externalRes = await fetch(
      "https://agrolink.com.br/clientes/agrotm/6745839276561/cotacoes.json"
    );

    const data = await externalRes.json();
    res.status(200).json(data);
  } catch (error) {
    console.error("Erro ao buscar dados da API externa", error);
    res.status(500).json({ error: "Erro ao buscar dados da API externa." });
  }
}
