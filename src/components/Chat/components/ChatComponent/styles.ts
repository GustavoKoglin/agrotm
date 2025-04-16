import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  width: 400px;
  height: 550px;
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  overflow: hidden;
  position: relative;
`;

const Messages = styled.div`
  flex: 1;
  padding: 70px 12px 12px 12px;
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  background: #fafafa;
  border-left: 1px solid #ccc;
  border-right: 1px solid #ccc;
`;

const InputArea = styled.div`
  display: flex;
  padding: 10px;
  background: #fff;
  border: 1px solid #ccc;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;

  input {
    flex: 1;
    border: none;
    padding: 10px;
    font-size: 14px;
    outline: none;
  }

  button {
    margin-left: 8px;
    padding: 10px 16px;
    border: none;
    background-color: #765021;
    color: white;
    border-radius: 6px;
    cursor: pointer;
  }
`;

const Header = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  background: #765021;
  width: 100%;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
  z-index: 100;
`;

const Username = styled.div`
  font-size: 20px;
  color: #ebebeb;
  font-weight: 600;
`;

const CloseChat = styled.div`
  cursor: pointer;

  svg {
    color: #fff;
    font-size: 22px;
  }
`;

export default {
  Container,
  Messages,
  InputArea,
  Header,
  Username,
  CloseChat,
};
