import JwtInterceptor from "./apiController";
const rootUrl = "http://suple.cafe24app.com/api";

const Etc = () => {
  const { instance } = JwtInterceptor();
  // 공지사항 API
  const notice = async () => {
    return instance({
      method: "get",
      url: `${rootUrl}/notice`,
    });
  };

  return {
    notice,
  };
};

export default Etc;
