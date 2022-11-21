import { React, useState } from "react";
import Modal from "react-modal";
import * as Styled from "./styled";
import PostingDetail from "../PostingDetail";
import { WrittenPostApi } from "../../API/api";
import { useQuery } from "react-query";

export const ModalStyle = {
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

export const PostContent = ({ row }) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  return (
    <div>
      <Styled.ContentWrapper onClick={() => setModalIsOpen(true)}>
        <Styled.NoticeTitle>{row.title}</Styled.NoticeTitle>
        <Styled.NoticeDate>{row.posting_date}</Styled.NoticeDate>
      </Styled.ContentWrapper>
      <Modal
        isOpen={modalIsOpen}
        style={ModalStyle}
        // 오버레이나 esc를 누르면 핸들러 동작
        ariaHideApp={false}
        onRequestClose={() => setModalIsOpen(false)}
      >
        <PostingDetail
          setModalIsOpen={setModalIsOpen}
          title={row.title}
          date={row.posting_date}
          content={row.content}
          contact={row.contact}
          stack={row.stack}
        />
      </Modal>
    </div>
  );
};

const PostList = () => {
  const { data } = useQuery("total", WrittenPostApi, {
    refetchOnWindowFocus: false,
    cacheTime: 1000 * 60 * 5,
    staleTime: 1000 * 60 * 5,
  });

  return data?.data.map((v, i) => {
    return <PostContent key={v.post_key} row={v} />;
  });
};

export default PostList;
