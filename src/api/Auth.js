import JwtInterceptor from "./apiController";
import { API_URLS } from "constants/apiUrl";
import { useNavigate } from "react-router-dom";
import { removeCookie, setCookie } from "utils/Cookie";

const Auth = () => {
  const navigate = useNavigate();
  const { instance } = JwtInterceptor();
  // 로그인 API
  const login = async (id, pw) => {
    return instance
      .post(API_URLS.AUTH.LOGIN, {
        user_id: id,
        user_password: pw,
      })
      .then((r) => {
        if (r.data.success) {
          setCookie("accessToken", r.data.Authorization["accessToken"]);
          setCookie("refreshToken", r.data.Authorization["refreshToken"]);
          navigate("/");
        }
      })
      .catch((error) => {
        alert(error.response.data.message);
      });
  };
  // 회원가입 API
  const register = async (username, password, email) => {
    return instance.post(API_URLS.AUTH.REGISTER, {
      user_id: username,
      user_password: password,
      user_email: email,
    });
  };

  // 회원가입 - 아이디중복확인 API
  const checkId = async (setCheckID, username) => {
    return instance
      .post(API_URLS.AUTH.CHECK_ID, {
        user_id: username,
      })
      .then((r) => {
        if (r.data.tf) {
          alert("사용가능한 ID입니다");
          setCheckID(true);
        }
      })
      .catch((error) => {
        alert(error.response.data.message);
        setCheckID(false);
      });
  };

  // 회원가입 - 이메일중복확인 API
  const checkEmail = async (setCheckEmail, email) => {
    return instance
      .post(API_URLS.AUTH.CHECK_EMAIL, {
        user_email: email,
      })
      .then((r) => {
        if (r.data.tf) {
          alert("사용가능한 이메일입니다");
          setCheckEmail(true);
        }
      })
      .catch((error) => {
        alert(error.response.data.message);
        setCheckEmail(false);
      });
  };

  // 회원가입 - 이메일 인증코드전송 API
  const sendCode = async (setIsCode, setCode, email) => {
    return instance
      .post(API_URLS.AUTH.SEND_MAIL, {
        mail: email,
      })
      .then((r) => {
        setIsCode(true);
        setCode(r.data);
        alert("이메일로 인증코드가 발급되었습니다");
      })
      .catch((error) => {
        alert(error.response.data.message);
      });
  };

  // 아이디찾기 API
  const findId = (email) => {
    instance
      .post(API_URLS.AUTH.FIND_ID, {
        email: email,
      })
      .then((r) => {
        if (r.data) {
          alert(r.data.message);
        }
      })
      .catch((error) => {
        alert(error.response.data.message);
      });
  };

  // 비밀번호 찾기 API
  const findPw = async (username, email) => {
    return instance
      .post(API_URLS.AUTH.FIND_PW, {
        user_id: username,
        user_email: email,
      })
      .then((r) => {
        if (r.data.tf) {
          alert("이메일로 임시 비밀번호를 전송하였습니다");
          window.location.reload();
        }
      })
      .catch((error) => {
        alert(error.response.data.message);
      });
  };

  // 비밀번호 변경 API
  const changePw = async (currentPassword, newPassword) => {
    return instance
      .post(API_URLS.AUTH.CHANGE_PW, {
        currentPassword: currentPassword,
        newPassword: newPassword,
      })
      .then((response) => {
        if (response.data.tf) {
          alert("비밀번호 변경 성공하였습니다\n(다시 로그인 해주세요)");
          removeCookie("accessToken");
          removeCookie("refreshToken");
          navigate("/login");
        }
      })
      .catch((error) => {
        alert(error.response.data.message);
      });
  };

  // 회원탈퇴 API
  const exit = async (password) => {
    return instance
      .delete(API_URLS.AUTH.EXIT, {
        data: {
          password: password,
        },
      })
      .then((r) => {
        if (r.data.tf) {
          alert("회원탈퇴 성공하였습니다\n(안녕히 가세요 ^^))");
          removeCookie("accessToken");
          removeCookie("refreshToken");
          window.location.href = "/";
        }
      })
      .catch((error) => {
        alert(error.response.data.message);
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
  };
};
export default Auth;
