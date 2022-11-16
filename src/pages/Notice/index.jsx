import { React } from "react";
import * as Styled from "./styled";
import NoticeList from "../../components/NoticeList";

const Notice = () => {
  return (
    <Styled.Wrapper>
      <Styled.Container>
        <Styled.NoticeText>공지사항</Styled.NoticeText>
        <NoticeList />
      </Styled.Container>
    </Styled.Wrapper>
  );
};

export default Notice;
