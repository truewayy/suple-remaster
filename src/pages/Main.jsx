import React, { useEffect, useState } from "react";
import styled from "styled-components";
import TeamList from "../components/TeamList";
import moment from "moment";
import "moment/locale/ko";
import { useRecoilState } from "recoil";
import { partState, userInfoState } from "../store/state";
import jwt_decode from "jwt-decode";
import { getToken } from "../api/apiController";
import { Wrapper } from "styles/common";
import Navigate from "hooks/navigate";
import { options } from "store/options";
import OptionSelect from "components/OptionSelect";
// designed by soo kyung

const Main = () => {
  const { go } = Navigate();
  const nowTime = moment().format("YYYY년 M월 D일");
  const [search, setSearch] = useState("");
  const [select, setSelect] = useState(false);
  const [part, setPart] = useRecoilState(partState);
  const [userInfo, setUserInfo] = useRecoilState(userInfoState);
  const onKeypress = (e) => {
    e.key === "Enter" && go(`/search?q=${search}`);
  };

  useEffect(() => {
    const token = getToken("accessToken");
    if (token === "undefined" || !token) return;
    else {
      let parsed = jwt_decode(token);
      setUserInfo(parsed);
    }
  }, [setUserInfo]);
  return (
    <Wrapper>
      <Container>
        <SearchInput
          placeholder="원하는 기술스택, 제목으로 프로젝트를 검색해보세요!"
          onChange={(e) => {
            setSearch(e.target.value);
          }}
          onKeyPress={onKeypress}
        />
        <SelectWrapper>
          <MainTextBox>
            <MainText>분야별로</MainText>
            <MainText>
              나의 팀원들을 찾아보세요!{" "}
              <GrayText onClick={() => go("/total")}>{"글 목록 >"}</GrayText>
              <MobileGrayText onClick={() => go("/total")}>
                {"글 목록 >"}
              </MobileGrayText>
            </MainText>
          </MainTextBox>
          <OptionSelect
            state={select}
            controller={setSelect}
            list={options}
            part={part}
            setPart={setPart}
            itemTitle="name"
          />
        </SelectWrapper>
        <ContentWrapper>
          <NoticeWrapper
            onClick={() => {
              go("notice");
            }}
          >
            <NoticeContainer>
              <MainText id="notice">
                {userInfo ? <span>{userInfo.id}님</span> : null} 오늘은{" "}
                <PaddingBottom />
                {nowTime} 입니다.
              </MainText>
              <NoticeImg src="/notice.png" />
            </NoticeContainer>
            <NoticeContainer id="bottom">
              <MainText id="bottom">오늘의 공지사항 →</MainText>
            </NoticeContainer>
          </NoticeWrapper>
          <TeamList />
        </ContentWrapper>
      </Container>
    </Wrapper>
  );
};

export default Main;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 900px;
  margin: 20px;
`;

const SearchInput = styled.input`
  width: 70%;
  font-size: 16px;
  border: 2px solid #00a0e9;
  border-radius: 15px;
  padding: 10px 20px;
  margin: 10px;
  background-repeat: no-repeat;
  background-position: 98%;

  &:focus {
    outline: none;
    border-color: #5d8bf4;
  }
  &:hover {
    border-color: #5d8bf4;
  }
  @media screen and (max-width: 767px) {
    width: 90%;
    transform: scale(0.92);
    ::placeholder {
      font-size: 13px;
    }
  }
`;

const SelectWrapper = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
  margin-top: 25px;
  justify-content: space-between;
`;

const MainTextBox = styled.div`
  display: flex;
  flex-direction: column;
`;

const MainText = styled.div`
  font-weight: 500;
  font-size: 22px;
  padding-bottom: 5px;
  letter-spacing: 1px;
  &#notice {
    padding-bottom: 30px;
  }
  &#bottom {
    padding-bottom: 0px;
    font-size: 15px;
    font-weight: bold;
  }
  @media screen and (max-width: 767px) {
    font-size: 15px;
    font-weight: 600;
  }
`;

const GrayText = styled.span`
  font-size: 14px;
  text-decoration: underline;
  color: #a3a3a3;
  cursor: pointer;
  @media screen and (max-width: 767px) {
    display: none;
  }
`;

const MobileGrayText = styled.div`
  display: none;
  @media screen and (max-width: 767px) {
    display: block;
    font-size: 14px;
    text-decoration: underline;
    color: #a3a3a3;
    cursor: pointer;
    margin-top: 15px;
  }
`;

const PaddingBottom = styled.div`
  padding-bottom: 5px;
`;

const ContentWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  width: 100%;
  margin-top: 35px;
  row-gap: 30px;
  column-gap: 50px;
  @media screen and (max-width: 1023px) {
    grid-template-columns: 1fr 1fr 1fr;
  }
  @media screen and (max-width: 767px) {
    grid-template-columns: 1fr;
  }
`;

const NoticeWrapper = styled.div`
  display: flex;
  grid-column-start: 1;
  grid-column-end: 3;
  flex-direction: column;
  border: 1px solid white;
  border-radius: 15px;
  background-color: #fff;
  box-shadow: 0px 0px 20px 1px #e5e5e5;
  padding: 40px;
  &:hover {
    cursor: pointer;
    border: 1px solid rgba(102, 186, 255, 0.4);
    box-shadow: 0px 0px 20px 1px rgba(102, 186, 255, 0.4);
  }
  @media screen and (max-width: 1023px) {
    grid-column-end: 4;
  }
  @media screen and (max-width: 767px) {
    grid-column-end: 1;
  }
`;

const NoticeContainer = styled.div`
  display: flex;
  justify-content: space-between;
  &#bottom {
    justify-content: flex-end;
  }
`;

const NoticeImg = styled.img`
  width: 70px; 
  height: 70px; 
  transform: rotate(10deg);
  @media screen and (max-width: 767px) {
    width: 60px;
    height: 60px; 
`;
