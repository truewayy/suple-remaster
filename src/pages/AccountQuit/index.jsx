import { React, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import * as Styled from "./styled";
import { TextField } from "@material-ui/core";
import { quitApi } from "../../API/api";
import { Cookies } from "react-cookie";

const AccountQuit = () => {
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
      quitApi(setData, setLoading, password);
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
    <Styled.Wrapper>
      <Styled.Container>
        <Styled.FindWrapper>
          <Styled.FindText>회원 탈퇴</Styled.FindText>
          <Styled.DetailText>
            회원님의 계정과 개인정보가 보호 기간 없이 바로 삭제 됩니다
          </Styled.DetailText>

          <TextField
            type="password"
            id="id"
            fullWidth
            label="SUPLE 비밀번호"
            required
            style={{ paddingBottom: "20px" }}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Styled.SubmitButton
            onClick={onSubmit}
            disabled={password === "" ? true : false}
          >
            탈퇴
          </Styled.SubmitButton>
        </Styled.FindWrapper>
      </Styled.Container>
    </Styled.Wrapper>
  );
};

export default AccountQuit;
