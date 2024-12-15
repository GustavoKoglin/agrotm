import CaminhoesIMG from "~/assets/images/caminhoes.png";
import MilhoIMG from "~/assets/images/milho.png";
import PlantacaoIMG from "~/assets/images/PLANTACAO.png";
import SojaIMG from "~/assets/images/soja.png";
import TrigoIMG from "~/assets/images/trigo.png";
import Divider from "~/components/Divider";
import Description from "~/components/Typography/Description";
import Title from "~/components/Typography/Title";
import { motion, useInView } from "motion/react";
import Image from "next/image";
import React, { FC, ReactElement, useRef } from "react";

import S from "./styles";

const About: FC = (): ReactElement => {
  const ref = useRef(null);
  const isInView = useInView(ref);

  return (
    <S.Container id="about">
      <Title>Sobre nós</Title>

      <Divider />

      <Description>
        A Agro TM é uma startup que atua como ponte entre produtores e
        compradores de commodities agrícolas. Nosso objetivo é facilitar
        negociações e transporte, promovendo transparência, economia e impacto
        positivo no agronegócio.
      </Description>

      <S.Emphasis ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 100 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
        >
          <S.ImageWrapper>
            <Image
              src={PlantacaoIMG}
              alt="logo-plantacao"
              quality={100}
              unoptimized
            />
          </S.ImageWrapper>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 100 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.9 }}
        >
          <S.ImageWrapper>
            <Image
              src={CaminhoesIMG}
              alt="logo-caminhoes"
              quality={100}
              unoptimized
            />
          </S.ImageWrapper>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 100 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.6 }}
        >
          <S.ImageWrapper>
            <Image src={SojaIMG} alt="logo-soja" quality={100} unoptimized />
          </S.ImageWrapper>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 100 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.9 }}
        >
          <S.ImageWrapper>
            <Image src={TrigoIMG} alt="logo-trigo" quality={100} unoptimized />
          </S.ImageWrapper>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 100 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.9 }}
        >
          <S.ImageWrapper>
            <Image src={MilhoIMG} alt="logo-milho" quality={100} unoptimized />
          </S.ImageWrapper>
        </motion.div>
      </S.Emphasis>
    </S.Container>
  );
};

export default About;
