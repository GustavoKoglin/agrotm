import { CloseOutlined } from "@ant-design/icons";
import { socket } from "~/lib/services/socket";
import { useChatStore } from "~/lib/stores/useChatStore";
import { formatTime } from "~/lib/utils/formatTime";
import { FC, useEffect, useState } from "react";

import Message from "./components/Message";
import S from "./styles";
import { ChatComponentProps } from "./types";

const getRandomUsername = () => {
  const names = ["Gustavo", "Luis", "João", "Ana", "Lucas", "Mariana"];
  return (
    names[Math.floor(Math.random() * names.length)] +
    " #" +
    Math.floor(Math.random() * 1000)
  );
};

const USERNAME =
  typeof window !== "undefined"
    ? localStorage.getItem("username") ||
      (() => {
        const name = getRandomUsername();
        localStorage.setItem("username", name);
        return name;
      })()
    : "Anônimo";

const ChatComponent: FC<ChatComponentProps> = ({ setIsOpenChat }) => {
  const { messages, addMessage } = useChatStore();
  const [input, setInput] = useState("");

  useEffect(() => {
    socket.on("message", (msg) => {
      addMessage({
        ...msg,
        timestamp: new Date(msg.timestamp),
      });
    });

    return () => {
      socket.off("message");
    };
  }, [addMessage]);

  const sendMessage = () => {
    if (!input.trim()) return;

    const msg = {
      id: crypto.randomUUID(),
      text: input,
      sender: USERNAME,
      timestamp: new Date(),
    };

    socket.emit("message", msg);
    setInput("");
  };

  return (
    <S.Container>
      <S.Header>
        <S.Username>{USERNAME}</S.Username>

        <S.CloseChat onClick={() => setIsOpenChat(false)}>
          <CloseOutlined />
        </S.CloseChat>
      </S.Header>

      <S.Messages>
        {messages.map((msg) => (
          <Message
            key={msg.id}
            text={msg.text}
            isMe={msg.sender === USERNAME}
            time={formatTime(new Date(msg.timestamp))}
          />
        ))}
      </S.Messages>
      <S.InputArea>
        <input
          placeholder="Digite aqui..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && sendMessage()}
        />
        <button onClick={sendMessage}>Enviar</button>
      </S.InputArea>
    </S.Container>
  );
};

export default ChatComponent;
