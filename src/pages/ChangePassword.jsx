import { React, useState, useEffect, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { TextField } from "@material-ui/core";
import { changePasswordApi } from "../API/api";
import { Cookies } from "react-cookie";

const PwChange = () => {
  const navigate = useNavigate();
  const cookies = new Cookies();
  const [db, setData] = useState({
    tf: false,
  });
  const [loading, setLoading] = useState(false);
  const [currentPassword, setCurrentPassword] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [passwordMessage, setPasswordMessage] = useState("");
  const [passwordConfirmMessage, setPasswordConfirmMessage] = useState("");
  const [isPassword, setIsPassword] = useState(false);
  const [isPasswordConfirm, setIsPasswordConfirm] = useState(false);

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
  const onSubmit = () => {
    changePasswordApi(setData, setLoading, currentPassword, password);
  };
  useEffect(() => {
    if (db.tf === true) {
      alert("비밀번호 변경 성공하였습니다\n(다시 로그인 해주세요)");
      cookies.remove("accessToken");
      cookies.remove("refreshToken");
      navigate("/");
    }
  }, [loading, db]);
  return (
    <Wrapper>
      <Container>
        <FindWrapper>
          <FindText>비밀번호 변경</FindText>
          <DetailText>
            현재 비밀번호와 새로 사용할 비밀번호를 입력해주세요
          </DetailText>

          <TextField
            type="password"
            id="password"
            fullWidth
            label="현재 비밀번호"
            style={{ paddingBottom: "10px" }}
            onChange={(e) => setCurrentPassword(e.target.value)}
          />
          <TextField
            fullWidth
            type="password"
            label="새로운 비밀번호"
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
            label="새로운 비밀번호 확인"
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
          <SubmitButton
            disabled={
              isPasswordConfirm === false ||
              isPassword === false ||
              currentPassword === ""
                ? true
                : false
            }
            onClick={onSubmit}
          >
            변경
          </SubmitButton>
        </FindWrapper>
      </Container>
    </Wrapper>
  );
};

export default PwChange;

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
  width: 350px;
`;

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
  &:disabled {
    background-color: #eee;
    cursor: default;
  }
`;

const FindWrapper = styled.div`
  width: 300px;
  &#search {
    width: 100%;
    display: flex;
    justify-content: space-between;
  }
`;

const FindText = styled.div`
  width: 100%;
  text-align: left;
  padding-top: 30px;
  padding-bottom: 10px;
  font-weight: bold;
  font-size: 1.3rem;
`;

const DetailText = styled.div`
  width: 100%;
  font-weight: 500;
  font-size: 12px;
  padding-bottom: 20px;
  text-align: left;
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
