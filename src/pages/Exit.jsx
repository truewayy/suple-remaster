import styled from "styled-components";
import { React, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { TextField } from "@material-ui/core";
import Auth from "../api/Auth";
import { Cookies } from "react-cookie";

const Exit = () => {
  const { exit } = Auth();
  const navigate = useNavigate();
  const cookies = new Cookies();

  const [password, setPassword] = useState("");
  const [db, setData] = useState({
    tf: false,
  });
  const [loading, setLoading] = useState(false);
  const onSubmit = () => {
    if (
      window.confirm("회원 탈퇴하시겠습니까?\n(복구가 불가능합니다)") === true
    ) {
      exit(setData, setLoading, password);
    }
  };
  useEffect(() => {
    if (db.tf === true) {
      alert("회원탈퇴 성공하였습니다\n(안녕히 가세요 ^^))");
      cookies.remove("accessToken");
      cookies.remove("refreshToken");
      navigate("/");
    }
  }, [loading, db]);
  return (
    <Wrapper>
      <Container>
        <FindWrapper>
          <FindText>회원 탈퇴</FindText>
          <DetailText>
            회원님의 계정과 개인정보가 보호 기간 없이 바로 삭제 됩니다
          </DetailText>

          <TextField
            type="password"
            id="id"
            fullWidth
            label="SUPLE 비밀번호"
            required
            style={{ paddingBottom: "20px" }}
            onChange={(e) => setPassword(e.target.value)}
          />
          <SubmitButton
            onClick={onSubmit}
            disabled={password === "" ? true : false}
          >
            탈퇴
          </SubmitButton>
        </FindWrapper>
      </Container>
    </Wrapper>
  );
};

export default Exit;

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
    background-color: #d82148;
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
