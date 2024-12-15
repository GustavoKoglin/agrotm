import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 90%;
  padding: 50px 0 0 0;
  margin: 0 auto;

  @media (max-width: 1024px) {
    width: 96%;
  }
`;

export const ListServices = styled.div`
  display: flex;
  flex-direction: row;
  column-gap: 36px;
  row-gap: 36px;
  padding-top: 18px;
  align-items: flex-start;
  justify-content: center;
  width: 100%;
  flex-wrap: wrap;

  @media (max-width: 576px) {
    flex-direction: column;
    align-items: center;
  }

  div {
    @media (max-width: 576px) {
      width: 80%;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
`;

export const ItemService = styled.div`
  cursor: pointer;
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 7px 30px -10px rgba(180, 170, 180, 0.5);
  flex-direction: column;
  height: 180px;
  width: 300px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 4px;
  transition: 0.3s all;
  row-gap: 8px;

  svg {
    font-size: 34px;

    @media (max-width: 1024px) {
      font-size: 30px;
    }
  }

  &:hover {
    transition: 0.3s all;
    background: #765021;
    transform: translateY(-8px);
    color: #fff;
  }

  @media (max-width: 1024px) {
    height: 160px;
    width: 280px;
  }

  @media (max-width: 576px) {
    height: 200px;
    width: 100%;
  }
`;

export const DescriptionService = styled.span`
  font-size: 18px;

  @media (max-width: 1024px) {
    font-size: 16px;
  }
  /*
  @media (max-width: 800px) {
    font-size: 14px;
  } */
`;

export default {
  Container,
  ListServices,
  ItemService,
  DescriptionService,
};
