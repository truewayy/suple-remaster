import instance from "./apiController";

const rootUrl = "http://suple.cafe24app.com/api";

const User = () => {
  // 내 정보 API
  const info = async () => {
    return instance({
      method: "get",
      url: `${rootUrl}/myinformation`,
    });
  };

  // 글쓰기 API
  const writePost = (title, stack, content, contact) => {
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

  // 글수정 API
  const updatePost = (title, stack, content, contact, post_key) => {
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
  const removePost = (post_key) => {
    return instance({
      method: "delete",
      url: `${rootUrl}/delete`,
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
