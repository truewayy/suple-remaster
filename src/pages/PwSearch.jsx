import styled from "styled-components";
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

const PwSearch = () => {
  const { findPw } = Auth();
  const {
    register,
    handleSubmit,
    formState: { isValid, errors },
  } = useForm({ mode: "onChange" });
  const onSubmit = ({ username, email }) => {
    findPw(username, email);
  };

  return (
    <Wrapper>
      <Container onSubmit={handleSubmit(onSubmit)}>
        <FindWrapper>
          <FindText>비밀번호 찾기</FindText>
          <DetailText>
            아이디에 해당하는 학교 이메일로 임시 비밀번호를 전송합니다
          </DetailText>

          <TextField
            type="id"
            fullWidth
            label="SUPLE 아이디"
            style={{ paddingBottom: "20px" }}
            {...register("username", { required: true })}
          />
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
