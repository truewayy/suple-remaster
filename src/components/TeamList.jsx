import { React, useEffect, useState } from "react";
import styled from "@emotion/styled";
import PostingDetail from "./PostingDetail";
import { useQuery } from "react-query";
import Post from "../api/Post";
import { useRecoilValue } from "recoil";
import { partState } from "../store/state";
import Modal from "./Modal";
import { subStr } from "utils/subStr";
import { stacks } from "store/options";

export const Team = ({ row }) => {
  const [modal, setModal] = useState(false);
  const stack = row.stack.split(", ");
  const OddStack = stack.filter((v, i) => !(i % 2) && v);
  const EvenStack = stack.filter((v, i) => i % 2 && v);
  const title = subStr(row.title, 25);

  return (
    <>
      <Wrapper onClick={() => setModal(true)}>
        <TagWrapper>
          <TagBox>
            {OddStack.map((v, i) => (
              <ContentTag key={i}>#{v}</ContentTag>
            ))}
          </TagBox>
          <TagBox id="bottom">
            {EvenStack.map((v, i) => (
              <ContentTag key={i}>#{v}</ContentTag>
            ))}
          </TagBox>
        </TagWrapper>
        <ContentTitle>{title}</ContentTitle>
        <ContentDate>{row.date_format}</ContentDate>
      </Wrapper>
      <Modal
        isOpen={modal}
        onRequestClose={() => setModal(false)}
        width={500}
        height={500}
      >
        <PostingDetail setModal={setModal} row={row} />
      </Modal>
    </>
  );
};

const TeamList = () => {
  const { main } = Post();
  const part = useRecoilValue(partState);
  const { data } = useQuery("main", main, {
    cacheTime: 1000 * 60 * 5,
    staleTime: 1000 * 60 * 5,
  });
  const [stack, setStack] = useState(stacks.all);
  useEffect(() => {
    setStack(stacks[part]);
  }, [part]);

  return data?.data
    .filter((v) => v.stack.split(", ").filter((v) => stack.includes(v)).length)
    .map((v) => <Team row={v} key={v.post_key} />);
};

export default TeamList;

const Wrapper = styled.div`
  border: 1px solid white;
  border-radius: 15px;
  background-color: #00a0e9;
  box-shadow: 0px 0px 20px 1px #e5e5e5;
  padding: 20px;
  @media screen and (max-width: 767px) {
    width: 100%;
    font-size: 0.8rem;
  }

  &:hover {
    cursor: pointer;
    border: 1px solid rgba(102, 186, 255, 0.4);
    box-shadow: 0px 0px 20px 3px rgba(102, 186, 255, 0.4);
  }
`;

const TagWrapper = styled.div`
  height: 70px;
`;

const TagBox = styled.div`
  display: flex;
  justify-content: flex-start;
  margin-bottom: 10px;
  &#bottom {
    margin-bottom: 20px;
  }
`;

const ContentTag = styled.div`
  color: #00a0e9;
  text-align: center;
  font-size: 11px;
  font-weight: 500;
  padding: 3px 5px;
  background-color: #fff;
  border-radius: 10px;
  margin-right: 5px;
`;

const ContentTitle = styled.div`
  color: #fff;
  font-weight: 500;
  letter-spacing: 1px;
  height: 65px;
  @media screen and (max-width: 767px) {
    height: 30px;
  }
`;

const ContentDate = styled.div`
  font-size: 11px;
  font-weight: normal;
  text-align: right;
  color: #fff;
`;
