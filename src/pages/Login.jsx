import styled from "@emotion/styled";
import { TextField } from "@material-ui/core";
import Auth from "../api/Auth";
import { useNavigate } from "react-router-dom";
import { Container, Wrapper } from "styles/common";
import { useForm } from "react-hook-form";

const Login = () => {
  const { login } = Auth();
  const {
    register,
    handleSubmit,
    formState: { isValid },
  } = useForm();
  const navigate = useNavigate();
  const onLogin = ({ username, password }) => {
    login(username, password);
  };

  return (
    <Wrapper>
      <Container onSubmit={handleSubmit(onLogin)}>
        <LoginWrapper>
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
          <LoginButton disabled={!isValid}>로그인</LoginButton>
        </LoginWrapper>

        <LoginWrapper id="search">
          <SearchLink id="id" onClick={() => navigate("/idsearch")}>
            아이디 찾기
          </SearchLink>
          <SearchLink id="pw" onClick={() => navigate("/pwsearch")}>
            비밀번호 찾기
          </SearchLink>
        </LoginWrapper>
      </Container>
    </Wrapper>
  );
};

export default Login;

const LoginButton = styled.button`
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

const LoginWrapper = styled.div`
  width: 300px;
  &#search {
    width: 100%;
    display: flex;
    justify-content: space-between;
  }
`;

const SearchLink = styled.div`
  color: rgb(190, 190, 190);
  font-weight: bold;
  padding-bottom: 20px;
  &:hover {
    color: #00a0e9;
    cursor: pointer;
  }
  &#id {
    padding-left: 30px;
  }
  &#pw {
    padding-right: 30px;
  }
`;

const LoginText = styled.div`
  width: 100%;
  text-align: left;
  padding-top: 30px;
  padding-bottom: 20px;
  font-weight: bold;
  font-size: 1.3rem;
`;
