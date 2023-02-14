import { Post } from "api";
import { useQuery } from "react-query";

const useGetPost = (key) => {
  const { total, main } = Post();
  const fetchList = {
    total: total,
    main: main,
  };
  const { data, isLoading } = useQuery(key, fetchList[key], {
    refetchOnWindowFocus: false,
    cacheTime: 1000 * 60 * 5,
    staleTime: 1000 * 60 * 5,
  });
  return { list: data, isLoading };
};

export default useGetPost;
