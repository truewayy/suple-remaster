import { Cookies } from "react-cookie";

const cookies = new Cookies();

export const setCookie = (name, value) => {
  return cookies.set(name, value, { path: "/" });
};

export const removeCookie = (value) => {
  return cookies.remove(value);
};

export const getCookie = (value) => {
  return cookies.get(value);
};
