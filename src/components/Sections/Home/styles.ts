import SojaIMG from "~/assets/images/soja-web.jpg";
import styled from "styled-components";

export const Banner = styled.div`
  background-image: url(${SojaIMG.src});

  width: 100%;
  height: 100%;
  min-height: calc(100vh - 116px);

  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  margin-top: 64px;

  display: flex;
  align-items: flex-start;
  justify-content: center;

  @media (max-width: 1024px) {
    align-items: center;
  }

  @media (max-width: 768px) {
    min-height: calc(60vh);
  }
`;

export const SectionBanner = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  max-width: 90%;
  padding-top: 200px;

  @media (max-width: 1024px) {
    flex-direction: column;
    justify-content: space-between;
    padding-top: 0px;
    row-gap: 40px;
    max-width: 96%;
  }
`;

const TitleBanner = styled.div`
  font-size: 54px;
  line-height: 52px;
  font-weight: 400;
  color: #fff;

  @media (max-width: 768px) {
    font-size: 44px;
    line-height: 42px;
  }
`;

const SubTitleBanner = styled.div`
  font-size: 82px;
  line-height: 82px;
  font-weight: 600;
  color: #fff;

  @media (max-width: 768px) {
    font-size: 72px;
    line-height: 72px;
  }
`;

const DescriptionBanner = styled.div`
  font-size: 22px;
  font-weight: 500;
  color: #fff;
  width: 60%;

  @media (max-width: 1024px) {
    text-align: center;
    width: 100%;
  }

  @media (max-width: 768px) {
    font-size: 18px;
  }
`;

const SectionTitle = styled.div`
  display: flex;
  flex-direction: column;
  column-gap: 16px;

  @media (max-width: 1024px) {
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const ButtonFindOutMore = styled.button`
  width: 240px;
  height: 54px;
  border-radius: 14px;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  column-gap: 8px;
  background-color: #765021;
  color: #fff;
  font-weight: 500;
  cursor: pointer;

  &:hover {
    background-color: #442d12;
  }
`;

export default {
  Banner,
  SectionBanner,
  TitleBanner,
  DescriptionBanner,
  SubTitleBanner,
  SectionTitle,
  ButtonFindOutMore,
};
