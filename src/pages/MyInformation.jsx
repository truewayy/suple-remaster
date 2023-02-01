import styled from "@emotion/styled";
import { React } from "react";
import { useNavigate } from "react-router-dom";
import useUserQuery from "hooks/useUserQuery";
import MyPosting from "components/MyPosting";

const MyInformation = () => {
  const navigate = useNavigate();
  const { MyInfo } = useUserQuery();
  const { data, isLoading } = MyInfo();
  if (isLoading) return <Wrapper id="loading">로딩 중...</Wrapper>;
  const user = data.data;

  return (
    <Wrapper>
      <Container>
        <MyInfoText>내 정보</MyInfoText>
        <ContentWrapper>
          <ContentTitle>내 계정</ContentTitle>
          <RowWrapper>
            <DetailWrapper>
              <ContentDetail>로그인 아이디</ContentDetail>
              <ContentDetail id="bottom">학교 인증 메일</ContentDetail>
            </DetailWrapper>
            <DetailWrapper>
              <DetailData>{user?.id}</DetailData>
              <DetailData id="bottom">{user?.email}</DetailData>
            </DetailWrapper>
          </RowWrapper>
        </ContentWrapper>
        <ContentWrapper>
          <ContentTitle id="posting">내가 쓴 글</ContentTitle>
          {user.post.map((v) => {
            return <MyPosting key={v.post_key} row={v} />;
          })}
        </ContentWrapper>
        <ContentWrapper>
          <ContentTitle>부가 기능</ContentTitle>
          <RowWrapper>
            <DetailWrapper>
              <ContentDetail
                id="extra"
                onClick={() => navigate("changePassword")}
              >
                비밀번호 변경
              </ContentDetail>
              <ContentDetail
                id="extra"
                onClick={() => navigate("quit")}
                style={{ marginBottom: "0px" }}
              >
                회원 탈퇴
              </ContentDetail>
            </DetailWrapper>
          </RowWrapper>
        </ContentWrapper>
      </Container>
    </Wrapper>
  );
};
export default MyInformation;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 80px;
  &#loading {
    height: 60vh;
    align-items: center;
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 20px;
  width: 700px;
`;

const MyInfoText = styled.div`
  font-size: 20px;
  font-weight: normal;
  margin: 30px;
  margin-left: 0px;
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 15px;
  border: solid 1px #e0e0e0;
  width: 100%;
  padding: 25px;
  margin-bottom: 20px;
`;

const ContentTitle = styled.div`
  font-size: 16px;
  font-weight: 500;
  padding-bottom: 30px;
  &#posting {
    padding-bottom: 20px;
  }
`;

const RowWrapper = styled.div`
  display: flex;
`;

const DetailWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const ContentDetail = styled.span`
  font-size: 14px;
  width: 80px;
  margin-bottom: 20px;
  margin-right: 30px;
  &#bottom {
    margin-bottom: 0px;
  }
  &#extra {
    cursor: pointer;
  }
`;

const DetailData = styled.span`
  font-size: 16px;
  font-weight: 100;
  margin-bottom: 20px;
  &#bottom {
    margin-bottom: 0px;
  }
`;
