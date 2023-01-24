import styled from "@emotion/styled";
import React, { useState } from "react";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useSetRecoilState } from "recoil";
import { userInfoState } from "../store/state";
import { queryClient } from "..";
import { getToken, removeToken } from "../api/apiController";
import Navigate from "hooks/navigate";

const Nav = () => {
  const { go } = Navigate();
  const [click, setClick] = useState(false);
  const setUserInfo = useSetRecoilState(userInfoState);
  const handleClick = () => {
    setClick(!click);
  };
  const Logout = () => {
    removeToken("accessToken");
    removeToken("refreshToken");
    setUserInfo(undefined);
    go("/");
    queryClient.invalidateQueries("myInfo");
  };
  const cookie = getToken("accessToken");

  return (
    <Navbar>
      <NavLogo onClick={() => go("/")}>SUPLE</NavLogo>
      <MobileIcon onClick={handleClick}>
        <FontAwesomeIcon icon={faBars} />
      </MobileIcon>
      <NavMenu onClick={handleClick} click={click}>
        {!cookie ? (
          <NavLinks
            onClick={() => {
              alert("로그인 후 이용해주세요");
              go("/login");
            }}
          >
            글 쓰기
          </NavLinks>
        ) : (
          <NavLinks onClick={() => go("/write")}>글 쓰기</NavLinks>
        )}
        <NavLinks onClick={() => go("/notice")}>공지사항</NavLinks>
        {!cookie ? (
          <NavLinks onClick={() => go("/login")}>로그인</NavLinks>
        ) : (
          <NavLinks onClick={() => Logout()}>로그아웃</NavLinks>
        )}
        {!cookie ? (
          <NavLinks id="signup" onClick={() => go("/signup")}>
            회원가입
          </NavLinks>
        ) : (
          <NavLinks id="signup" onClick={() => go("/myinformation")}>
            내 정보
          </NavLinks>
        )}
      </NavMenu>
    </Navbar>
  );
};

export default Nav;

const Navbar = styled.nav`
  background: #ffffff;
  height: 80px;
  display: flex;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  justify-content: center;
  align-items: center;
  font-size: 1.2rem;
  font-weight: 500;
  justify-content: space-around;
  border-bottom: 1.5px solid #e0e0e0;
`;

const NavLogo = styled.nav`
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

const MobileIcon = styled.div`
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

const NavMenu = styled.nav`
  display: flex;

  @media screen and (max-width: 960px) {
    flex-direction: column;
    width: 100%;
    height: 100vh;
    position: absolute;
    top: 80px;
    left: ${({ click }) => (click ? 0 : "-100%")};
    opacity: 1;
    transition: all 0.5s ease;
    background: #fff;
    z-index: 999;
  }
`;

const NavLinks = styled.div`
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
    display: table;
    text-align: center;
    padding: 2rem;
  }
`;
