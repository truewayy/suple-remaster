import React, { useState, useEffect } from 'react';
import * as Styled from './styled';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { Cookies } from "react-cookie";
import { useNavigate } from "react-router-dom"

const WriteButton = () => {
  let cookies = new Cookies()
  let navigate = useNavigate()
  let cookie = cookies.get("accessToken")
  const onClick = () => {
    if(cookie) {
      alert('성공');
    }
    else {
      navigate('/login');
    }
  }
  return (
    <div>
      <Styled.TopButton>
        <FontAwesomeIcon icon={faPlus} onClick={onClick}/>
      </Styled.TopButton>
    </div>
  );
};

export default WriteButton;
