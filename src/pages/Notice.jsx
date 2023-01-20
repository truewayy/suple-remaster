import styled from "@emotion/styled";
import { React } from "react";
import NoticeList from "../components/NoticeList";
import { Wrapper } from "styles/common";

const Notice = () => {
  return (
    <Wrapper>
      <Container>
        <NoticeText>공지사항</NoticeText>
        <NoticeList />
      </Container>
    </Wrapper>
  );
};

export default Notice;

const NoticeText = styled.div`
  font-size: 20px;
  font-weight: normal;
  margin: 30px;
  margin-left: 0px;
  width: 100%;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 20px;
  width: 700px;
`;
