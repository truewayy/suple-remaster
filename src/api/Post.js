import { API_URLS } from "constants/apiUrl";
import JwtInterceptor from "./apiController";

const Post = () => {
  const { instance } = JwtInterceptor();
  // 메인 페이지 리스트 API
  const main = async () => {
    return instance.get(API_URLS.POST.MAIN);
  };

  // 전체 글 API
  const total = async () => {
    return instance.get(API_URLS.POST.TOTAL);
  };

  // 검색 API
  const search = async (search_value) => {
    return instance.get(API_URLS.POST.SEARCH(search_value));
  };

  return {
    main,
    total,
    search,
  };
};

export default Post;
