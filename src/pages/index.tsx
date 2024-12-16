import Layout from "~/components/Layout";
import {
  About,
  Home,
  Services,
  Commodities,
  News,
  WorkWithUs,
} from "~/components/Sections";
import React, { FC, ReactElement } from "react";

const pages: FC = (): ReactElement => {
  return (
    <Layout>
      <Home />
      <About />
      <Services />
      <Commodities />
      <News />
      <WorkWithUs />
    </Layout>
  );
};

export default pages;