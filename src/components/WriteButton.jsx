import React from "react";
import styled from "@emotion/styled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import Navigate from "hooks/navigate";
import { getToken } from "api/apiController";

const WriteButton = () => {
  const cookie = getToken("accessToken");
  const { go } = Navigate();
  const handleClick = () => {
    if (cookie) {
      go("/write");
    } else {
      alert("로그인 후 이용해주세요");
      go("/login");
    }
  };
  return (
    <TopButton onClick={handleClick}>
      <FontAwesomeIcon icon={faPlus} />
    </TopButton>
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
