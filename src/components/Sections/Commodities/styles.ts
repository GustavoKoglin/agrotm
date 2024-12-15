import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 90%;
  margin: 0 auto;
  padding: 50px 0 50px 0;

  @media (max-width: 1024px) {
    width: 96%;
  }
`;

export const WrapperContent = styled.div`
  display: flex;
  width: 90%;
  align-items: center;
  justify-content: center;
  column-gap: 34px;
  padding-top: 18px;

  @media (max-width: 1024px) {
    flex-direction: column;
    row-gap: 44px;
  }

  @media (max-width: 768px) {
    width: 96%;
  }
`;

export const SectionBar = styled.div`
  width: 1000px;
  height: 440px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  @media (max-width: 1366px) {
    width: 800px;
  }

  @media (max-width: 1024px) {
    width: 90%;
    height: 340px;
  }

  @media (max-width: 768px) {
    width: 100%;
    height: 300px;
  }
`;

export const SectionCurrency = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  row-gap: 22px;

  @media (max-width: 1024px) {
    flex-direction: row;
    column-gap: 22px;
    justify-content: space-between;
  }

  @media (max-width: 768px) {
    align-items: flex-end;
  }

  @media (max-width: 576px) {
    justify-content: space-evenly;
    width: 100%;
  }
`;

export const ItemCurrency = styled.div`
  width: 250px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 24px;
  border-radius: 16px;
  background-color: #fff;
  box-shadow: 5px 5px 15px rgba(180, 170, 180, 0.5);
  row-gap: 6px;
  transition: 0.3s all;

  &:hover {
    box-shadow: 10px 10px 15px rgba(180, 170, 180, 0.5);
    transform: translateX(10px);
    transition: 0.3s all;
  }

  @media (max-width: 1024px) {
    padding: 0px;
    width: 300px;
    background-color: transparent;
    box-shadow: none;
  }

  @media (max-width: 768px) {
    width: 46%;
  }
`;

export const TitleCurrency = styled.div`
  font-size: 16px;
  font-weight: 500;
  color: #4c4c4c;

  @media (max-width: 1024px) {
    font-size: 14px;
    text-align: center;
  }
`;

export const SubtitleCurrency = styled.div`
  color: #000;
  font-weight: 500;

  @media (max-width: 1024px) {
    text-align: center;
  }

  span {
    font-size: 26px;
    color: green;
    font-weight: 600;

    @media (max-width: 1024px) {
      font-size: 20px;
    }
  }
`;

export default {
  Container,
  SectionBar,
  ItemCurrency,
  TitleCurrency,
  SubtitleCurrency,
  SectionCurrency,
  WrapperContent,
};
