import { React } from "react";
import * as Styled from "./styled";
import NoticeDetail from "../NoticeDetail/index";
import { useQuery } from "react-query";
import { noticeApi } from "../../API/api";
import { useRecoilState } from "recoil";
import { modalState } from "../../store/state";
import Modal from "../Common/Modal";

export const NoticeContent = ({ notice }) => {
  const [modalID, setModalID] = useRecoilState(modalState);

  return (
    <div>
      <Styled.ContentWrapper onClick={() => setModalID(notice.notice_id)}>
        <Styled.NoticeTitle>{notice.title}</Styled.NoticeTitle>
        <Styled.NoticeDate>{notice.date}</Styled.NoticeDate>
      </Styled.ContentWrapper>
      {modalID === notice.notice_id ? (
        <Modal id={notice.notice_id} width={500} height={500}>
          <NoticeDetail notice={notice} />
        </Modal>
      ) : null}
    </div>
  );
};

const NoticeList = () => {
  const { data } = useQuery("notice", noticeApi, {
    refetchOnWindowFocus: false,
    cacheTime: 1000 * 60 * 20,
    staleTime: 1000 * 60 * 20,
  });
  return data?.data.map((v, i) => {
    console.log(v);
    return <NoticeContent notice={v} key={v.notice_id} />;
  });
};

export default NoticeList;
