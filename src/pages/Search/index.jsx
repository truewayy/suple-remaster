import { useEffect, useState } from "react";
import { SearchApi } from "../../API/api";
import { PostContent } from "../../components/WrittenPostList";
import * as Styled from "./styled";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useQuery } from "react-query";

const Search = () => {
  let navigate = useNavigate();
  const [search, setSearch] = useState("");
  const [searchParams] = useSearchParams();
  const searchValue = searchParams.get("q");
  const { data } = useQuery(
    ["search", searchValue],
    () => SearchApi(searchValue),
    {
      enabled: !!searchValue,
      cacheTime: 1000 * 60 * 5,
      staleTime: 1000 * 60 * 5,
    }
  );

  const onKeypress = (e) => {
    if (e.key === "Enter") {
      navigate(`/search?q=${search}`);
    }
  };

  useEffect(() => {
    setSearch(searchValue);
  }, [searchValue]);

  return (
    <Styled.Wrapper>
      <Styled.Container>
        <Styled.SearchWrapper>
          <Styled.SearchInput
            id={searchValue}
            placeholder="원하는 기술스택, 제목으로 프로젝트를 검색해보세요!"
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
            }}
            onKeyPress={onKeypress}
          />
        </Styled.SearchWrapper>
        <Styled.TitleWrapper>
          <Styled.NoticeText id="value">{`'${searchValue}'`}</Styled.NoticeText>
          <Styled.NoticeText>검색결과</Styled.NoticeText>
        </Styled.TitleWrapper>
        {data?.data.map((v, i) => {
          return <PostContent key={v.post_key} row={v} />;
        })}
      </Styled.Container>
    </Styled.Wrapper>
  );
};

export default Search;
