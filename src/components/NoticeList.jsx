import styled from "@emotion/styled";
import { React, useState } from "react";
import NoticeDetail from "./NoticeDetail";
import { useQuery } from "react-query";
import Etc from "../api/Etc";
import Modal from "./Modal";

export const NoticeContent = ({ notice }) => {
  const [modal, setModal] = useState(false);

  return (
    <div onClick={() => setModal(true)}>
      <ContentWrapper>
        <NoticeTitle>{notice.title}</NoticeTitle>
        <NoticeDate>{notice.date}</NoticeDate>
      </ContentWrapper>
      <Modal
        isOpen={modal}
        onRequestClose={() => setModal(false)}
        width={500}
        height={500}
      >
        <NoticeDetail setModal={setModal} notice={notice} />
      </Modal>
    </div>
  );
};

const NoticeList = () => {
  const { notice } = Etc();
  const { data } = useQuery("notice", notice, {
    refetchOnWindowFocus: false,
    cacheTime: 1000 * 60 * 20,
    staleTime: 1000 * 60 * 20,
  });
  return data?.data.map((v, i) => {
    return <NoticeContent notice={v} key={v.notice_id} />;
  });
};

export default NoticeList;

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
