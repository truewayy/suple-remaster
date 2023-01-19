import styled from "styled-components";
import { React } from "react";
import { TextField } from "@material-ui/core";
import Auth from "../api/Auth";
import {
  CheckText,
  Container,
  DetailText,
  FindText,
  FindWrapper,
  Wrapper,
} from "styles/common";
import { useForm } from "react-hook-form";
import { validateEmail } from "utils/validate";

const IdSearch = () => {
  const { findId } = Auth();
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({ mode: "onChange" });
  const onSubmit = ({ email }) => {
    findId(email);
  };

  return (
    <Wrapper>
      <Container onSubmit={handleSubmit(onSubmit)}>
        <FindWrapper>
          <FindText>아이디 찾기</FindText>
          <DetailText>학교 계정을 입력하세요</DetailText>

          <TextField
            type="email"
            fullWidth
            label="학교 이메일 (example@suwon.ac.kr)"
            style={{ paddingBottom: "10px" }}
            {...register("email", validateEmail)}
          />
          {errors.email && (
            <CheckText id="check">{errors.email.message}</CheckText>
          )}
          <SubmitButton type="submit" disabled={!isValid}>
            전송
          </SubmitButton>
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
  &:disabled {
    background-color: #b3b3b3;
    cursor: default;
  }
`;
