import axios from "axios";
import jwtDecode from "jwt-decode";
import { Cookies } from "react-cookie";
import { refreshTokenApi } from "./api";
const cookies = new Cookies();
const instance = axios.create({
  timeout: 2000,
});

export const setToken = (name, token) => {
  return cookies.set(name, token, { path: "/" });
};

export const removeToken = (token) => {
  return cookies.remove(token);
};

export const getToken = (token) => {
  return cookies.get(token);
};

const redirecting = () => {
  removeToken("accessToken");
  removeToken("refreshToken");
  window.location.href = "/signin";
};

const isAccessTokenValid = () => {
  const token = getToken("accessToken");
  if (!token) return false;
  const tokenInfo = jwtDecode(token);
  if (tokenInfo.exp <= Date.now() / 1000) return false;
  return true;
};

const refreshingToken = async () => {
  try {
    const accessToken = getToken("accessToken");
    const refreshToken = getToken("refreshToken");
    if (!accessToken || !refreshToken) {
      return false;
    }
    const payload = jwtDecode(accessToken);
    const id = payload.id;
    const res = await refreshTokenApi(id);
    if (res.status !== 200) {
      throw new Error(`Response status is ${res.status}`);
    }
    setToken("accessToken", res.data.accessToken);
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
    request.url.includes("/search")
  ) {
  } else if (!isAccessTokenValid()) {
    const accessToken = getToken("accessToken");
    const refreshToken = getToken("refreshToken");
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
    request.headers.Authorization = `Bearer ${getToken("accessToken")}`;
  } else {
    request.headers.Authorization = `Bearer ${getToken("accessToken")}`;
  }
  return request;
});

instance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    return error;
  }
);

export default instance;
