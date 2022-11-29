import { React, useEffect, useState } from "react";
import * as Styled from "./styled";
import PostingDetail from "../PostingDetail";
import { useQuery } from "react-query";
import { mainApi } from "../../API/api";
import { useRecoilState, useRecoilValue } from "recoil";
import { modalState, partState } from "../../store/state";
import Modal from "../Common/Modal";
export const Team = ({ row }) => {
  const [modalID, setModalID] = useRecoilState(modalState);
  const stack = row.stack.split(", ");
  let title = row.title;
  if (title.length >= 25) {
    title = row.title.substr(0, 25) + "...";
  }
  return (
    <>
      <Styled.Wrapper onClick={() => setModalID(row.post_key)}>
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
        <Styled.ContentDate>{row.date}</Styled.ContentDate>
      </Styled.Wrapper>
      {modalID === row.post_key ? (
        <Modal id={row.post_key} width={500} height={500}>
          <PostingDetail row={row} />
        </Modal>
      ) : null}
    </>
  );
};

const TeamList = () => {
  const part = useRecoilValue(partState);
  const { data } = useQuery("main", mainApi, {
    cacheTime: 1000 * 60 * 5,
    staleTime: 1000 * 60 * 5,
  });
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
    switch (part) {
      case "all":
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
        break;
      case "frontEnd":
        setStack(["React.js", "Vue.js", "Anguler.js", "jQuery"]);
        break;
      case "backEnd":
        setStack(["Node.js", "Spring", "Django", "Ruby"]);
        break;
      case "app":
        setStack(["RN", "Flutter", "Kotlin", "Swift"]);
        break;
    }
  }, [part]);
  return data?.data
    .filter(
      (v) =>
        v.stack.split(", ").filter((v, i) => stack.includes(v)).length !== 0
    )
    .map((v, i) => {
      return <Team row={v} key={v.post_key} />;
    });
};

export default TeamList;
