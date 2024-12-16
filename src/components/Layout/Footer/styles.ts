import styled from "styled-components";

export const Container = styled.div`
  margin-top: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  flex-direction: column;
  position: absolute;

  @media (max-width: 1024px) {
    margin-top: 50px;
  }
`;

export const FooterDescription = styled.div`
  width: 100%;
  background-color: #765021;
  display: flex;
  padding: 22px 0;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  color: #fff;
  font-weight: 400;
  font-size: 16px;

  @media (max-width: 576px) {
    font-size: 14px;
  }
`;

export const FooterRights = styled.div`
  width: 100%;
  background-color: #000;
  display: flex;
  padding: 10px 0;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  color: #fff;
  font-size: 16px;
`;

export const SectionContactFooter = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  flex-direction: row;
  width: 100%;
`;

export const NavigationLinks = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 6px;

  a {
    &:hover {
      color: #000;
    }
  }
`;

export const ContactContent = styled.div`
  display: flex;
  flex-direction: column;

  h2 {
    color: #fff;
    font-weight: 600;
    padding-bottom: 8px;
  }
`;

export const ItemContact = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: row;
  column-gap: 6px;
  padding: 2px 0;

  a {
    &:hover {
      color: #000;
    }
  }
`;

export default {
  Container,
  FooterDescription,
  FooterRights,
  SectionContactFooter,
  NavigationLinks,
  ContactContent,
  ItemContact,
};
