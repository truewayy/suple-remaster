import styled from "styled-components";
import { React, useState } from "react";
import { TextField } from "@material-ui/core";
import Auth from "../api/Auth";
import { Container, FindText, FindWrapper, Wrapper } from "styles/common";

const IdSearch = () => {
  const { findId } = Auth();
  const [email, setEmail] = useState();
  const onSubmit = () => {
    findId(email);
  };

  return (
    <Wrapper>
      <Container>
        <FindWrapper>
          <FindText>아이디 찾기</FindText>
          <DetailText>학교 계정을 입력하세요</DetailText>

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

export default IdSearch;

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

const DetailText = styled.div`
  font-weight: 500;
  font-size: 12px;
  padding-bottom: 20px;
  float: left;
`;
