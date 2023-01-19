import styled from "styled-components";
import { React } from "react";
import { TextField } from "@material-ui/core";
import Auth from "../api/Auth";
import {
  Container,
  DetailText,
  FindText,
  FindWrapper,
  Wrapper,
} from "styles/common";
import { useForm } from "react-hook-form";

const Exit = () => {
  const { exit } = Auth();
  const {
    register,
    handleSubmit,
    formState: { isValid },
  } = useForm();
  const onSubmit = ({ password }) => {
    window.confirm("회원 탈퇴하시겠습니까?\n(복구가 불가능합니다)") &&
      exit(password);
  };
  return (
    <Wrapper>
      <Container onSubmit={handleSubmit(onSubmit)}>
        <FindWrapper>
          <FindText>회원 탈퇴</FindText>
          <DetailText>
            회원님의 계정과 개인정보가 보호 기간 없이 바로 삭제 됩니다
          </DetailText>

          <TextField
            type="password"
            fullWidth
            label="SUPLE 비밀번호"
            style={{ paddingBottom: "20px" }}
            {...register("password", { required: true })}
          />
          <SubmitButton disabled={!isValid}>탈퇴</SubmitButton>
        </FindWrapper>
      </Container>
    </Wrapper>
  );
};

export default Exit;

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
    background-color: #d82148;
    cursor: pointer;
  }
  &:disabled {
    background-color: #eee;
    cursor: default;
  }
`;
