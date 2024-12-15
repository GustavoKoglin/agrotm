import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  /* padding: 0px 0 102px 0; */
`;

export const SectionCurrency = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 32px;
  margin-top: 12px;
`;

export const ItemCurrency = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 24px;
  border-radius: 16px;
  background-color: #fff;
  box-shadow: 0 7px 30px -10px rgba(180, 170, 180, 0.5);
  row-gap: 6px;
`;

export const TitleCurrency = styled.div`
  font-size: 16px;
  font-weight: 500;
  color: #4c4c4c;
`;

export const SubtitleCurrency = styled.div`
  color: #000;
  font-weight: 500;

  span {
    font-size: 26px;
    color: green;
    font-weight: 600;
  }
`;

export default {
  Container,
  SectionCurrency,
  ItemCurrency,
  TitleCurrency,
  SubtitleCurrency,
};
