import { React } from "react";
import * as Styled from "./styled";
import PostingDetail from "../PostingDetail";
import { WrittenPostApi } from "../../API/api";
import { useQuery } from "react-query";
import Modal from "../Common/Modal";
import { useRecoilState } from "recoil";
import { modalState } from "../../store/state";

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
  return (
    <Styled.ContentWrapper>
      <Styled.NoticeTitle>{row.title}</Styled.NoticeTitle>
      <Styled.NoticeDate>{row.posting_date}</Styled.NoticeDate>
    </Styled.ContentWrapper>
  );
};

const PostList = () => {
  const [modal, onModal] = useRecoilState(modalState);
  const { data } = useQuery("total", WrittenPostApi, {
    refetchOnWindowFocus: false,
    cacheTime: 1000 * 60 * 5,
    staleTime: 1000 * 60 * 5,
  });

  return (
    <>
      {data?.data.map((v) => (
        <div onClick={() => onModal(true)}>
          <Styled.ContentWrapper>
            <Styled.NoticeTitle>{v.title}</Styled.NoticeTitle>
            <Styled.NoticeDate>{v.posting_date}</Styled.NoticeDate>
          </Styled.ContentWrapper>
          {modal ? (
            <Modal width={500} height={500}>
              <PostingDetail row={v} />
            </Modal>
          ) : null}
        </div>
      ))}
    </>
  );
};

export default PostList;
