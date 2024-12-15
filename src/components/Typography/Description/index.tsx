import React, { FC, ReactElement } from "react";

import S from "./styles";
import { DescriptionProps } from "./types";

const Description: FC<DescriptionProps> = ({ children }): ReactElement => {
  return <S.Description>{children}</S.Description>;
};

export default Description;
