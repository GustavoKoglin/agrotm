import { Form as FormAntd } from "antd";
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  width: 86%;
  padding: 100px 0 100px 0;
  background-color: #fff;
  box-shadow: 0 7px 30px -10px rgba(180, 170, 180, 0.5);
  border-radius: 8px;

  @media (max-width: 1024px) {
    width: 96%;
  }

  @media (max-width: 576px) {
    padding: 30px 0 30px 0;
  }
`;

export const SectionForm = styled.div`
  width: 40%;
  padding: 22px 32px;
  border-radius: 8px;
  border: 1px solid #cecece;
  margin-top: 20px;

  @media (max-width: 1024px) {
    width: 80%;
  }

  @media (max-width: 576px) {
    width: 96%;
    padding: 8px 22px;
  }
`;

export const Form = styled(FormAntd)`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  height: auto;
  margin-top: 10px;

  .ant-input {
    border-radius: 8px;
    padding: 8px;
  }

  .ant-form-item-label > label {
    font-size: 16px;
    font-weight: 500;
    padding-left: 6px;

    &::before {
      display: none !important;
    }
  }

  button {
    background-color: #765021;
    border-radius: 6px;
    height: 42px;
    font-size: 16px;
    font-weight: 500;
    border: none;

    &:hover {
      background-color: #4c3213;
    }

    &:focus {
      background-color: #4c3213;
    }
  }
`;

export default {
  Container,
  SectionForm,
  Form,
};
