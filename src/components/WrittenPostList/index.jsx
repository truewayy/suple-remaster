import { React } from "react";
import * as Styled from "./styled";
import PostingDetail from "../PostingDetail";
import { WrittenPostApi } from "../../API/api";
import { useQuery } from "react-query";
import Modal from "../Common/Modal";
import { useRecoilState } from "recoil";
import { modalState } from "../../store/state";

export const PostContent = ({ row }) => {
  const [modalID, setModalID] = useRecoilState(modalState);

  return (
    <div>
      <Styled.ContentWrapper onClick={() => setModalID(row.post_key)}>
        <Styled.NoticeTitle>{row.title}</Styled.NoticeTitle>
        <Styled.NoticeDate>{row.posting_date}</Styled.NoticeDate>
      </Styled.ContentWrapper>
      {modalID === row.post_key ? (
        <Modal id={row.post_key} width={500} height={500}>
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
