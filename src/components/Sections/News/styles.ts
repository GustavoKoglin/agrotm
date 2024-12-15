import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: 30px 0 70px 0;

  @media (max-width: 768px) {
    padding: 20px 0 50px 0;
  }
`;

export const SectionBar = styled.span`
  width: 100%;
  height: 440px;
  display: flex;
  justify-content: center;
  padding-top: 18px;
`;

export const SectionNews = styled.span`
  width: 90%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  column-gap: 16px;
  row-gap: 16px;
  flex-wrap: wrap;
  padding-top: 32px;

  @media (max-width: 1024px) {
    justify-content: space-between;
  }

  @media (max-width: 768px) {
    column-gap: 8px;
    row-gap: 8px;
    padding-top: 16px;
  }

  @media (max-width: 480px) {
    flex-direction: column;
    align-items: center;
  }
`;

export default {
  Container,
  SectionBar,
  SectionNews,
};
