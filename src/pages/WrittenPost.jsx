import styled from "styled-components";
import { React } from "react";
import PostList from "../components/WrittenPostList";

const WrittenPost = () => {
  return (
    <Wrapper>
      <Container>
        <NoticeText>전체 글</NoticeText>
        <PostList />
      </Container>
    </Wrapper>
  );
};

export default WrittenPost;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const NoticeText = styled.div`
  font-size: 20px;
  font-weight: normal;
  margin: 30px;
  margin-left: 0px;
  width: 100%;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 20px;
  width: 700px;
`;
