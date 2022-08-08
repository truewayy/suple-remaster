import { React, useState } from "react";
import Modal from "react-modal";
import * as Styled from "./styled";
import NoticeDetail from "../NoticeDetail/index";

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

export const NoticeContent = (props) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  return (
    <div>
      <Styled.ContentWrapper onClick={() => setModalIsOpen(true)}>
        <Styled.NoticeTitle>{props.title}</Styled.NoticeTitle>
        <Styled.NoticeDate>{props.date}</Styled.NoticeDate>
      </Styled.ContentWrapper>
      <Modal
        isOpen={modalIsOpen}
        style={ModalStyle}
        // 오버레이나 esc를 누르면 핸들러 동작
        ariaHideApp={false}
        onRequestClose={() => setModalIsOpen(false)}
      >
        <NoticeDetail
          setModalIsOpen={setModalIsOpen}
          title={props.title}
          date={props.date}
          content={props.content}
        />
      </Modal>
    </div>
  );
};

const NoticeList = (props) => {
  return (
    props.db &&
    props.db.map((v, i) => {
      return (
        <NoticeContent
          title={v.title}
          date={v.date}
          content={v.content}
          key={v.notice_id}
        />
      );
    })
  );
};

export default NoticeList;
