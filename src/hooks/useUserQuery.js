import { User } from "api";
import { queryClient } from "index";
import { useMutation, useQuery } from "react-query";

const useUserQuery = () => {
  const user = User();
  const MyInfo = () => {
    const { data, isLoading } = useQuery("myInfo", user.info, {
      refetchOnWindowFocus: false,
      cacheTime: 1000 * 60 * 5,
      staleTime: 1000 * 60 * 5,
    });
    return { data, isLoading };
  };

  const RemovePost = (key) => {
    const { mutate: remove } = useMutation(() => user.removePost(key), {
      onSuccess: (res) => {
        if (res.data.tf) {
          queryClient.invalidateQueries("main");
          queryClient.refetchQueries("myInfo");
        } else {
          alert("삭제 실패");
        }
      },
      onError: (err) => alert(err.response.data.message),
    });
    return { remove };
  };

  return { MyInfo, RemovePost };
};

export default useUserQuery;
