import axios from "axios";
import instance, { getToken } from "./apiController";
const rootUrl = "http://suple.cafe24app.com/api";

const Auth = () => {
  // 로그인 API
  const login = (id, pw) => {
    return instance({
      method: "post",
      url: `${rootUrl}/login`,
      data: {
        user_id: id,
        user_password: pw,
      },
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
  const checkId = (setCheckID, username) => {
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
  const checkEmail = (setCheckEmail, email) => {
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
  const sendCode = (setIsCode, setCode, email) => {
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

  // 아이디찾기 API
  const findId = (email) => {
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

  // 비밀번호 찾기 API
  const findPw = (username, email) => {
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
  const changePw = (setData, setLoading, currentPassword, newPassword) => {
    const url = `${rootUrl}/updatePassword`;
    const data = {
      currentPassword: currentPassword,
      newPassword: newPassword,
    };
    const options = {
      method: "post",
      headers: {
        "Content-type": "application/json",
        Authorization: getToken("accessToken"),
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

  // 회원탈퇴 API
  const exit = (setData, setLoading, password) => {
    const url = `${rootUrl}/quit`;
    const data = {
      password: password,
    };
    const options = {
      method: "delete",
      headers: {
        "Content-type": "application/json",
        Authorization: getToken("accessToken"),
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
