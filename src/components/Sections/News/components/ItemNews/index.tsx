import NewsIMG from "~/assets/images/noticia.png";
import { NewsArticle } from "~/lib/services/news";
import Image from "next/image";
import Link from "next/link";
import React, { FC, ReactElement } from "react";

import S from "./styles";

interface ItemNewsProps {
  data: NewsArticle;
}

const ItemNews: FC<ItemNewsProps> = ({ data }): ReactElement => {
  const handleFormattContent = (name: string) => {
    if (name.length <= 160) {
      return name;
    }
    return name.slice(0, 160) + "...";
  };
  return (
    <S.Container>
      <Link href={data.link} passHref>
        {data.image_url ? (
          <S.BannerNews src={data.image_url} />
        ) : (
          <S.ImageNotFound>
            <Image
              src={NewsIMG}
              alt="logo-euro"
              width={200}
              height={200}
              quality={90}
              loading="lazy"
            />
          </S.ImageNotFound>
        )}
        <S.Title>{data.title}</S.Title>

        {data.description && (
          <S.Content>{handleFormattContent(data.description)}</S.Content>
        )}
      </Link>
    </S.Container>
  );
};

export default ItemNews;
