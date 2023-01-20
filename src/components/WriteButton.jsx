import React from "react";
import styled from "@emotion/styled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { Cookies } from "react-cookie";
import { useNavigate } from "react-router-dom";

const WriteButton = () => {
  let cookies = new Cookies();
  let navigate = useNavigate();
  let cookie = cookies.get("accessToken");
  const onClick = () => {
    if (cookie) {
      navigate("/write");
    } else {
      alert("로그인 후 이용해주세요");
      navigate("/login");
    }
  };
  return (
    <div>
      <TopButton onClick={onClick}>
        <FontAwesomeIcon icon={faPlus} />
      </TopButton>
    </div>
  );
};

export default WriteButton;

const TopButton = styled.button`
  position: fixed;
  bottom: 30px;
  right: 30px;
  z-index: 999;
  border: 2px solid #00a0e9;
  background-color: #fff;
  color: #00a0e9;
  font-size: 20px;
  cursor: pointer;
  padding: 0.9rem;
  border-radius: 90%;
`;
