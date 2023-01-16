import styled from "styled-components";
import { React, useState, useCallback } from "react";
import { TextField } from "@material-ui/core";
import Auth from "../apis/Auth";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const { register, checkId, checkEmail: checkE, sendCode } = Auth();
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [nameMessage, setNameMessage] = useState("");
  const [isName, setIsName] = useState(false);

  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [passwordMessage, setPasswordMessage] = useState("");
  const [passwordConfirmMessage, setPasswordConfirmMessage] = useState("");
  const [isPassword, setIsPassword] = useState(false);
  const [isPasswordConfirm, setIsPasswordConfirm] = useState(false);

  const [email, setEmail] = useState("");
  const [isEmail, setIsEmail] = useState(false);
  const [emailMessage, setEmailMessage] = useState("");

  const [code, setCode] = useState("");
  const [isCode, setIsCode] = useState(false);
  const [inputCode, setInputCode] = useState();
  const [checkCode, setCheckCode] = useState(false);

  // 아이디 중복확인
  const [checkID, setCheckID] = useState(false);
  const [checkEmail, setCheckEmail] = useState(false);

  // 아이디
  const onChangeName = useCallback((e) => {
    setUsername(e.target.value);
    setCheckID(false);
    if (e.target.value.length < 6) {
      setNameMessage("아이디는 6자리 이상 입력해주세요.");
      setIsName(false);
    } else if (e.target.value.length > 20) {
      setNameMessage("아이디는 20자리 이하로 입력해주세요.");
      setIsName(false);
    } else if (e.target.value.length > 6 || e.target.value.length < 20) {
      setNameMessage("아이디 중복확인해주세요.");
      setIsName(true);
    }
  }, []);

  //비밀번호
  const onChangePassword = useCallback((e) => {
    const passwordRegex =
      /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,25}$/;
    const passwordCurrent = e.target.value;
    setPassword(passwordCurrent);

    if (!passwordRegex.test(passwordCurrent)) {
      setPasswordMessage(
        "숫자+영문자+특수문자 조합으로 8자리 이상 입력해주세요!"
      );
      setIsPassword(false);
    } else {
      setPasswordMessage("사용 가능한 비밀번호입니다.");
      setIsPassword(true);
    }
  }, []);

  // 비밀번호 확인
  const onChangePasswordConfirm = useCallback(
    (e) => {
      const passwordConfirmCurrent = e.target.value;
      setPasswordConfirm(passwordConfirmCurrent);

      if (password === passwordConfirmCurrent) {
        setPasswordConfirmMessage("비밀번호가 일치합니다.");
        setIsPasswordConfirm(true);
      } else {
        setPasswordConfirmMessage("비밀번호가 일치하지 않습니다.");
        setIsPasswordConfirm(false);
      }
    },
    [password]
  );

  // 이메일
  const onChangeEmail = useCallback((e) => {
    const emailRegex =
      /([\w-.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
    const emailCurrent = e.target.value;
    setEmail(emailCurrent);
    setCheckEmail(false);
    if (!emailRegex.test(emailCurrent)) {
      setEmailMessage("이메일 형식이 틀렸습니다.");
      setIsEmail(false);
    } else {
      setEmailMessage("사용 가능한 이메일입니다.");
      setIsEmail(true);
    }
  }, []);

  const signUp = () => {
    if (checkID === false) {
      alert("아이디 중복확인이 필요합니다");
    } else if (checkEmail === false) {
      alert("이메일 중복확인이 필요합니다");
    } else if (isPasswordConfirm === false || isPassword === false) {
      alert("비밀번호를 확인해주세요");
    } else {
      register(username, password, email)
        .then((res) => {
          if (res.data.tf === true) {
            alert("회원가입이 완료되었습니다.");
            navigate("/login");
          } else {
            alert("회원가입에 실패했습니다.");
          }
        })
        .catch((err) => {
          console.log(err);
          alert("회원가입에 실패했습니다.");
        });
    }
  };
  const IDcheck = () => {
    checkId(setCheckID, username);
  };

  const EmailCheck = () => {
    if (email.includes("@suwon.ac.kr") === false) {
      alert("수원대학교 이메일을 입력해주세요");
    } else {
      checkE(setCheckEmail, email);
    }
  };

  const SubmitCode = () => {
    sendCode(setIsCode, setCode, email);
  };

  const CheckCode = () => {
    if (parseInt(inputCode) === code) {
      setCheckCode(true);
      alert("인증이 완료되었습니다");
    } else {
      setCheckCode(false);
      alert("인증 번호가 일치하지 않습니다");
    }
  };

  return (
    <Wrapper>
      <Container>
        <LoginWrapper>
          <SignupText>회원가입</SignupText>

          <TextField
            label="아이디"
            style={{ paddingBottom: "10px", width: "80%" }}
            onChange={onChangeName}
          />
          <OverlapButton
            onClick={IDcheck}
            disabled={isName === false ? true : false}
          >
            중복확인
          </OverlapButton>
          {username.length > 0 && (
            <CheckText
              id="check"
              className={`message ${isName ? "success" : "error"}`}
            >
              {nameMessage}
            </CheckText>
          )}
          <TextField
            fullWidth
            type="password"
            label="비밀번호"
            style={{ paddingBottom: "10px" }}
            onChange={onChangePassword}
          />
          {password.length > 0 && (
            <CheckText
              id="check"
              className={`message ${isPassword ? "success" : "error"}`}
            >
              {passwordMessage}
            </CheckText>
          )}
          <TextField
            fullWidth
            type="password"
            label="비밀번호 확인"
            style={{ paddingBottom: "10px" }}
            onChange={onChangePasswordConfirm}
          />
          {passwordConfirm.length > 0 && (
            <CheckText
              id="check"
              className={`message ${isPasswordConfirm ? "success" : "error"}`}
            >
              {passwordConfirmMessage}
            </CheckText>
          )}
          <TextField
            label="학교 이메일 (@suwon.ac.kr)"
            style={{ paddingBottom: "10px", width: "80%" }}
            onChange={onChangeEmail}
          />
          <OverlapButton
            onClick={EmailCheck}
            disabled={isEmail === false ? true : false}
          >
            중복확인
          </OverlapButton>
          {email.length > 0 && (
            <CheckText
              id="email"
              className={`message ${isEmail ? "success" : "error"}`}
            >
              {emailMessage}
            </CheckText>
          )}
          {checkEmail === true ? (
            <div style={{ width: "100%", marginTop: "20px" }}>
              <TextField
                label="인증코드 6자리 입력"
                style={{ paddingBottom: "10px", width: "60%" }}
                onChange={(e) => setInputCode(e.target.value)}
              />
              <OverlapButton
                id="code"
                disabled={checkEmail === false ? true : false}
                onClick={SubmitCode}
              >
                코드전송
              </OverlapButton>
              <OverlapButton
                id="code"
                disabled={isCode === false ? true : false}
                onClick={CheckCode}
              >
                코드확인
              </OverlapButton>
            </div>
          ) : null}
          <CheckText>* 수원대 메일 인증 후 서비스 이용 가능합니다</CheckText>
          <LoginButton
            disabled={
              checkID === false ||
              checkEmail === false ||
              isPasswordConfirm === false ||
              isPassword === false ||
              checkCode === false
                ? true
                : false
            }
            onClick={signUp}
          >
            회원가입
          </LoginButton>
        </LoginWrapper>
      </Container>
    </Wrapper>
  );
};

export default SignUp;

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
  padding: 15px;
  border: 1px solid rgb(224, 224, 224);
  border-radius: 15px;
  width: 400px;
`;

const LoginButton = styled.button`
  border: none;
  border-radius: 10px;
  background-color: #00a0e9;
  color: white;
  font-weight: bold;
  font-size: 15px;
  padding: 10px 20px;
  margin-top: 20px;
  margin-bottom: 30px;
  width: 100%;
  &:hover {
    background-color: #5d8bf4;
    cursor: pointer;
  }
  &:disabled {
    background-color: #bbb;
    cursor: default;
  }
`;

const OverlapButton = styled.button`
  border: none;
  border-radius: 20px;
  background-color: #00a0e9;
  color: white;
  font-size: 13px;
  font-weight: bold;
  padding: 5px 5px;
  width: 20%;
  margin-top: 15px;
  &:hover {
    background-color: #5d8bf4;
    cursor: pointer;
  }
  &:disabled {
    background-color: #bbb;
    cursor: default;
  }
  &#code {
    width: 18%;
    margin-right: 5px;
  }
`;

const CheckText = styled.div`
  padding-top: 20px;
  font-size: 0.7rem;
  float: left;
  &#check {
    padding-top: 0px;
    padding-bottom: 10px;
  }
  &#email {
    padding-top: 0px;
    padding-bottom: 0px;
  }
`;

const LoginWrapper = styled.div`
  width: 330px;
  &#search {
    width: 100%;
    display: flex;
    justify-content: space-between;
  }
`;

const SignupText = styled.div`
  width: 100%;
  text-align: left;
  padding-top: 30px;
  padding-bottom: 30px;
  font-weight: bold;
  font-size: 1.3rem;
`;
