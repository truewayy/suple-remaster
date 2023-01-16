import styled from "styled-components";
import { React } from "react";
import User from "../api/User";
import EditPosting from "../components/EditPosting";
import PostingDetail from "../components/PostingDetail";
import { useNavigate } from "react-router-dom";
import { useMutation, useQuery } from "react-query";
import { queryClient } from "..";
import { modalState } from "../store/state";
import { useRecoilState } from "recoil";
import Modal from "../components/Modal";

export const MyPosting = ({ row }) => {
  const { removePost } = User();
  const [modalID, setModalID] = useRecoilState(modalState);
  const deletePost = useMutation(() => removePost(row.post_key), {
    onSuccess: (res) => {
      if (res.data.tf === true) {
        queryClient.invalidateQueries("main");
        queryClient.refetchQueries("myInfo");
      } else {
        alert("삭제 실패");
      }
    },
    onError: (err) => alert(err.response.data.message),
  });

  const Substr = (str, size) => {
    if (str.length >= size) {
      str = str.substr(0, size) + "...";
    }
    return str;
  };

  const onDelete = () => {
    if (window.confirm("게시글을 삭제하시겠습니까?") === true) {
      deletePost.mutate();
    } else {
      return;
    }
  };

  return (
    <div>
      <MyPostingWrapper>
        <PostingTitle onClick={() => setModalID(row.post_key + "View")}>
          {Substr(row.title, 11)}
        </PostingTitle>
        <PostingContent>{Substr(row.content, 30)}</PostingContent>
        <ButtonGroup>
          <EditButton onClick={() => setModalID(row.post_key + "Edit")}>
            수정
          </EditButton>
          <DeleteButton onClick={onDelete}>삭제</DeleteButton>
        </ButtonGroup>
      </MyPostingWrapper>

      {modalID === row.post_key + "View" ? (
        <Modal width={500}>
          <PostingDetail row={row} />
        </Modal>
      ) : null}
      {modalID === row.post_key + "Edit" ? (
        <Modal id="edit" width={600}>
          <EditPosting row={row} />
        </Modal>
      ) : null}
    </div>
  );
};

export const MyPostingList = ({ post }) => {
  return post.map((v) => {
    return <MyPosting key={Math.random()} row={v} />;
  });
};

const MyInformation = () => {
  const { info } = User();
  let navigate = useNavigate();
  const { data, isLoading } = useQuery("myInfo", info, {
    refetchOnWindowFocus: false,
    cacheTime: 1000 * 60 * 5,
    staleTime: 1000 * 60 * 5,
  });
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
              <DetailData>{user.id}</DetailData>
              <DetailData id="bottom">{user.email}</DetailData>
            </DetailWrapper>
          </RowWrapper>
        </ContentWrapper>
        <ContentWrapper>
          <ContentTitle id="posting">내가 쓴 글</ContentTitle>
          <MyPostingList post={user.post} />
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

const MyPostingWrapper = styled.div`
  display: flex;
  border: 1px solid #e0e0e0;
  padding: 15px;
  border-radius: 15px;
  margin-top: 10px;
  &:hover {
    border-color: #00a0e9;
  }
`;

const PostingTitle = styled.div`
  font-size: 14px;
  font-weight: 500;
  width: 160px;
  &:hover {
    cursor: pointer;
  }
`;

const PostingContent = styled.div`
  font-size: 14px;
  font-weight: 200;
  @media screen and (max-width: 767px) {
    display: none;
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  align-items: flex-start;
  margin-left: auto;
`;

const EditButton = styled.div`
  font-size: 12px;
  cursor: pointer;
  color: #a3a3a3;
  &:hover {
    color: #222;
  }
`;

const DeleteButton = styled(EditButton)`
  padding-left: 10px;
`;
