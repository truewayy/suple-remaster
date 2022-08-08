import styled from "styled-components";

export const Navbar = styled.nav`
  background: #ffffff;
  margin: 0 auto;
  height: 110px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.2rem;
  font-weight: 500;
  top: 0;
  z-index: 999;
  justify-content: space-around;
  border-bottom: 1.5px solid #e0e0e0;
`;

export const NavLogo = styled.nav`
  color: #00a0e9;
  display: flex;
  font-size: 2rem;
  font-weight: bold;
  &:hover {
    cursor: pointer;
  }

  @media screen and (max-width: 960px) {
    margin: 0 auto;
  }
`;

export const MobileIcon = styled.div`
  display: none;

  @media screen and (max-width: 960px) {
    display: block;
    font-size: 1.8rem;
    color: #00a0e9;
    cursor: pointer;
    position: absolute;
    left: 20px;
  }
`;

export const NavMenu = styled.nav`
  display: flex;

  @media screen and (max-width: 960px) {
    flex-direction: column;
    width: 100%;
    height: 90vh;
    position: absolute;
    top: 80px;
    left: ${(props) => (props.click ? 0 : "-100%")};
    opacity: 1;
    transition: all 0.5s ease;
    background: #fff;
    z-index: 999;
  }
`;

export const NavLinks = styled.div`
  display: flex;
  padding: 0.5rem 1rem;
  font-size: 1rem;
  &:hover {
    cursor: pointer;
    color: #00a0e9;
  }
  &#signup {
    color: #00a0e9;
  }

  @media screen and (max-width: 960px) {
    text-align: center;
    padding: 2rem;
    display: table;
    &:hover {
      color: #00a0e9;
      transition: all 0.3s ease;
    }
  }
`;
