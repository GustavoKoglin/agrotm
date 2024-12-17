import { Form as FormAntd } from "antd";
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 104px auto 60px auto;
  width: 80%;
  padding: 100px 0 100px 0;
  background-color: #fff;
  box-shadow: 0 7px 30px -10px rgba(180, 170, 180, 0.5);
  border-radius: 12px;

  @media (max-width: 1600px) {
    width: 96%;
  }

  @media (max-width: 1024px) {
    width: 98%;
    padding: 20px 0 20px 0;
    margin: 84px auto 20px auto;
  }

  @media (max-width: 768px) {
    width: 100%;
    padding: 12px 0 12px 0;
    margin: 64px auto 0 auto;
  }

  @media (max-width: 576px) {
    padding: 30px 0 30px 0;
  }
`;

export const SectionForm = styled.div`
  width: 70%;
  height: 640px;
  position: relative;
  padding: 22px 32px;
  border-radius: 8px;
  border: 1px solid #cecece;
  margin-top: 20px;

  @media (max-width: 1600px) {
    width: 80%;
  }

  @media (max-width: 1024px) {
    width: 98%;
    padding: 18px 18px;
    margin-top: 0px;
  }

  @media (max-width: 768px) {
    width: 100%;
    padding: 12px 18px;
    margin-top: 0;
    overflow-x: auto;
    white-space: nowrap;
    height: 680px;
  }

  @media (max-width: 576px) {
    width: 96%;
    padding: 8px 22px;
    height: 740px;
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
    border-radius: 6px;
    height: 42px;
    font-size: 16px;
    font-weight: 500;
    border: none;
    padding: 8px 22px;
  }

  .ant-btn-default {
    border: 1px solid #ccc;
  }

  .ant-btn-primary {
    background-color: #765021;

    &:hover {
      background-color: #4c3213;
    }

    &:focus {
      background-color: #4c3213;
    }
  }
`;

const FormFooter = styled.div`
  margin-top: 20px;
  text-align: right;
  position: absolute;
  bottom: 12px;
  right: 12px;
`;

export default {
  Container,
  SectionForm,
  Form,
  FormFooter,
};
