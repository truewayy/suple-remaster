import React from "react";
import { useRecoilState } from "recoil";
import { modalState } from "../../store/state";
import styled, { keyframes } from "styled-components";
const Modal = ({ id, width, height, children }) => {
  const [, onModal] = useRecoilState(modalState);

  const closeModal = () => {
    onModal(false);
  };
  const onKeyPress = (e) => {
    if (e.key === "Escape") {
      onModal(false);
    }
  };
  return (
    <ModalContainer
      id={id}
      tabIndex={0}
      onClick={closeModal}
      onKeyDown={onKeyPress}
    >
      <ModalBody
        className="modalBody"
        id={id}
        width={width}
        height={height}
        onClick={(e) => e.stopPropagation()}
      >
        {children}
      </ModalBody>
    </ModalContainer>
  );
};

export default Modal;

const modalShow = keyframes`
from {
  opacity: 0;
}
to {
  opacity: 1;
}
`;

const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.4);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 100;
`;

const ModalBody = styled.div`
  display: flex;
  position: absolute;
  width: ${(props) => props.width}px;
  text-align: left;
  background-color: rgb(255, 255, 255);
  border-radius: 15px;
  animation: ${modalShow} 0.2s;
  @media screen and (max-width: 767px) {
    width: 80%;
    &#edit {
      width: 90%;
    }
  }
`;
