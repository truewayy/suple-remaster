import React from "react";
import * as Styled from "./styled";
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
      <Styled.TopButton onClick={onClick}>
        <FontAwesomeIcon icon={faPlus} />
      </Styled.TopButton>
    </div>
  );
};

export default WriteButton;
