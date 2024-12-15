import { MailOutlined, PhoneOutlined } from "@ant-design/icons";
import React, { FC, ReactElement } from "react";

import S from "./styles";

const Footer: FC = (): ReactElement => {
  const currentYear = new Date().getFullYear();

  return (
    <S.Container>
      <S.FooterDescription>
        <S.SectionContactFooter>
          <S.ContactContent>
            <h2>Contato</h2>
            <S.ItemContact>
              <MailOutlined />
              <a href="mailto:contato@agrotm.com">contato@agrotm.com</a>
            </S.ItemContact>

            <S.ItemContact>
              <PhoneOutlined />
              <a href="tel:+5566992362830">+55 66 99236-2830</a>
            </S.ItemContact>
          </S.ContactContent>

          <S.NavigationLinks>
            <a href="#home">Home</a>
            <a href="#about">Sobre nós</a>
            <a href="#commodities">Commodities</a>
            <a href="#news">Notícias</a>
            <a href="#workWithUs">Trabalhe Conosco</a>
          </S.NavigationLinks>
        </S.SectionContactFooter>
      </S.FooterDescription>
      <S.FooterRights>
        Todos os direitos reservados © {currentYear}
      </S.FooterRights>
    </S.Container>
  );
};

export default Footer;
