import styled from "styled-components";
import { React, useState } from "react";
import { TextField, FormControlLabel, Checkbox } from "@material-ui/core";
import Auth from "../apis/Auth";
import { useNavigate } from "react-router-dom";
import { setToken } from "../apis/apiController";

const Login = () => {
  const { login } = Auth();
  const navigate = useNavigate();
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const [check, setCheck] = useState(false);
  const onLogin = () => {
    login(username, password)
      .then((r) => {
        if (r.data.success === true) {
          setToken("accessToken", r.data.Authorization["accessToken"]);
          setToken("refreshToken", r.data.Authorization["refreshToken"]);
          navigate("/");
        }
      })
      .catch((error) => {
        alert(error.response.data.message);
      });
  };
  const onKeypress = (e) => {
    if (e.key === "Enter") {
      login(username, password)
        .then((r) => {
          if (r.data.success === true) {
            setToken("accessToken", r.data.Authorization["accessToken"]);
            setToken("refreshToken", r.data.Authorization["refreshToken"]);
            navigate("/");
          }
        })
        .catch((error) => {
          alert(error.response.data.message);
        });
    }
  };

  return (
    <Wrapper>
      <Container>
        <LoginWrapper>
          <LoginText>로그인</LoginText>

          <TextField
            type="id"
            id="email"
            fullWidth
            label="아이디 입력"
            required
            autoComplete="email"
            style={{ paddingBottom: "20px" }}
            onChange={(e) => setUsername(e.target.value)}
          />
          <TextField
            type="password"
            id="password"
            fullWidth
            label="비밀번호 입력"
            required
            autoComplete="current-password"
            style={{ paddingBottom: "10px" }}
            onChange={(e) => setPassword(e.target.value)}
            onKeyPress={onKeypress}
          />
          <LoginWrapper id="search">
            <FormControlLabel
              control={
                <Checkbox
                  color="default"
                  checked={check}
                  onChange={(e) => setCheck(e.target.checked)}
                />
              }
              label="로그인 유지"
            />
          </LoginWrapper>
          <LoginButton onClick={onLogin}>로그인</LoginButton>
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

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const Container = styled.div`
  margin: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  border: 1px solid rgb(224, 224, 224);
  border-radius: 15px;
  width: 360px;
`;

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
