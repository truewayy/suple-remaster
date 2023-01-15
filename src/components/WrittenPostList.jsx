import { React } from "react";
import styled from "styled-components";
import PostingDetail from "./PostingDetail";
import { WrittenPostApi } from "../API/api";
import { useQuery } from "react-query";
import Modal from "./Modal";
import { useRecoilState } from "recoil";
import { modalState } from "../store/state";

export const PostContent = ({ row }) => {
  const [modalID, setModalID] = useRecoilState(modalState);

  return (
    <div>
      <ContentWrapper onClick={() => setModalID(row.post_key)}>
        <NoticeTitle>{row.title}</NoticeTitle>
        <NoticeDate>{row.posting_date}</NoticeDate>
      </ContentWrapper>
      {modalID === row.post_key ? (
        <Modal id={row.post_key} width={500}>
          <PostingDetail row={row} />
        </Modal>
      ) : null}
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
