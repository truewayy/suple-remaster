import { User } from "api";
import { queryClient } from "index";
import { useState } from "react";
import { useMutation } from "react-query";

const useEditPosting = (row, setModal) => {
  const { updatePost } = User();
  const [title, setTitle] = useState(row.title);
  const [content, setContent] = useState(row.content);
  const [field, setField] = useState("frontEnd"); //분야 선택
  const [contact, setContact] = useState(row.contact);
  const [stack, setStack] = useState(row.stack.split(", "));
  const editPost = useMutation(
    () => updatePost(title, stack.join(", "), content, contact, row.post_key),
    {
      onSuccess: (res) => {
        if (res.data.tf) {
          queryClient.invalidateQueries("main");
          queryClient.invalidateQueries("myInfo");
        } else {
          alert("수정 실패");
        }
      },
      onError: (err) => alert(err.response.data.message),
    }
  );
  const onSubmit = () => {
    if (!title.length) return alert("제목을 입력해주세요");
    if (!field.length) return alert("분야/스택(을) 선택해주세요");
    if (!stack.length) return alert("스택을 선택해주세요");
    if (!content.length) return alert("내용을 입력해주세요");
    if (!contact.length) return alert("카카오톡 오픈채팅 URL을 입력해주세요");
    if (stack.length > 4) return alert("스택은 4개까지 선택할 수 있습니다");
    setModal(false);
    editPost.mutate();
  };
  const handleChangeField = (e) => {
    setField(e.target.value);
  };
  const handleChangeTitle = (e) => {
    setTitle(e.target.value);
  };
  const handleChangeContent = (e) => {
    setContent(e.target.value);
  };
  const handleChangeContact = (e) => {
    setContact(e.target.value);
  };

  return {
    formData: {
      title,
      content,
      field,
      contact,
      stack,
    },
    setStack,
    handleChangeField,
    handleChangeTitle,
    handleChangeContent,
    handleChangeContact,
    onSubmit,
  };
};

export default useEditPosting;
