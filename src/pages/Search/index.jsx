import { useEffect, useState } from "react";
import { useLocation } from "react-router";
import { SearchApi } from "../../API/api";
import { PostContent } from "../../components/WrittenPostList";
import * as Styled from "./styled";
import { useNavigate } from "react-router-dom";

const Search = () => {
  let navigate = useNavigate();
  const location = useLocation();
  const { search_value } = location.state;
  const [db, setData] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    SearchApi(setData, search_value);
  }, [search_value]);

  const onKeypress = (e) => {
    if (e.key === "Enter") {
      navigate(`/search`, {
        state: {
          search_value: search,
        },
      });
    }
  };

  return (
    <Styled.Wrapper>
      <Styled.Container>
        <Styled.SearchWrapper>
          <Styled.SearchInput
            placeholder="원하는 기술스택, 제목으로 프로젝트를 검색해보세요!"
            defaultValue={search_value}
            onChange={(e) => {
              setSearch(e.target.value);
            }}
            onKeyPress={onKeypress}
          />
        </Styled.SearchWrapper>
        <Styled.TitleWrapper>
          <Styled.NoticeText id="value">{`'${search_value}'`}</Styled.NoticeText>
          <Styled.NoticeText>검색결과</Styled.NoticeText>
        </Styled.TitleWrapper>
        {db.map((v, i) => {
          return (
            <PostContent
              key={v.post_key}
              title={v.title}
              content={v.content}
              stack={v.stack}
              contact={v.contact}
              date={v.posting_date}
            />
          );
        })}
      </Styled.Container>
    </Styled.Wrapper>
  );
};

export default Search;
