import { React } from "react";
import * as Styled from "./styled";
import { Cookies } from "react-cookie";
import { useSetRecoilState } from "recoil";
import { modalState } from "../../store/state";
const PostingDetail = ({ row }) => {
  let cookies = new Cookies();
  let cookie = cookies.get("accessToken");
  const onModal = useSetRecoilState(modalState);
  return (
    <Styled.Wrapper>
      <Styled.TitleBox>
        <Styled.Title>{row.title}</Styled.Title>
        <Styled.CloseButton onClick={() => onModal(false)}>
          X
        </Styled.CloseButton>
      </Styled.TitleBox>
      <Styled.StackWrapper>
        <Styled.SubTitle>모집 기술</Styled.SubTitle>
        <Styled.WantingStack>{row.stack}</Styled.WantingStack>
      </Styled.StackWrapper>
      <Styled.ContentBox>
        <Styled.Content>
          {row.content.split("\n").map((value, index) => {
            return (
              <div key={index}>
                {value}
                <br />
              </div>
            );
          })}
        </Styled.Content>
      </Styled.ContentBox>
      <Styled.StackWrapper>
        <Styled.SubTitle>오픈채팅 URL</Styled.SubTitle>
        <Styled.WantingStack id="url">
          {!cookie ? (
            "로그인 후 이용해주세요"
          ) : (
            <a href={row.contact} rel="noreferrer" target="_blank">
              {row.contact}
            </a>
          )}
        </Styled.WantingStack>
      </Styled.StackWrapper>
      <Styled.Date>작성일자 {row.date}</Styled.Date>
    </Styled.Wrapper>
  );
};
export default PostingDetail;
