import styled from "styled-components";

interface BannerNewsProps {
  src: string;
}

export const Container = styled.div`
  width: 600px;
  max-height: 600px;
  background-color: #fff;
  border: 1px solid #eee;
  padding: 8px;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  transition: 0.3s all;

  &:hover {
    box-shadow: 10px 10px 15px rgba(180, 170, 180, 0.5);
    transform: scale(1.03);
    transition: 0.3s all;
  }

  a {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
  }

  /* Tablets */
  @media (max-width: 1024px) {
    width: 48%;
    max-height: auto;
  }

  /* Celulares */
  @media (max-width: 768px) {
    padding: 6px;
  }

  /* Celulares */
  @media (max-width: 576px) {
    width: 100%;
  }
`;

export const BannerNews = styled.div<BannerNewsProps>`
  width: 100%;
  min-height: 400px;
  background-image: url(${(props) => props.src || ""});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: 8px;

  @media (max-width: 1024px) {
    min-height: 340px;
  }

  @media (max-width: 768px) {
    min-height: 250px;
  }

  @media (max-width: 576px) {
    min-height: 300px;
  }
`;

export const Title = styled.div`
  font-size: 24px;
  font-weight: 600;
  padding: 8px 0;
  text-align: inherit;

  @media (max-width: 768px) {
    font-size: 20px;
    padding: 4px 0;
  }

  @media (max-width: 480px) {
    font-size: 18px;
  }
`;

export const Content = styled.div`
  font-size: 16px;
  text-align: justify;

  @media (max-width: 768px) {
    font-size: 14px;
  }

  @media (max-width: 480px) {
    font-size: 12px;
  }
`;

export const ImageNotFound = styled.div`
  width: 100%;
  min-height: 400px;
  border-radius: 8px;
  background-color: #eee;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 768px) {
    min-height: 250px;
  }

  @media (max-width: 480px) {
    min-height: 200px;
  }
`;

export default {
  BannerNews,
  Container,
  Title,
  Content,
  ImageNotFound,
};
