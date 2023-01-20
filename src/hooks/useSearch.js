import { useRef } from "react";
import Navigate from "./navigate";

const useSearch = () => {
  const input = useRef(null);
  const { go } = Navigate();

  const onKeypress = (e) => {
    if (e.key !== "Enter") return;
    if (input.current.value.length < 2) {
      alert("두 글자 이상 입력해주세요");
      return;
    }

    go(`/search?q=${input.current.value}`);
  };

  return [input, onKeypress];
};

export default useSearch;
