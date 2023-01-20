import { TextField } from "@material-ui/core";
import Auth from "../api/Auth";
import {
  CheckText,
  Container,
  DetailText,
  FindText,
  InputWrapper,
  SubmitButton,
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
        <InputWrapper>
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
        </InputWrapper>
      </Container>
    </Wrapper>
  );
};

export default IdSearch;
