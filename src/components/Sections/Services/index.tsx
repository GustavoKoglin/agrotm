import {
  InfoCircleOutlined,
  ShopOutlined,
  TruckOutlined,
} from "@ant-design/icons";
import Title from "~/components/Typography/Title";
import { useInView, motion } from "motion/react";
import React, { FC, ReactElement, useRef } from "react";

import S from "./styles";

const About: FC = (): ReactElement => {
  const ref = useRef(null);
  const isInView = useInView(ref);

  return (
    <S.Container id="services">
      <Title>Serviços</Title>

      <S.ListServices ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 100 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
        >
          <S.ItemService>
            <TruckOutlined />
            <S.DescriptionService>
              Intermediação de transporte
            </S.DescriptionService>
          </S.ItemService>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 100 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
        >
          <S.ItemService>
            <ShopOutlined />
            <S.DescriptionService>
              Marketplace de produtos agrícolas
            </S.DescriptionService>
          </S.ItemService>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 100 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
        >
          <S.ItemService>
            <InfoCircleOutlined />
            <S.DescriptionService>
              Informações de commodities
            </S.DescriptionService>
          </S.ItemService>
        </motion.div>
      </S.ListServices>
    </S.Container>
  );
};

export default About;
