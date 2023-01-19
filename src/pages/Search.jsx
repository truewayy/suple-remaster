import styled from "styled-components";
import { useEffect, useState } from "react";
import { PostContent } from "../components/WrittenPostList";
import { useSearchParams } from "react-router-dom";
import { Wrapper } from "styles/common";
import usePostQuery from "hooks/usePostQuery";
import Navigate from "hooks/navigate";

const Search = () => {
  const { go } = Navigate();
  const { GetSearch } = usePostQuery();
  const { data } = GetSearch();
  const [search, setSearch] = useState("");
  const [searchParams] = useSearchParams();
  const searchValue = searchParams.get("q");

  const onKeypress = (e) => {
    e.key === "Enter" && go(`/search?q=${search}`);
  };

  useEffect(() => {
    setSearch(searchValue);
  }, [searchValue]);

  return (
    <Wrapper>
      <Container>
        <SearchWrapper>
          <SearchInput
            id={searchValue}
            placeholder="원하는 기술스택, 제목으로 프로젝트를 검색해보세요!"
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
            }}
            onKeyPress={onKeypress}
          />
        </SearchWrapper>
        <TitleWrapper>
          <NoticeText id="value">{`'${searchValue}'`}</NoticeText>
          <NoticeText>검색결과</NoticeText>
        </TitleWrapper>
        {data?.data.map((v) => {
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
  width: 700px;
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
const SearchInput = styled.input`
  width: 90%;
  font-size: 16px;
  border: 2px solid #00a0e9;
  border-radius: 15px;
  padding: 10px 20px;
  margin: 10px;
  margin-left: 0px;
  background-repeat: no-repeat;
  background-position: 98%;

  &:focus {
    outline: none;
    border-color: #5d8bf4;
  }
  &:hover {
    border-color: #5d8bf4;
  }
  @media screen and (max-width: 767px) {
    width: 90%;
    transform: scale(0.92);
    ::placeholder {
      font-size: 13px;
    }
  }
`;
