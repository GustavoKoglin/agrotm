import { MessageOutlined } from "@ant-design/icons";

import S from "./styles";

const ChatToggleButton = ({ onClick }: { onClick: () => void }) => (
  <S.FloatingButton onClick={onClick} id="chat-toggle">
    <MessageOutlined />
  </S.FloatingButton>
);

export default ChatToggleButton;
