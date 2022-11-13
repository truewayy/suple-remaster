import { React, useEffect, useState } from "react";
import * as Styled from "./styled";
import Modal from "react-modal";
import { ModalStyle } from "../WrittenPostList/index";
import PostingDetail from "../PostingDetail";

export const Team = (props) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const stack = props.stack.split(", ");
  let title = props.title;
  if (title.length >= 25) {
    title = props.title.substr(0, 25) + "...";
  }
  return (
    <>
      <Styled.Wrapper onClick={() => setModalIsOpen(true)}>
        <Styled.TagWrapper>
          <Styled.TagBox>
            {stack
              .filter((v, i) => !(i % 2))
              .map((v, i) => (
                <Styled.ContentTag key={i}>#{v}</Styled.ContentTag>
              ))}
          </Styled.TagBox>
          <Styled.TagBox id="bottom">
            {stack
              .filter((v, i) => i % 2)
              .map((v, i) => (
                <Styled.ContentTag key={i}>#{v}</Styled.ContentTag>
              ))}
          </Styled.TagBox>
        </Styled.TagWrapper>
        <Styled.ContentTitle>{title}</Styled.ContentTitle>
        <Styled.ContentDate>{props.date}</Styled.ContentDate>
      </Styled.Wrapper>
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
          date={props.date}
          content={props.content}
          contact={props.contact}
          stack={props.stack}
          key={props.key}
        />
      </Modal>
    </>
  );
};

const TeamList = (props) => {
  const [stack, setStack] = useState([
    "React.js",
    "Vue.js",
    "Anguler.js",
    "jQuery",
    "Node.js",
    "Spring",
    "Django",
    "Ruby",
    "RN",
    "Flutter",
    "Kotlin",
    "Swift",
  ]);

  useEffect(() => {
    if (props.part === "frontEnd") {
      setStack(["React.js", "Vue.js", "Anguler.js", "jQuery"]);
    } else if (props.part === "backEnd") {
      setStack(["Node.js", "Spring", "Django", "Ruby"]);
    } else if (props.part === "app") {
      setStack(["RN", "Flutter", "Kotlin", "Swift"]);
    } else {
      setStack([
        "React.js",
        "Vue.js",
        "Anguler.js",
        "JQuery",
        "Node.js",
        "Spring",
        "Django",
        "Ruby",
        "RN",
        "Flutter",
        "Kotlin",
        "Swift",
      ]);
    }
  }, [props.part]);
  return (
    props.db &&
    props.db
      .filter(
        (v, i) =>
          v.stack.split(", ").filter((v, i) => stack.includes(v)).length !== 0
      )
      .map((v, i) => {
        return (
          <Team
            title={v.title}
            content={v.content}
            date={v.date_format}
            key={i}
            stack={v.stack}
            contact={v.contact}
          />
        );
      })
  );
};

export default TeamList;
