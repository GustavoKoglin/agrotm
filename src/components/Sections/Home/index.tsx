import { CaretDownOutlined } from "@ant-design/icons";
import { motion } from "motion/react";
import React, { FC, ReactElement } from "react";

import S from "./styles";

const Home: FC = (): ReactElement => {
  const handleScrollToSection = () => {
    const section = document.getElementById("about");
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <S.Banner id="home">
      <S.SectionBanner>
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ y: 1, opacity: 1 }}
          transition={{
            duration: 1,
            ease: "easeOut",
          }}
        >
          <S.SectionTitle>
            <S.TitleBanner>BEM-VINDO A</S.TitleBanner>
            <S.SubTitleBanner>AGROTM</S.SubTitleBanner>
          </S.SectionTitle>

          <S.DescriptionBanner>
            Transformamos a intermediação de produtos agrícolas com tecnologias
            modernas, conectando produtores e compradores de forma eficiente,
            segura e sustentável. Na Agro TM, unimos inovação e compromisso com
            o desenvolvimento do setor agropecuário.
          </S.DescriptionBanner>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ y: 1, opacity: 1 }}
          transition={{
            duration: 1,
            ease: "easeOut",
          }}
        >
          <S.ButtonFindOutMore onClick={handleScrollToSection}>
            <span>SAIBA MAIS</span>
            <CaretDownOutlined style={{ fontSize: "24px", color: "#FFF" }} />
          </S.ButtonFindOutMore>
        </motion.div>
      </S.SectionBanner>
    </S.Banner>
  );
};

export default Home;
