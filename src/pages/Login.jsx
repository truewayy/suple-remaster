import styled from "@emotion/styled";
import Auth from "../api/Auth";
import { TextField } from "@material-ui/core";
import { Container, SubmitButton, Wrapper, InputWrapper } from "styles/common";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const { login } = Auth();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { isValid },
  } = useForm();
  const onLogin = ({ username, password }) => {
    login(username, password);
  };

  return (
    <Wrapper>
      <Container onSubmit={handleSubmit(onLogin)}>
        <InputWrapper>
          <LoginText>로그인</LoginText>

          <TextField
            type="id"
            fullWidth
            label="아이디 입력"
            style={{ paddingBottom: "20px" }}
            {...register("username", { required: true })}
          />
          <TextField
            type="password"
            fullWidth
            label="비밀번호 입력"
            style={{ paddingBottom: "10px" }}
            {...register("password", { required: true })}
          />
          <SubmitButton disabled={!isValid}>로그인</SubmitButton>
        </InputWrapper>

        <InputWrapper id="search">
          <SearchLink id="id" onClick={() => navigate("/idsearch")}>
            아이디 찾기
          </SearchLink>
          <SearchLink id="pw" onClick={() => navigate("/pwsearch")}>
            비밀번호 찾기
          </SearchLink>
        </InputWrapper>
      </Container>
    </Wrapper>
  );
};

export default Login;

const SearchLink = styled.div`
  color: rgb(190, 190, 190);
  font-weight: bold;
  padding-bottom: 20px;
  &:hover {
    color: #00a0e9;
    cursor: pointer;
  }
`;

const LoginText = styled.div`
  text-align: left;
  padding-top: 30px;
  padding-bottom: 20px;
  font-weight: bold;
  font-size: 1.3rem;
`;
