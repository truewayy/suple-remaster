import { React, useState } from "react";
import * as Styled from "./styled";
import { TextField, FormControlLabel, Checkbox } from "@material-ui/core";
import { loginApi } from "../../API/api";
import { useNavigate } from "react-router-dom";
import { setToken } from "../../API/apiController";

const Login = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const [check, setCheck] = useState(false);
  const onLogin = () => {
    loginApi(username, password)
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
      loginApi(username, password)
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
    <Styled.Wrapper>
      <Styled.Container>
        <Styled.LoginWrapper>
          <Styled.LoginText>로그인</Styled.LoginText>

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
          <Styled.LoginWrapper id="search">
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
          </Styled.LoginWrapper>
          <Styled.LoginButton onClick={onLogin}>로그인</Styled.LoginButton>
        </Styled.LoginWrapper>

        <Styled.LoginWrapper id="search">
          <Styled.SearchLink id="id" onClick={() => navigate("/idsearch")}>
            아이디 찾기
          </Styled.SearchLink>
          <Styled.SearchLink id="pw" onClick={() => navigate("/pwsearch")}>
            비밀번호 찾기
          </Styled.SearchLink>
        </Styled.LoginWrapper>
      </Styled.Container>
    </Styled.Wrapper>
  );
};

export default Login;
