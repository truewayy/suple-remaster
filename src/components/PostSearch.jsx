import styled from "@emotion/styled";
import useSearch from "hooks/useSearch";

const PostSearch = () => {
  const [input, onKeyPress] = useSearch();

  return (
    <SearchInput
      placeholder="원하는 기술스택, 제목으로 프로젝트를 검색해보세요!"
      ref={input}
      onKeyDown={onKeyPress}
    />
  );
};
export default PostSearch;

const SearchInput = styled.input`
  width: 70%;
  font-size: 16px;
  border: 2px solid #00a0e9;
  border-radius: 15px;
  padding: 10px 20px;
  margin: 10px 0px;
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
