import { React } from "react";
import { deletePostApi, myInfoApi } from "../../API/api";
import EditPosting from "../../components/EditPosting";
import PostingDetail from "../../components/PostingDetail";
import * as Styled from "./styled";
import { useNavigate } from "react-router-dom";
import { useMutation, useQuery } from "react-query";
import { queryClient } from "../..";
import { modalState } from "../../store/state";
import { useRecoilState } from "recoil";
import Modal from "../../components/Common/Modal";

export const MyPosting = ({ row }) => {
  const [modalID, setModalID] = useRecoilState(modalState);
  const deletePost = useMutation(() => deletePostApi(row.post_key), {
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
      <Styled.MyPostingWrapper>
        <Styled.PostingTitle onClick={() => setModalID(row.post_key + "View")}>
          {Substr(row.title, 11)}
        </Styled.PostingTitle>
        <Styled.PostingContent>{Substr(row.content, 30)}</Styled.PostingContent>
        <Styled.ButtonGroup>
          <Styled.EditButton onClick={() => setModalID(row.post_key + "Edit")}>
            수정
          </Styled.EditButton>
          <Styled.DeleteButton onClick={onDelete}>삭제</Styled.DeleteButton>
        </Styled.ButtonGroup>
      </Styled.MyPostingWrapper>

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

const Myinformation = () => {
  let navigate = useNavigate();
  const { data, isLoading } = useQuery("myInfo", myInfoApi, {
    refetchOnWindowFocus: false,
    cacheTime: 1000 * 60 * 5,
    staleTime: 1000 * 60 * 5,
  });
  if (isLoading)
    return <Styled.Wrapper id="loading">로딩 중...</Styled.Wrapper>;
  const user = data.data;

  return (
    <Styled.Wrapper>
      <Styled.Container>
        <Styled.MyInfoText>내 정보</Styled.MyInfoText>
        <Styled.ContentWrapper>
          <Styled.ContentTitle>내 계정</Styled.ContentTitle>
          <Styled.RowWrapper>
            <Styled.DetailWrapper>
              <Styled.ContentDetail>로그인 아이디</Styled.ContentDetail>
              <Styled.ContentDetail id="bottom">
                학교 인증 메일
              </Styled.ContentDetail>
            </Styled.DetailWrapper>
            <Styled.DetailWrapper>
              <Styled.DetailData>{user.id}</Styled.DetailData>
              <Styled.DetailData id="bottom">{user.email}</Styled.DetailData>
            </Styled.DetailWrapper>
          </Styled.RowWrapper>
        </Styled.ContentWrapper>
        <Styled.ContentWrapper>
          <Styled.ContentTitle id="posting">내가 쓴 글</Styled.ContentTitle>
          <MyPostingList post={user.post} />
        </Styled.ContentWrapper>
        <Styled.ContentWrapper>
          <Styled.ContentTitle>부가 기능</Styled.ContentTitle>
          <Styled.RowWrapper>
            <Styled.DetailWrapper>
              <Styled.ContentDetail
                id="extra"
                onClick={() => navigate("changePassword")}
              >
                비밀번호 변경
              </Styled.ContentDetail>
              <Styled.ContentDetail
                id="extra"
                onClick={() => navigate("quit")}
                style={{ marginBottom: "0px" }}
              >
                회원 탈퇴
              </Styled.ContentDetail>
            </Styled.DetailWrapper>
          </Styled.RowWrapper>
        </Styled.ContentWrapper>
      </Styled.Container>
    </Styled.Wrapper>
  );
};
export default Myinformation;
