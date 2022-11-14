import React, { useEffect, useState } from "react";
import * as Styled from "./styled";
import TeamList from "../../components/TeamList/index";
import { useNavigate } from "react-router-dom";
import moment from "moment";
import "moment/locale/ko";
import noticePath from "../../img/notice.png";
import { useRecoilState } from "recoil";
import { partState, userInfoState } from "../../store/state";
import { Cookies } from "react-cookie";
import jwt_decode from "jwt-decode";
// designed by soo kyung

export const options = [
  {
    name: "전체",
    lec: "all",
  },
  {
    name: "프론트엔드",
    lec: "frontEnd",
  },
  {
    name: "백엔드",
    lec: "backEnd",
  },
  {
    name: "앱",
    lec: "app",
  },
];

const Main = () => {
  const cookies = new Cookies();
  let navigate = useNavigate();
  const nowTime = moment().format("YYYY년 M월 D일");
  const [search, setSearch] = useState("");
  const [part, setPart] = useRecoilState(partState);
  const [userInfo, setUserInfo] = useRecoilState(userInfoState);
  const handler = (e) => {
    setPart(e);
  };
  const onKeypress = (e) => {
    if (e.key === "Enter") {
      navigate(`/search`, {
        state: {
          search_value: search,
        },
      });
    }
  };
  useEffect(() => {
    const token = cookies.get("accessToken");
    if (!token) return;
    let parsed = jwt_decode(token);
    setUserInfo(parsed);
  }, []);
  return (
    <Styled.Wrapper>
      <Styled.Container>
        <Styled.SearchInput
          placeholder="원하는 기술스택, 제목으로 프로젝트를 검색해보세요!"
          onChange={(e) => {
            setSearch(e.target.value);
          }}
          onKeyPress={onKeypress}
        />
        <Styled.SelectWrapper>
          <Styled.MainTextBox>
            <Styled.MainText>분야별로</Styled.MainText>
            <Styled.MainText>
              나의 팀원들을 찾아보세요!{" "}
              <Styled.GrayText onClick={() => navigate("/total")}>
                {"글 목록 >"}
              </Styled.GrayText>
              <Styled.MobileGrayText onClick={() => navigate("/total")}>
                {"글 목록 >"}
              </Styled.MobileGrayText>
            </Styled.MainText>
          </Styled.MainTextBox>
          <Styled.CustomSelect value={part} onChange={handler}>
            {options.map((index) => (
              <Styled.StyledOption key={index.name} value={index.lec}>
                {index.name}
              </Styled.StyledOption>
            ))}
          </Styled.CustomSelect>
        </Styled.SelectWrapper>
        <Styled.ContentWrapper>
          <Styled.NoticeWrapper
            onClick={() => {
              navigate("notice");
            }}
          >
            <Styled.NoticeContainer>
              <Styled.MainText id="notice">
                {userInfo ? <span>{userInfo.id}님</span> : null} 오늘은{" "}
                <Styled.PaddingBottom />
                {nowTime} 입니다.
              </Styled.MainText>
              <Styled.NoticeImg src={noticePath} />
            </Styled.NoticeContainer>
            <Styled.NoticeContainer id="bottom">
              <Styled.MainText id="bottom">오늘의 공지사항 →</Styled.MainText>
            </Styled.NoticeContainer>
          </Styled.NoticeWrapper>
          <TeamList />
        </Styled.ContentWrapper>
      </Styled.Container>
    </Styled.Wrapper>
  );
};

export default Main;
