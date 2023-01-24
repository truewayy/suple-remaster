import { API_URLS } from "constants/apiUrl";
import JwtInterceptor from "./apiController";

const User = () => {
  const { instance } = JwtInterceptor();
  // 내 정보 API
  const info = async () => {
    return instance.get(API_URLS.USER.INFO);
  };

  // 글쓰기 API
  const writePost = (title, stack, content, contact) => {
    return instance.post(API_URLS.USER.WRITE_POST, {
      title: title,
      stack: stack,
      content: content,
      contact: contact,
    });
  };

  // 글수정 API
  const updatePost = (title, stack, content, contact, post_key) => {
    return instance.post(API_URLS.USER.UPDATE_POST, {
      title: title,
      stack: stack,
      content: content,
      contact: contact,
      post_key: post_key,
    });
  };

  // 글삭제 API
  const removePost = (post_key) => {
    return instance.delete(API_URLS.USER.REMOVE_POST, {
      data: {
        post_key: post_key,
      },
    });
  };

  return {
    info,
    writePost,
    updatePost,
    removePost,
  };
};

export default User;
