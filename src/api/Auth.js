import Navigate from "hooks/navigate";
import instance, { getToken, removeToken, setToken } from "./apiController";
const rootUrl = "http://suple.cafe24app.com/api";

const Auth = () => {
  const { go } = Navigate();
  // 로그인 API
  const login = async (id, pw) => {
    return instance({
      method: "post",
      url: `${rootUrl}/login`,
      data: {
        user_id: id,
        user_password: pw,
      },
    })
      .then((r) => {
        if (r.data.success) {
          setToken("accessToken", r.data.Authorization["accessToken"]);
          setToken("refreshToken", r.data.Authorization["refreshToken"]);
          go("/");
        }
      })
      .catch((error) => {
        alert(error.response.data.message);
      });
  };
  // 회원가입 API
  const register = async (username, password, email) => {
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
  const checkId = async (setCheckID, username) => {
    return instance({
      method: "post",
      url: `${rootUrl}/signup/checkid`,
      data: {
        user_id: username,
      },
    })
      .then((r) => {
        if (r.data.tf) {
          alert("사용가능한 ID입니다");
          setCheckID(true);
        } else {
          alert("다른 아이디를 입력해주세요");
          setCheckID(false);
        }
      })
      .catch((error) => {
        console.log(error.response);
      });
  };

  // 회원가입 - 이메일중복확인 API
  const checkEmail = async (setCheckEmail, email) => {
    return instance({
      method: "post",
      url: `${rootUrl}/signup/checkemail`,
      data: {
        user_email: email,
      },
    })
      .then((r) => {
        if (r.data.tf) {
          alert("사용가능한 이메일입니다");
          setCheckEmail(true);
        } else {
          alert("다른 이메일을 입력해주세요");
          setCheckEmail(false);
        }
      })
      .catch((error) => {
        console.log(error.response);
      });
  };

  // 회원가입 - 이메일 인증코드전송 API
  const sendCode = async (setIsCode, setCode, email) => {
    return instance({
      method: "post",
      url: `${rootUrl}/signup/mail`,
      data: {
        mail: email,
      },
    })
      .then((r) => {
        setIsCode(true);
        setCode(r.data);
        alert("이메일로 인증코드가 발급되었습니다");
      })
      .catch((error) => {
        console.log(error.response);
      });
  };

  // 아이디찾기 API
  const findId = async (email) => {
    return instance({
      method: "post",
      url: `${rootUrl}/findIdx`,
      data: {
        email: email,
      },
    })
      .then((r) => {
        if (r.data.tf) {
          alert("이메일로 아이디를 전송하였습니다");
          window.location.reload();
        } else {
          alert("전송 실패");
        }
      })
      .catch((error) => {
        alert(error.response.data.message);
      });
  };

  // 비밀번호 찾기 API
  const findPw = async (username, email) => {
    return instance({
      method: "post",
      url: `${rootUrl}/findPw`,
      data: {
        user_id: username,
        user_email: email,
      },
    })
      .then((r) => {
        if (r.data.tf) {
          alert("이메일로 임시 비밀번호를 전송하였습니다");
          window.location.reload();
        } else {
          alert("전송 실패");
        }
      })
      .catch((error) => {
        alert(error.response);
      });
  };

  // 비밀번호 변경 API
  const changePw = async (currentPassword, newPassword) => {
    return instance({
      method: "post",
      url: `${rootUrl}/updatePassword`,
      data: {
        currentPassword: currentPassword,
        newPassword: newPassword,
      },
    })
      .then((response) => {
        if (response.data.tf) {
          alert("비밀번호 변경 성공하였습니다\n(다시 로그인 해주세요)");
          removeToken("accessToken");
          removeToken("refreshToken");
          go("/login");
        }
      })
      .catch((error) => {
        alert(error.response.data.message);
      });
  };

  // 회원탈퇴 API
  const exit = async (password) => {
    return instance({
      method: "delete",
      url: `${rootUrl}/quit`,
      data: {
        password: password,
      },
    })
      .then((r) => {
        if (r.data.tf) {
          alert("회원탈퇴 성공하였습니다\n(안녕히 가세요 ^^))");
          removeToken("accessToken");
          removeToken("refreshToken");
          window.location.href = "/";
        }
      })
      .catch((error) => {
        alert(error.response.data.message);
      });
  };

  // 토큰 리프레시 API
  const refresh = async (id) => {
    const token = getToken("refreshToken");
    return instance({
      method: "get",
      url: `${rootUrl}/refresh/${id}`,
      headers: {
        Authorization: token,
      },
    });
  };

  return {
    login,
    register,
    checkId,
    checkEmail,
    sendCode,
    findPw,
    changePw,
    findId,
    exit,
    refresh,
  };
};
export default Auth;
