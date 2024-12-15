import Logo from "~/assets/images/logo.png";
import Image from "next/image";
import React, { FC, ReactElement, useState } from "react";

import S from "./styles";

const optionsMenu = [
  { label: "Home", key: "home" },
  { label: "Sobre", key: "about" },
  { label: "Comodities", key: "commodities" },
  { label: "Notícias", key: "news" },
  { label: "Contato", key: "contact" },
  { label: "Trabalhe Conosco", key: "workWithUs" },
];

const Header: FC = (): ReactElement => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleScrollToSection = (key: string) => {
    const section = document.getElementById(key);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
      setMenuOpen(false); // Fecha o menu após clicar no item
    }
  };

  return (
    <S.Container>
      <S.NavbarWrapper>
        <S.SectionImage>
          <Image src={Logo} alt="logo-agrotm" height={56} width={56} />
        </S.SectionImage>

        <S.HamburgerButton onClick={() => setMenuOpen(!menuOpen)}>
          <span />
          <span />
          <span />
        </S.HamburgerButton>

        <S.NavbarContainer isOpen={menuOpen}>
          {optionsMenu.map((item) => (
            <S.NavbarItem
              key={item.key}
              onClick={() => handleScrollToSection(item.key)}
            >
              <a href={`#${item.key}`}>{item.label}</a>
            </S.NavbarItem>
          ))}
        </S.NavbarContainer>
      </S.NavbarWrapper>
    </S.Container>
  );
};

export default Header;
