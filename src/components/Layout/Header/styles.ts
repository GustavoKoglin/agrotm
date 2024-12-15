import styled from "styled-components";

// Container principal do Header
const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 64px;
  background: #000;
  color: #fff;
  box-shadow: 3px 3px 8px rgb(0 0 0 / 47%);
  z-index: 1000;
`;

// Wrapper do Navbar
const NavbarWrapper = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: space-between;
  padding: 0 24px;

  @media (max-width: 768px) {
    padding: 0 16px;
  }
`;

// Seção da imagem (logo)
const SectionImage = styled.div`
  display: flex;
  align-items: center;
`;

// Container do Navbar
const NavbarContainer = styled.ul<{ isOpen: boolean }>`
  display: flex;
  justify-content: space-between;
  width: 60%;
  list-style-type: none;
  margin: 0;
  padding: 0;
  height: 100%;
  align-items: center;

  @media (max-width: 1024px) {
    position: absolute;
    top: 64px;
    left: 0;
    width: 100%;
    background: #000;
    flex-direction: column;
    justify-content: center;
    gap: 20px;
    height: auto;
    display: ${(props) => (props.isOpen ? "flex" : "none")};
    padding: 20px 0;
  }
`;

// Cada item do menu
const NavbarItem = styled.li`
  font-size: 1rem;
  margin: 0 15px;
  padding: 10px 15px;
  cursor: pointer;
  text-align: center;
  transition: all 0.3s ease;

  &:hover {
    background-color: #442d12;
    color: white;
    border-radius: 5px;
  }

  a {
    text-decoration: none;
    color: inherit;
    font-size: 18px;

    @media (max-width: 768px) {
      font-size: 1rem;
    }
  }
`;

// Botão hamburguer
const HamburgerButton = styled.div`
  display: none;
  cursor: pointer;

  @media (max-width: 1024px) {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    height: 25px;
    width: 30px;

    span {
      display: block;
      height: 3px;
      width: 100%;
      background: white;
      border-radius: 5px;
      transition: all 0.3s ease;
    }
  }
`;

export default {
  Container,
  NavbarWrapper,
  SectionImage,
  NavbarContainer,
  NavbarItem,
  HamburgerButton,
};
