import React, { FC, ReactElement } from "react";

import S from "./styles";
import { TitleProps } from "./types";

const Title: FC<TitleProps> = ({ children }): ReactElement => {
  return <S.Title>{children}</S.Title>;
};

export default Title;
