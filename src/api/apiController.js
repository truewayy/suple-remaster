import axios from "axios";
import jwtDecode from "jwt-decode";
import { getCookie, removeCookie, setCookie } from "utils/Cookie";

// 토큰 리프레시 API
export const refresh = async (id) => {
  const token = getCookie("refreshToken");
  return axios({
    method: "get",
    url: `http://suple.cafe24app.com/api/refresh/${id}`,
    headers: {
      Authorization: token,
    },
  });
};

const JwtInterceptor = () => {
  const instance = axios.create({
    timeout: 2000,
    baseURL: "http://suple.cafe24app.com/api",
  });

  const redirecting = () => {
    removeCookie("accessToken");
    removeCookie("refreshToken");
    window.location.href = "/login";
  };

  const isAccessTokenValid = () => {
    const token = getCookie("accessToken");
    if (!token || token === "undefined") return false;
    const tokenInfo = jwtDecode(token);
    if (tokenInfo.exp <= Date.now() / 1000) return false;
    return true;
  };

  const refreshingToken = async () => {
    try {
      const accessToken = getCookie("accessToken");
      const refreshToken = getCookie("refreshToken");
      if (!accessToken || !refreshToken) {
        return false;
      }
      const payload = jwtDecode(accessToken);
      const id = payload.id;
      const res = await refresh(id);
      if (res.status !== 200) {
        throw new Error(`Response status is ${res.status}`);
      } else {
        setCookie("accessToken", res.data.accessToken);
      }
    } catch (error) {
      console.error("refreshToken ERROR", error);
      return false;
    }
    return true;
  };

  instance.interceptors.request.use(async (request) => {
    if (
      request.url.includes("/login") ||
      request.url.includes("/signup") ||
      request.url.includes("/refresh") ||
      request.url.includes("/findPw") ||
      request.url.includes("/findIdx") ||
      request.url.includes("/main") ||
      request.url.includes("/total") ||
      request.url.includes("/search") ||
      request.url.includes("/notice")
    ) {
    } else if (!isAccessTokenValid()) {
      const accessToken = getCookie("accessToken");
      const refreshToken = getCookie("refreshToken");
      if (!accessToken || !refreshToken) {
        redirecting();
        alert("로그인 후 이용해주세요.");
        return Promise.reject(new Error("Token expired"));
      }
      const result = await refreshingToken();
      if (!result) {
        redirecting();
        alert("로그인 시간이 만료되었습니다. \n다시 로그인 해주세요.");
        return Promise.reject(new Error("Token expired"));
      }
      request.headers.Authorization = getCookie("accessToken");
    } else {
      request.headers.Authorization = getCookie("accessToken");
    }
    return request;
  });

  instance.interceptors.response.use(
    (response) => {
      return response;
    },
    async (error) => {
      return Promise.reject(error);
    }
  );
  return { instance };
};
export default JwtInterceptor;
