import React, { useState } from "react"
import * as Styled from "./styled"
import { useNavigate } from "react-router-dom"
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Cookies } from "react-cookie";

const Nav = () => {
    let navigate = useNavigate()
    let cookies = new Cookies()
    const [click, setClick] = useState(false)
    const handleClick = () => {
        setClick(!click)
    }
    const Logout = () => {
        cookies.remove("accessToken");
        navigate("/")
    }
    let cookie = cookies.get("accessToken")

    return (
        <Styled.Navbar>
            <Styled.NavLogo onClick={() => navigate("/")}>
                SUPLE
            </Styled.NavLogo>
            <Styled.MobileIcon onClick={handleClick}>
                <FontAwesomeIcon icon={faBars}/>
            </Styled.MobileIcon>
            <Styled.NavMenu onClick={handleClick} click={click}>
                { !cookie ? 
                    <Styled.NavLinks onClick={() => navigate("/login")}>글 쓰기</Styled.NavLinks> : 
                    <Styled.NavLinks onClick={() => alert('성공')}>글 쓰기</Styled.NavLinks> }
                <Styled.NavLinks onClick={() => navigate("/notice")}>공지사항</Styled.NavLinks>
                { !cookie ? 
                    <Styled.NavLinks onClick={() => navigate("/login")}>로그인</Styled.NavLinks> : 
                    <Styled.NavLinks onClick={() => Logout()}>로그아웃</Styled.NavLinks> }
                { !cookie ?
                    <Styled.NavLinks id="signup" onClick={() => navigate("/signup")}>회원가입</Styled.NavLinks> :
                    <Styled.NavLinks id="signup" onClick={() => navigate("/myinformation")}>내 정보</Styled.NavLinks> }      
            </Styled.NavMenu>
        </Styled.Navbar>
    )
}

export default Nav
