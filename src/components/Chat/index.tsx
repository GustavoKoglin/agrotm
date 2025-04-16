import { MessageOutlined } from "@ant-design/icons";
import { useState } from "react";

import ChatComponent from "./components/ChatComponent";
import S from "./styles";

export const ChatPopover = () => {
  const [isOpenChat, setIsOpenChat] = useState(false);

  return (
    <S.ChatContent>
      {isOpenChat && <ChatComponent setIsOpenChat={setIsOpenChat} />}

      {!isOpenChat && (
        <S.FloatingChat
          id="floating-chat"
          isOpenChat={isOpenChat}
          onClick={() => setIsOpenChat(!isOpenChat)}
        >
          <MessageOutlined />
        </S.FloatingChat>
      )}
    </S.ChatContent>
  );
};
