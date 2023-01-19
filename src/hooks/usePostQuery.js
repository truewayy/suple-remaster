import { Post } from "api";
import { useQuery } from "react-query";
import { useSearchParams } from "react-router-dom";

const usePostQuery = () => {
  const post = Post();
  const [searchParams] = useSearchParams();
  const searchValue = searchParams.get("q");
  const GetSearch = () => {
    const { data } = useQuery(
      ["search", searchValue],
      () => post.search(searchValue),
      {
        enabled: !!searchValue,
        cacheTime: 1000 * 60 * 5,
        staleTime: 1000 * 60 * 5,
      }
    );
    return { data };
  };
  return { GetSearch };
};

export default usePostQuery;
