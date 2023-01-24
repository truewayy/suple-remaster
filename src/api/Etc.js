import { API_URLS } from "constants/apiUrl";
import JwtInterceptor from "./apiController";

const Etc = () => {
  const { instance } = JwtInterceptor();
  // 공지사항 API
  const notice = async () => {
    return instance.get(API_URLS.ETC.NOTICE);
  };

  return {
    notice,
  };
};

export default Etc;
