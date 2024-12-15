import React, { FC, ReactElement } from "react";

import Footer from "./Footer";
import Header from "./Header";
import S from "./styles";
import { LayoutProps } from "./types";

const Layout: FC<LayoutProps> = ({ children }): ReactElement => {
  return (
    <>
      <Header />
      <S.Content>{children}</S.Content>
      <Footer />
    </>
  );
};

export default Layout;
