import React, { useState } from "react";
import * as Styled from "./styled";
import { useNavigate } from "react-router-dom";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Cookies } from "react-cookie";
import { useSetRecoilState } from "recoil";
import { userInfoState } from "../../store/state";
import { queryClient } from "../..";
import { getToken } from "../../API/apiController";
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
    <Styled.Navbar>
      <Styled.NavLogo onClick={() => navigate("/")}>SUPLE</Styled.NavLogo>
      <Styled.MobileIcon onClick={handleClick}>
        <FontAwesomeIcon icon={faBars} />
      </Styled.MobileIcon>
      <Styled.NavMenu onClick={handleClick} click={click}>
        {!cookie ? (
          <Styled.NavLinks
            onClick={() => {
              alert("로그인 후 이용해주세요");
              navigate("/login");
            }}
          >
            글 쓰기
          </Styled.NavLinks>
        ) : (
          <Styled.NavLinks onClick={() => navigate("/write")}>
            글 쓰기
          </Styled.NavLinks>
        )}
        <Styled.NavLinks onClick={() => navigate("/notice")}>
          공지사항
        </Styled.NavLinks>
        {!cookie ? (
          <Styled.NavLinks onClick={() => navigate("/login")}>
            로그인
          </Styled.NavLinks>
        ) : (
          <Styled.NavLinks onClick={() => Logout()}>로그아웃</Styled.NavLinks>
        )}
        {!cookie ? (
          <Styled.NavLinks id="signup" onClick={() => navigate("/signup")}>
            회원가입
          </Styled.NavLinks>
        ) : (
          <Styled.NavLinks
            id="signup"
            onClick={() => navigate("/myinformation")}
          >
            내 정보
          </Styled.NavLinks>
        )}
      </Styled.NavMenu>
    </Styled.Navbar>
  );
};

export default Nav;
