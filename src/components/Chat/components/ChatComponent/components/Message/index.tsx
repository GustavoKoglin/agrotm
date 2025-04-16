import React, { FC, ReactElement } from "react";

import S from "./styles";
import { MessageProps } from "./types";

const Message: FC<MessageProps> = ({ isMe, time, text }): ReactElement => {
  return (
    <S.Bubble isMe={isMe}>
      <p>{text}</p>
      <S.Timestamp isMe={isMe}>{time}</S.Timestamp>
    </S.Bubble>
  );
};

export default Message;
