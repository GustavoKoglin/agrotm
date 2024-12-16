import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 90%;
  margin: 0 auto;
  padding: 100px 0 50px 0;

  @media (max-width: 1024px) {
    padding: 50px 0 0 0;
    max-width: 96%;
  }

  @media (max-width: 800px) {
    padding: 20px 10px;
  }
`;

export const Emphasis = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
  justify-content: center;
  column-gap: 22px;
  row-gap: 22px;
  padding-top: 28px;
  flex-wrap: wrap;
`;

const ImageWrapper = styled.div`
  width: 300px;
  height: 300px;
  margin: 0 auto;
  position: relative;

  span {
    width: 100% !important;
    height: 100% !important;
  }

  @media (max-width: 576px) {
    width: 100%;
  }
`;

export default {
  Container,
  Emphasis,
  ImageWrapper,
};
