import styled from "styled-components";

const ChatContent = styled.div`
  position: fixed;
  bottom: 16px;
  right: 16px;
  z-index: 1000;
`;

const FloatingChat = styled.div<{ isOpenChat: boolean }>`
  width: 80px;
  height: 80px;
  background: #fff;
  border-radius: 100%;
  display: flex;
  border: 1px solid rgb(216, 216, 216);
  align-items: center;
  justify-content: center;
  font-size: 34px;

  transition: 0.2s ease-out;
  cursor: pointer;

  &:hover {
    background: #f5f5f5;
    transform: translateY(-14px);
    transition: 0.2s ease-out;
  }
`;

export default {
  ChatContent,
  FloatingChat,
};
