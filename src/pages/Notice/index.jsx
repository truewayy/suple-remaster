import { React, useState, useEffect } from "react";
import * as Styled from "./styled";
import NoticeList from "../../components/NoticeList";
import { noticeApi } from "../../API/api";

const Notice = () => {
  const [db, setData] = useState();

  useEffect(() => {
    noticeApi(setData);
  }, []);
  return (
    <Styled.Wrapper>
      <Styled.Container>
        <Styled.NoticeText>공지사항</Styled.NoticeText>
        <NoticeList db={db} />
      </Styled.Container>
    </Styled.Wrapper>
  );
};

export default Notice;
