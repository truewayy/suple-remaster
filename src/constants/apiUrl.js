export const API_URLS = {
  AUTH: {
    LOGIN: "/login",
    REGISTER: "/signup",
    CHECK_ID: "/signup/checkId",
    CHECK_EMAIL: "/signup/checkEmail",
    SEND_MAIL: "/signup/mail",
    FIND_ID: "/findIdx",
    FIND_PW: "/findPw",
    CHANGE_PW: "/updatePassword",
    EXIT: "/quit",
  },
  USER: {
    INFO: "/myinformation",
    WRITE_POST: "/write",
    UPDATE_POST: "/update",
    REMOVE_POST: "/delete",
  },
  POST: {
    MAIN: "/main",
    TOTAL: "/total",
    SEARCH: (value) => `/search/${value}`,
  },
  ETC: {
    NOTICE: "/notice",
  },
};
