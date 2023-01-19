import styled from "styled-components";
import { React, useState } from "react";
import { TextField } from "@material-ui/core";
import Auth from "../api/Auth";
import {
  Container,
  DetailText,
  FindText,
  FindWrapper,
  Wrapper,
} from "styles/common";

const PwSearch = () => {
  const { findPw } = Auth();
  const [username, setUsername] = useState();
  const [email, setEmail] = useState();

  const onSubmit = () => {
    findPw(username, email);
  };

  return (
    <Wrapper>
      <Container>
        <FindWrapper>
          <FindText>비밀번호 찾기</FindText>
          <DetailText>
            아이디에 해당하는 학교 이메일로 임시 비밀번호를 전송합니다
          </DetailText>

          <TextField
            type="id"
            id="id"
            fullWidth
            label="SUPLE 아이디"
            required
            autoComplete="id"
            style={{ paddingBottom: "20px" }}
            onChange={(e) => setUsername(e.target.value)}
          />
          <TextField
            type="email"
            id="email"
            fullWidth
            label="학교 이메일 (example@suwon.ac.kr)"
            required
            autoComplete="current-email"
            style={{ paddingBottom: "10px" }}
            onChange={(e) => setEmail(e.target.value)}
          />
          <SubmitButton onClick={onSubmit}>전송</SubmitButton>
        </FindWrapper>
      </Container>
    </Wrapper>
  );
};

export default PwSearch;

const SubmitButton = styled.button`
  border: none;
  border-radius: 10px;
  background-color: #00a0e9;
  color: white;
  font-weight: bold;
  font-size: 15px;
  padding: 10px 20px;
  margin-top: 10px;
  margin-bottom: 30px;
  width: 100%;
  &:hover {
    background-color: #5d8bf4;
    cursor: pointer;
  }
`;
