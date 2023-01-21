import JwtInterceptor from "./apiController";

const rootUrl = "http://suple.cafe24app.com/api";

const Post = () => {
  const { instance } = JwtInterceptor();
  // 메인 페이지 리스트 API
  const main = async () => {
    return instance({
      method: "get",
      url: `${rootUrl}/main`,
    });
  };

  // 전체 글 API
  const total = async () => {
    return instance({
      method: "get",
      url: `${rootUrl}/total`,
    });
  };

  // 검색 API
  const search = async (search_value) => {
    return instance({
      method: "get",
      url: `${rootUrl}/search/${search_value}`,
    });
  };

  return {
    main,
    total,
    search,
  };
};

export default Post;
