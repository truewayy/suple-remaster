import { React } from "react";
import { useSetRecoilState } from "recoil";
import { modalState } from "../../store/state";
import * as Styled from "./styled";

const NoticeDetail = ({ notice }) => {
  const setModalID = useSetRecoilState(modalState);
  return (
    <Styled.Wrapper>
      <Styled.TitleBox>
        <Styled.Title>{notice.title}</Styled.Title>
        <Styled.CloseButton onClick={() => setModalID("")}>
          X
        </Styled.CloseButton>
      </Styled.TitleBox>
      <Styled.ContentBox>
        <Styled.Content>{notice.content}</Styled.Content>
      </Styled.ContentBox>
      <Styled.Date>작성일자 {notice.date}</Styled.Date>
    </Styled.Wrapper>
  );
};
export default NoticeDetail;
