import { React, useState } from "react";
import styled from "@emotion/styled";
import PostingDetail from "./PostingDetail";
import Post from "../api/Post";
import { useQuery } from "react-query";
import Modal from "./Modal";

export const PostContent = ({ row }) => {
  const [modal, setModal] = useState(false);

  return (
    <div onClick={() => setModal(true)}>
      <ContentWrapper onClick={() => setModal(false)}>
        <NoticeTitle>{row.title}</NoticeTitle>
        <NoticeDate>{row.posting_date}</NoticeDate>
      </ContentWrapper>
      <Modal
        isOpen={modal}
        onRequestClose={() => setModal(false)}
        id={row.post_key}
        width={500}
      >
        <PostingDetail setModal={setModal} row={row} />
      </Modal>
    </div>
  );
};

const PostList = () => {
  const { total } = Post();
  const { data } = useQuery("total", total, {
    refetchOnWindowFocus: false,
    cacheTime: 1000 * 60 * 5,
    staleTime: 1000 * 60 * 5,
  });

  return data?.data.map((v, i) => {
    return <PostContent key={v.post_key} row={v} />;
  });
};

export default PostList;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 15px;
  border: solid 1px #e0e0e0;
  width: 100%;
  margin-bottom: 20px;
  &:hover {
    cursor: pointer;
    border-color: #00a0e9;
  }
`;

const NoticeTitle = styled.div`
  margin: 20px;
  font-size: 16px;
  font-weight: 500;
`;

const NoticeDate = styled.div`
  margin: 0px 20px 20px 20px;
  font-size: 12px;
  color: #a3a3a3;
`;
