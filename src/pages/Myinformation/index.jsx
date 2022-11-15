import { React, useState } from "react";
import Modal from "react-modal";
import { deletePostApi, myInfoApi } from "../../API/api";
import EditPosting from "../../components/EditPosting";
import PostingDetail from "../../components/PostingDetail";
import * as Styled from "./styled";
import { useNavigate } from "react-router-dom";
import { useMutation, useQuery } from "react-query";
import { queryClient } from "../..";

const 모달스타일 = {
  overlay: {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(0, 0, 0, 0.4)",
    zIndex: 1100,
  },
  content: {
    display: "flex",
    justifyContent: "center",
    background: "#ffffff",
    overflow: "auto",
    maxWidth: "580px",
    minWidth: "350px",
    maxHeight: "700px",
    left: "50%",
    top: "3%",
    transform: "translate(-50%, 3%)",
    WebkitOverflowScrolling: "touch",
    borderRadius: "14px",
    outline: "none",
    zIndex: 1100,
  },
};

const ModalStyle = {
  overlay: {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(0, 0, 0, 0.4)",
    zIndex: 100,
  },
  content: {
    display: "flex",
    justifyContent: "center",
    background: "#ffffff",
    overflow: "auto",
    maxWidth: "500px",
    minWidth: "300px",
    maxHeight: "500px",
    left: "50%",
    top: "20%",
    transform: "translate(-50%, 2%)",
    WebkitOverflowScrolling: "touch",
    borderRadius: "14px",
    outline: "none",
    zIndex: 100,
  },
};

export const MyPosting = (props) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [editModal, setEditModal] = useState(false);
  const deletePost = useMutation(() => deletePostApi(props.post_key), {
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
  let title = props.title;
  let content = props.content;
  if (title.length >= 11) {
    title = props.title.substr(0, 11) + "...";
  }
  if (content.length >= 30) {
    content = props.content.substr(0, 30) + "...";
  }
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
        <Styled.PostingTitle onClick={() => setModalIsOpen(true)}>
          {title}
        </Styled.PostingTitle>
        <Styled.PostingContent>{content}</Styled.PostingContent>
        <Styled.ButtonGroup>
          <Styled.EditButton onClick={() => setEditModal(true)}>
            수정
          </Styled.EditButton>
          <Styled.DeleteButton onClick={onDelete}>삭제</Styled.DeleteButton>
        </Styled.ButtonGroup>
      </Styled.MyPostingWrapper>
      <Modal
        isOpen={modalIsOpen}
        style={ModalStyle}
        // 오버레이나 esc를 누르면 핸들러 동작
        ariaHideApp={false}
        onRequestClose={() => setModalIsOpen(false)}
      >
        <PostingDetail
          setModalIsOpen={setModalIsOpen}
          title={props.title}
          content={props.content}
          stack={props.stack}
          contact={props.contact}
          date={props.date}
        />
      </Modal>
      <Modal
        isOpen={editModal}
        style={모달스타일}
        // 오버레이나 esc를 누르면 핸들러 동작
        ariaHideApp={false}
        onRequestClose={() => setEditModal(false)}
      >
        <EditPosting
          setEditModal={setEditModal}
          title={props.title}
          content={props.content}
          stack={props.stack}
          contact={props.contact}
          date={props.date}
          post_key={props.post_key}
        />
      </Modal>
    </div>
  );
};

export const MyPostingList = (props) => {
  return (
    props.post &&
    props.post.map((v, i) => {
      return (
        <MyPosting
          key={i}
          title={v.title}
          stack={v.stack}
          content={v.content}
          contact={v.contact}
          post_key={v.post_key}
          date={v.date_format}
        />
      );
    })
  );
};

const Myinformation = () => {
  let navigate = useNavigate();
  const { data } = useQuery("myInfo", myInfoApi, {
    refetchOnWindowFocus: false,
    cacheTime: 1000 * 60 * 5,
    staleTime: 1000 * 60 * 5,
  });

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
              <Styled.DetailData>{data?.data.id}</Styled.DetailData>
              <Styled.DetailData id="bottom">
                {data?.data.email}
              </Styled.DetailData>
            </Styled.DetailWrapper>
          </Styled.RowWrapper>
        </Styled.ContentWrapper>
        <Styled.ContentWrapper>
          <Styled.ContentTitle id="posting">내가 쓴 글</Styled.ContentTitle>
          <MyPostingList post={data?.data.post} />
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
