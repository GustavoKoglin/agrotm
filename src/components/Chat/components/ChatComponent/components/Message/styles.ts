import styled from "styled-components";

const Bubble = styled.div<{ isMe: boolean }>`
  align-self: ${(p) => (p.isMe ? "flex-end" : "flex-start")};
  background: ${(p) => (p.isMe ? "#765021" : "#eee")};
  color: ${(p) => (p.isMe ? "#fff" : "#333")};
  margin: 6px 0;
  padding: 10px 14px;
  border-radius: 18px;
  max-width: 70%;
  display: flex;
  flex-direction: column;
  font-size: 14px;
  position: relative;

  &::after {
    content: "";
    position: absolute;
    bottom: 20px;
    ${(p) => (p.isMe ? "right: -8px;" : "left: -8px;")}
    width: 0;
    height: 0;
    border: 8px solid transparent;
    ${(p) =>
      p.isMe
        ? "border-left-color: #765021; border-right: 0; margin-bottom: 2px;"
        : "border-right-color: #eee; border-left: 0; margin-bottom: 2px;"}
  }

  p {
    margin: 0;
  }
`;

export const Timestamp = styled.span<{ isMe: boolean }>`
  font-size: 11px;
  color: ${(p) => (p.isMe ? "#dcdcdc" : "#636363")};
  display: block;
  text-align: right;
`;

export default {
  Bubble,
  Timestamp,
};
