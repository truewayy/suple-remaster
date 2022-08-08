import { React } from "react";
import * as Styled from "./styled";
import { Cookies } from "react-cookie";

const PostingDetail = (props) => {
  let cookies = new Cookies();
  let cookie = cookies.get("accessToken");

  return (
    <Styled.Wrapper>
      <Styled.TitleBox>
        <Styled.Title>{props.title}</Styled.Title>
        <Styled.CloseButton onClick={() => props.setModalIsOpen(false)}>
          X
        </Styled.CloseButton>
      </Styled.TitleBox>
      <Styled.StackWrapper>
        <Styled.SubTitle>모집 기술</Styled.SubTitle>
        <Styled.WantingStack>{props.stack}</Styled.WantingStack>
      </Styled.StackWrapper>
      <Styled.ContentBox>
        <Styled.Content>
          {props.content.split("\n").map((value, index) => {
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
            <a href={props.contact} rel="noreferrer" target="_blank">
              {props.contact}
            </a>
          )}
        </Styled.WantingStack>
      </Styled.StackWrapper>
      <Styled.Date>작성일자 {props.date}</Styled.Date>
    </Styled.Wrapper>
  );
};
export default PostingDetail;
