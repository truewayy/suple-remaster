import axios from "axios";
import { Cookies } from "react-cookie";
const cookies = new Cookies();
const rootUrl = "http://suple.cafe24app.com";

// 메인 페이지 리스트 API
export const mainApi = async () => {
  const url = `${rootUrl}/api/main`;
  const options = {
    method: "get",
    headers: {
      "Content-Type": "application/json",
    },
    url,
  };
  return axios(options);
};

// 로그인 API
export const loginApi = (setData, setLoading, id, pw) => {
  let now = new Date();
  let after100m = new Date();
  after100m.setMinutes(now.getMinutes() + 100);
  const url = `${rootUrl}/api/login`;
  const data = {
    user_id: id,
    user_password: pw,
  };
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    data: data,
    url,
  };
  axios(options).then(
    (r) => {
      cookies.set("accessToken", r.data.Authorization["accessToken"], {
        path: "/",
        expires: after100m,
      });
      cookies.set("refreshToken", r.data.Authorization["refreshToken"], {
        path: "/",
        expires: after100m,
      });
      setData(r.data);
      setLoading(true);
    },
    (error) => {
      alert(error.response.data.message);
    }
  );
};

// 공지사항 API
export const noticeApi = (setData) => {
  const url = `${rootUrl}/api/notice`;
  const options = {
    method: "get",
    headers: {
      "Content-Type": "application/json",
    },
    url,
  };
  axios(options).then(
    (r) => {
      setData(r.data);
    },
    (error) => {
      console.log(error.response);
    }
  );
};

// 전체 글 API
export const WrittenPostApi = (setData) => {
  const url = `${rootUrl}/api/total`;
  const options = {
    method: "get",
    headers: {
      "Content-Type": "application/json",
    },
    url,
  };
  axios(options).then(
    (r) => {
      setData(r.data);
    },
    (error) => {
      console.log(error.response);
    }
  );
};

// 검색 API
export const SearchApi = (setData, search_value) => {
  const url = `${rootUrl}/api/search/${search_value}`;
  const options = {
    method: "get",
    headers: {
      "Content-Type": "application/json",
    },
    url,
  };
  axios(options).then(
    (r) => {
      setData(r.data);
    },
    (error) => {
      console.log(error.response);
    }
  );
};

// 내 정보 API
export const myInfoApi = (setData) => {
  const url = `${rootUrl}/api/myinformation`;
  const options = {
    method: "get",
    headers: {
      "Content-Type": "application/json",
      Authorization: cookies.get("accessToken"),
    },
    url,
  };
  axios(options).then(
    (r) => {
      setData(r.data);
    },
    (error) => {
      console.log(error.response);
    }
  );
};

// 회원가입 API
export const signUpApi = (setData, setLoading, username, password, email) => {
  const url = `${rootUrl}/api/signup`;
  const data = {
    user_id: username,
    user_password: password,
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
      setData(r.data);
      setLoading(true);
    },
    (error) => {
      alert(error.response);
    }
  );
};

// 회원가입 - 아이디중복확인 API
export const checkIdApi = (setCheckID, username) => {
  const url = `${rootUrl}/api/signup/checkid`;
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
  const url = `${rootUrl}/api/signup/checkemail`;
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
  const url = `${rootUrl}/api/signup/mail`;
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
  const url = `${rootUrl}/api/write`;
  const data = {
    title: title,
    stack: stack,
    content: content,
    contact: contact,
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
  return axios(options);
};

// 비밀번호 찾기 API
export const findPasswordApi = (username, email) => {
  const url = `${rootUrl}/api/findPw`;
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
  const url = `${rootUrl}/api/updatePassword`;
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
export const updatePostApi = (
  setData,
  setLoading,
  title,
  stack,
  content,
  contact,
  post_key
) => {
  const url = `${rootUrl}/api/update`;
  const data = {
    title: title,
    stack: stack,
    content: content,
    contact: contact,
    post_key: post_key,
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

// 글삭제 API
export const deletePostApi = (post_key) => {
  const url = `${rootUrl}/api/delete`;
  const data = {
    post_key: post_key,
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
      if (r.data.tf === true) {
        window.location.reload();
      } else {
        alert("삭제 실패");
      }
    },
    (error) => {
      alert(error.response.data.message);
    }
  );
};

// 아이디찾기 API
export const findIdApi = (email) => {
  const url = `${rootUrl}/api/findIdx`;
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
  const url = `${rootUrl}/api/quit`;
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
