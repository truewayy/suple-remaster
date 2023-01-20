import styled from "@emotion/styled";
import { React, useState } from "react";
import EditPosting from "../components/EditPosting";
import PostingDetail from "../components/PostingDetail";
import Modal from "../components/Modal";
import { subStr } from "utils/subStr";
import Navigate from "hooks/navigate";
import useUserQuery from "hooks/useUserQuery";

const MyPosting = ({ row }) => {
  const { RemovePost } = useUserQuery();
  const { remove } = RemovePost(row.post_key);
  const [viewModal, setViewModal] = useState(false);
  const [editModal, setEditModal] = useState(false);
  const onDelete = () => {
    window.confirm("게시글을 삭제하시겠습니까?") && remove();
  };

  return (
    <div>
      <MyPostingWrapper>
        <PostingTitle onClick={() => setViewModal(true)}>
          {subStr(row.title, 11)}
        </PostingTitle>
        <PostingContent>{subStr(row.content, 30)}</PostingContent>
        <ButtonGroup>
          <EditButton onClick={() => setEditModal(true)}>수정</EditButton>
          <DeleteButton onClick={onDelete}>삭제</DeleteButton>
        </ButtonGroup>
      </MyPostingWrapper>

      <Modal
        isOpen={viewModal}
        onRequestClose={() => setViewModal(false)}
        width={500}
      >
        <PostingDetail setModal={setViewModal} row={row} />
      </Modal>
      <Modal
        isOpen={editModal}
        onRequestClose={() => setEditModal(false)}
        id="edit"
        width={600}
      >
        <EditPosting setModal={setViewModal} row={row} />
      </Modal>
    </div>
  );
};

const MyPostingList = ({ post }) => {
  return post?.map((v) => {
    return <MyPosting key={v.post_key} row={v} />;
  });
};

const MyInformation = () => {
  const { go } = Navigate();
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
          <MyPostingList post={user?.post} />
        </ContentWrapper>
        <ContentWrapper>
          <ContentTitle>부가 기능</ContentTitle>
          <RowWrapper>
            <DetailWrapper>
              <ContentDetail id="extra" onClick={() => go("changePassword")}>
                비밀번호 변경
              </ContentDetail>
              <ContentDetail
                id="extra"
                onClick={() => go("quit")}
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
