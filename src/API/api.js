import axios from "axios";
import { Cookies } from "react-cookie";
import instance, { getToken } from "./apiController";
const cookies = new Cookies();
const rootUrl = "http://suple.cafe24app.com/api";

// 메인 페이지 리스트 API
export const mainApi = async () => {
  return instance({
    method: "get",
    url: `${rootUrl}/main`,
  });
};

// 로그인 API
export const loginApi = (id, pw) => {
  return instance({
    method: "post",
    url: `${rootUrl}/login`,
    data: {
      user_id: id,
      user_password: pw,
    },
  });
};

// 토큰 리프레시 API
export const refreshTokenApi = async (id) => {
  const token = getToken("refreshToken");
  return instance({
    method: "get",
    url: `${rootUrl}/refresh/${id}`,
    headers: {
      Authorization: token,
    },
  });
};

// 공지사항 API
export const noticeApi = async () => {
  return instance({
    method: "get",
    url: `${rootUrl}/notice`,
  });
};

// 전체 글 API
export const WrittenPostApi = async () => {
  return instance({
    method: "get",
    url: `${rootUrl}/total`,
  });
};

// 검색 API
export const SearchApi = async (setData, search_value) => {
  return instance({
    method: "get",
    url: `${rootUrl}/search/${search_value}`,
  }).then((res) => {
    setData(res.data);
  });
};

// 내 정보 API
export const myInfoApi = async () => {
  return instance({
    method: "get",
    url: `${rootUrl}/myinformation`,
    headers: {
      Authorization: getToken("accessToken"),
    },
  });
};

// 회원가입 API
export const signUpApi = async (username, password, email) => {
  return instance({
    method: "post",
    url: `${rootUrl}/signup`,
    data: {
      user_id: username,
      user_password: password,
      user_email: email,
    },
  });
};

// 회원가입 - 아이디중복확인 API
export const checkIdApi = (setCheckID, username) => {
  const url = `${rootUrl}/signup/checkid`;
  const data = {
    user_id: username,
  };
  const options = {
    method: "post",
    headers: {
      "Content-type": "application/json",
    },
    url,
    data: data,
  };
  axios(options).then(
    (r) => {
      if (r.data.tf === true) {
        alert("사용가능한 ID입니다");
        setCheckID(true);
      } else {
        alert("다른 아이디를 입력해주세요");
        setCheckID(false);
      }
    },
    (error) => {
      console.log(error.response);
    }
  );
};

// 회원가입 - 이메일중복확인 API
export const checkEmailApi = (setCheckEmail, email) => {
  const url = `${rootUrl}/signup/checkemail`;
  const data = {
    user_email: email,
  };
  const options = {
    method: "post",
    headers: {
      "Content-type": "application/json",
    },
    url,
    data: data,
  };
  axios(options).then(
    (r) => {
      if (r.data.tf === true) {
        alert("사용가능한 이메일입니다");
        setCheckEmail(true);
      } else {
        alert("다른 이메일을 입력해주세요");
        setCheckEmail(false);
      }
    },
    (error) => {
      console.log(error.response);
    }
  );
};

// 회원가입 - 이메일 인증코드전송 API
export const submitCodeApi = (setIsCode, setCode, email) => {
  const url = `${rootUrl}/signup/mail`;
  const data = {
    mail: email,
  };
  const options = {
    method: "post",
    headers: {
      "Content-type": "application/json",
    },
    url,
    data: data,
  };
  axios(options).then(
    (r) => {
      setIsCode(true);
      setCode(r.data);
      alert("이메일로 인증코드가 발급되었습니다");
    },
    (error) => {
      console.log(error.response);
    }
  );
};

// 글쓰기 API
export const postingApi = (title, stack, content, contact) => {
  return instance({
    method: "post",
    url: `${rootUrl}/write`,
    data: {
      title: title,
      stack: stack,
      content: content,
      contact: contact,
    },
  });
};

// 비밀번호 찾기 API
export const findPasswordApi = (username, email) => {
  const url = `${rootUrl}/findPw`;
  const data = {
    user_id: username,
    user_email: email,
  };
  const options = {
    method: "post",
    headers: {
      "Content-type": "application/json",
    },
    data: data,
    url,
  };
  axios(options).then(
    (r) => {
      if (r.data.tf === true) {
        alert("이메일로 임시 비밀번호를 전송하였습니다");
        window.location.reload();
      } else {
        alert("전송 실패");
      }
    },
    (error) => {
      alert(error.response);
    }
  );
};

// 비밀번호 변경 API
export const changePasswordApi = (
  setData,
  setLoading,
  currentPassword,
  newPassword
) => {
  const url = `${rootUrl}/updatePassword`;
  const data = {
    currentPassword: currentPassword,
    newPassword: newPassword,
  };
  const options = {
    method: "post",
    headers: {
      "Content-type": "application/json",
      Authorization: cookies.get("accessToken"),
    },
    data: data,
    url,
  };
  axios(options).then(
    (r) => {
      setData(r.data);
      setLoading(true);
    },
    (error) => {
      alert(error.response.data.message);
    }
  );
};

// 글수정 API
export const updatePostApi = (title, stack, content, contact, post_key) => {
  return instance({
    method: "post",
    url: `${rootUrl}/update`,
    data: {
      title: title,
      stack: stack,
      content: content,
      contact: contact,
      post_key: post_key,
    },
  });
};

// 글삭제 API
export const deletePostApi = (post_key) => {
  return instance({
    method: "delete",
    url: `${rootUrl}/delete`,
    data: {
      post_key: post_key,
    },
  });
};

// 아이디찾기 API
export const findIdApi = (email) => {
  const url = `${rootUrl}/findIdx`;
  const data = {
    email: email,
  };
  const options = {
    method: "post",
    headers: {
      "Content-type": "application/json",
    },
    data: data,
    url,
  };
  axios(options).then(
    (r) => {
      if (r.data.tf === true) {
        alert("이메일로 아이디를 전송하였습니다");
        window.location.reload();
      } else {
        alert("전송 실패");
      }
    },
    (error) => {
      alert(error.response.data.message);
    }
  );
};

// 회원탈퇴 API
export const quitApi = (setData, setLoading, password) => {
  const url = `${rootUrl}/quit`;
  const data = {
    password: password,
  };
  const options = {
    method: "delete",
    headers: {
      "Content-type": "application/json",
      Authorization: cookies.get("accessToken"),
    },
    data: data,
    url,
  };
  axios(options).then(
    (r) => {
      setData(r.data);
      setLoading(true);
    },
    (error) => {
      alert(error.response.data.message);
    }
  );
};
