import styled from "@emotion/styled";
import { React } from "react";
import { Cookies } from "react-cookie";
const PostingDetail = ({ row, setModal }) => {
  let cookies = new Cookies();
  let cookie = cookies.get("accessToken");
  return (
    <Wrapper>
      <TitleBox>
        <Title>{row.title}</Title>
        <CloseButton onClick={() => setModal(false)}>X</CloseButton>
      </TitleBox>
      <StackWrapper>
        <SubTitle>모집 기술</SubTitle>
        <WantingStack>{row.stack}</WantingStack>
      </StackWrapper>
      <ContentBox>
        <Content>
          {row.content.split("\n").map((value, index) => (
            <div key={index}>
              {value}
              <br />
            </div>
          ))}
        </Content>
      </ContentBox>
      <StackWrapper>
        <SubTitle>오픈채팅 URL</SubTitle>
        <WantingStack id="url">
          {!cookie ? (
            "로그인 후 이용해주세요"
          ) : (
            <a href={row.contact} rel="noreferrer" target="_blank">
              {row.contact}
            </a>
          )}
        </WantingStack>
      </StackWrapper>
      <Date>작성일자 {row.date_format}</Date>
    </Wrapper>
  );
};
export default PostingDetail;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 30px;
  width: 100%;
  @media screen and (max-width: 767px) {
    padding: 20px;
  }
`;

const Title = styled.div`
  font-size: 25px;
  font-weight: bold;
  margin-bottom: 30px;
  @media screen and (max-width: 767px) {
    font-size: 17px;
  }
`;

const TitleBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const ContentBox = styled.div`
  display: flex;
  border: 1px solid rgb(224, 224, 224);
  border-radius: 15px;
  padding: 10px;
  margin-bottom: 30px;
  height: 200px;
  overflow: auto;
`;

const Content = styled.div`
  font-weight: normal;
  font-size: 15px;
  word-break: break-all;
  text-align: left;
  @media screen and (max-width: 767px) {
    font-size: 12px;
  }
`;

const Date = styled.div`
  font-size: 13px;
  font-weight: 300;
  @media screen and (max-width: 767px) {
    font-size: 11px;
  }
`;

const CloseButton = styled.div`
  font-weight: bold;
  font-size: 25px;
  &:hover {
    cursor: pointer;
    color: #00a0e9;
  }
`;

const StackWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 15px;
`;

const WantingStack = styled.div`
  font-size: 15px;
  font-weight: 500;
  border: 1px solid rgb(224, 224, 224);
  border-radius: 15px;
  padding: 10px;
  width: 70%;
  @media screen and (max-width: 767px) {
    font-size: 12px;
  }
  &#url {
    font-size: 13px;
    overflow-x: scroll;
  }
`;

const SubTitle = styled.div`
  font-size: 15px;
  font-weight: 500;
  @media screen and (max-width: 767px) {
    font-size: 12px;
  }
`;
