import styled from "@emotion/styled";
import { PostContent } from "../components/TotalPosting";
import { useSearchParams } from "react-router-dom";
import { Wrapper } from "styles/common";
import usePostQuery from "hooks/usePostQuery";
import PostSearch from "components/PostSearch";

const Search = () => {
  const { GetSearch } = usePostQuery();
  const { data: search } = GetSearch();
  const [searchParams] = useSearchParams();
  const searchValue = searchParams.get("q");

  return (
    <Wrapper>
      <Container>
        <SearchWrapper>
          <PostSearch />
        </SearchWrapper>
        <TitleWrapper>
          <NoticeText id="value">{`'${searchValue}'`}</NoticeText>
          <NoticeText>검색결과</NoticeText>
        </TitleWrapper>
        {search?.data.map((v) => {
          return <PostContent key={v.post_key} row={v} />;
        })}
      </Container>
    </Wrapper>
  );
};

export default Search;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 20px;
  width: 900px;
`;

const SearchWrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
`;

const NoticeText = styled.div`
  font-size: 20px;
  font-weight: normal;
  margin: 30px;
  margin-left: 0px;
  &#value {
    font-weight: bold;
  }
`;

const TitleWrapper = styled.div`
  display: flex;
  align-items: flex-start;
`;
