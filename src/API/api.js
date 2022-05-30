import axios from 'axios';
import { Cookies } from 'react-cookie';
const cookies = new Cookies();

// 메인 페이지 리스트 API
export const mainApi = (setData) => {
  const url = "http://localhost:3001"
  const options = {
    method: 'get',
    headers: {
      'Content-Type': 'application/json'
    },
    url,
  };
  axios(options).then(
    (r) => {
      setData(r.data)
      console.log(r.data)
    },
    (error) => {
      console.log(error.response);
    }
  )
}


// 로그인 API
export const loginApi = (setData, setLoading, id, pw) => {
    let now = new Date;
    let after1m = new Date();
    after1m.setMinutes(now.getMinutes() +100);
    const url = `http://localhost:3001/login`;
    const data = {
      user_id: id,
      user_password: pw,
    };
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      data: data,
      url,
    };
    axios(options).then(
      (r) => {
        cookies.set('accessToken', r.data.Authorization['accessToken'], {
          path: '/',
          secure: true,
          sameSite: false,
          expires: after1m
        });
        cookies.set('refreshToken', r.data.Authorization['refreshToken'], {
          path: '/',
          secure: true,
          sameSite: false,
          expires: after1m
        });
        setData(r.data)
        setLoading(true)
      },
      (error) => {
        alert(error.response.data.message)
      }
    );
  };


// 공지사항 API
  export const noticeApi = (setData) => {
    const url = "http://localhost:3001/notice"
    const options = {
      method: 'get',
      headers: {
        'Content-Type': 'application/json'
      },
      url,
    };
    axios(options).then(
      (r) => {
        setData(r.data)
        console.log(r.data)
      },
      (error) => {
        console.log(error.response);
      }
    )
  }

// 내 정보 API
export const myInfoApi = (setData) => {
  const url = "http://localhost:3001/myinformation"
  const options = {
    method: 'get',
    headers: {
      'Content-Type': 'application/json',
      Authorization: cookies.get('accessToken')
    },
    url,
  };
  axios(options).then(
    (r) => {
      setData(r.data)
      console.log(r.data)
    },
    (error) => {
      console.log(error.response);
    }
  )
}


// 회원가입 API
  export const signUpApi = (setData, setLoading, username, password, email) => {
    const url = "http://localhost:3001/signup"
    const data = {
      user_id: username,
      user_password: password,
      user_email: email
    }
    const options = {
      method: 'post',
      headers: {
        'Content-type': 'application/json'
      },
      data: data,
      url,
    };
    axios(options).then(
      (r) => {
        setData(r.data)
        setLoading(true)
      },
      (error) => {
        alert(error.response)
      }
    )
  }

// 회원가입 - 아이디중복확인 API
  export const checkIdApi = (setCheckID, username) => {
    const url = "http://localhost:3001/signup/checkid"
    const data = {
      user_id : username
    }
    const options = {
      method: 'post',
      headers: {
        'Content-type': 'application/json'
      },
      url,
      data: data
    };
    axios(options).then(
      (r) => {
        if(r.data.tf === true){
          alert("사용가능한 ID입니다");
          setCheckID(true);
        }
        else {
          alert("다른 아이디를 입력해주세요");
          setCheckID(false);
        }
      },
      (error) => {
        console.log(error.response)
      }
    )
  }

  // 회원가입 - 이메일중복확인 API
  export const checkEmailApi = (setCheckEmail, email) => {
    const url = "http://localhost:3001/signup/checkemail"
    const data = {
      user_email : email
    }
    const options = {
      method: 'post',
      headers: {
        'Content-type': 'application/json'
      },
      url,
      data: data
    };
    axios(options).then(
      (r) => {
        if(r.data.tf === true){
          alert("사용가능한 이메일입니다");
          setCheckEmail(true);
        }
        else {
          alert("다른 이메일을 입력해주세요");
          setCheckEmail(false);
        }
      },
      (error) => {
        console.log(error.response)
      }
    )
  }

  // 회원가입 - 이메일 인증코드전송 API
  export const submitCodeApi = (setIsCode, setCode, email) => {
    const url = "http://localhost:3001/signup/mail"
    const data = {
      mail : email
    }
    const options = {
      method: 'post',
      headers: {
        'Content-type': 'application/json'
      },
      url,
      data: data
    };
    axios(options).then(
      (r) => {
        setIsCode(true);
        setCode(r.data);
        alert("이메일로 인증코드가 발급되었습니다")
      },
      (error) => {
        console.log(error.response)
      }
    )
  }

  // 글쓰기 API
  export const postingApi = (setData, setLoading, title, stack, content, contact) => {
    const url = "http://localhost:3001/write"
    const data = {
      title: title,
      stack: stack,
      content: content,
      contact: contact
    }
    const options = {
      method: 'post',
      headers: {
        'Content-type': 'application/json',
        Authorization: cookies.get('accessToken')
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
        alert(error.response.data.message)
      }
    )
  }

  // 글수정 API
  export const updatePostApi = (setData, setLoading, title, stack, content, contact, post_key) => {
    const url = "http://localhost:3001/update"
    const data = {
      title: title,
      stack: stack,
      content: content,
      contact: contact,
      post_key: post_key
    }
    const options = {
      method: 'post',
      headers: {
        'Content-type': 'application/json',
        Authorization: cookies.get('accessToken')
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
        alert(error.response.data.message)
      }
    )
  }

// 글삭제 API
export const deletePostApi = (post_key) => {
  const url = "http://localhost:3001/delete"
  const data = {
    post_key: post_key
  }
  const options = {
    method: 'delete',
    headers: {
      'Content-type': 'application/json',
      Authorization: cookies.get('accessToken')
    },
    data: data,
    url,
  };
  axios(options).then(
    (r) => {
      if(r.data.tf===true) {
        window.location.reload();
      } else {
        alert("삭제 실패");
      }
    },
    (error) => {
      alert(error.response.data.message)
    }
  )
}