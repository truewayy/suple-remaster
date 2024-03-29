import { React } from "react";
import { TextField } from "@material-ui/core";
import { validatePassword, validatePasswordConfirm } from "utils/validate";
import Auth from "../api/Auth";
import { useForm } from "react-hook-form";
import {
  CheckText,
  Container,
  DetailText,
  FindText,
  InputWrapper,
  SubmitButton,
  Wrapper,
} from "styles/common";

const PwChange = () => {
  const { changePw } = Auth();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isValid },
  } = useForm({ mode: "onChange" });
  const onSubmit = ({ currentPassword, newPassword }) => {
    changePw(currentPassword, newPassword);
  };
  return (
    <Wrapper>
      <Container onSubmit={handleSubmit(onSubmit)}>
        <InputWrapper>
          <FindText>비밀번호 변경</FindText>
          <DetailText>
            현재 비밀번호와 새로 사용할 비밀번호를 입력해주세요
          </DetailText>

          <TextField
            type="password"
            fullWidth
            label="현재 비밀번호"
            style={{ paddingBottom: "10px" }}
            {...register("currentPassword", { required: true })}
          />
          <TextField
            type="password"
            fullWidth
            label="새로운 비밀번호"
            style={{ paddingBottom: "10px" }}
            {...register("newPassword", validatePassword)}
          />
          {errors.newPassword && (
            <CheckText id="check">{errors.newPassword.message}</CheckText>
          )}
          <TextField
            fullWidth
            type="password"
            label="새로운 비밀번호 확인"
            style={{ paddingBottom: "10px" }}
            {...register(
              "passwordConfirm",
              validatePasswordConfirm(watch("newPassword"))
            )}
          />
          {errors.passwordConfirm && (
            <CheckText id="check">{errors.passwordConfirm.message}</CheckText>
          )}
          <SubmitButton disabled={!isValid} type="submit">
            변경
          </SubmitButton>
        </InputWrapper>
      </Container>
    </Wrapper>
  );
};

export default PwChange;
