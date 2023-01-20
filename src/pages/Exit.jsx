import { TextField } from "@material-ui/core";
import { useForm } from "react-hook-form";
import Auth from "../api/Auth";
import {
  Container,
  DetailText,
  FindText,
  InputWrapper,
  SubmitButton,
  Wrapper,
} from "styles/common";

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
        <InputWrapper>
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
        </InputWrapper>
      </Container>
    </Wrapper>
  );
};

export default Exit;
