import styled from "styled-components";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Cookies } from "react-cookie";
import { useSetRecoilState } from "recoil";
import { userInfoState } from "../store/state";
import { queryClient } from "..";
import { getToken } from "../api/apiController";

const Nav = () => {
  let navigate = useNavigate();
  let cookies = new Cookies();
  const setUserInfo = useSetRecoilState(userInfoState);
  const [click, setClick] = useState(false);
  const handleClick = () => {
    setClick(!click);
  };
  const Logout = () => {
    cookies.remove("accessToken");
    cookies.remove("refreshToken");
    setUserInfo(undefined);
    navigate("/");
    queryClient.invalidateQueries("myInfo");
  };
  let cookie = getToken("accessToken");

  return (
    <Navbar>
      <NavLogo onClick={() => navigate("/")}>SUPLE</NavLogo>
      <MobileIcon onClick={handleClick}>
        <FontAwesomeIcon icon={faBars} />
      </MobileIcon>
      <NavMenu onClick={handleClick} click={click}>
        {!cookie ? (
          <NavLinks
            onClick={() => {
              alert("로그인 후 이용해주세요");
              navigate("/login");
            }}
          >
            글 쓰기
          </NavLinks>
        ) : (
          <NavLinks onClick={() => navigate("/write")}>글 쓰기</NavLinks>
        )}
        <NavLinks onClick={() => navigate("/notice")}>공지사항</NavLinks>
        {!cookie ? (
          <NavLinks onClick={() => navigate("/login")}>로그인</NavLinks>
        ) : (
          <NavLinks onClick={() => Logout()}>로그아웃</NavLinks>
        )}
        {!cookie ? (
          <NavLinks id="signup" onClick={() => navigate("/signup")}>
            회원가입
          </NavLinks>
        ) : (
          <NavLinks id="signup" onClick={() => navigate("/myinformation")}>
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
    text-align: center;
    padding: 2rem;
    display: table;
    &:hover {
      color: #00a0e9;
      transition: all 0.3s ease;
    }
  }
`;
