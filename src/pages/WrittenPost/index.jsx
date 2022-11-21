import { React } from "react";
import PostList from "../../components/WrittenPostList";
import * as Styled from "./styled";

const WrittenPost = () => {
  return (
    <Styled.Wrapper>
      <Styled.Container>
        <Styled.NoticeText>전체 글</Styled.NoticeText>
        <PostList />
      </Styled.Container>
    </Styled.Wrapper>
  );
};

export default WrittenPost;
