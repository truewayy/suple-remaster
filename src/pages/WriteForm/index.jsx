import { React, useState } from "react";
import { postingApi } from "../../API/api";
import {
  AppSelect,
  BackSelect,
  FrontSelect,
} from "../../components/StackSelect";
import * as Styled from "./styled";
import { useNavigate } from "react-router-dom";
import { useMutation } from "react-query";
import { queryClient } from "../..";
export const StackSelect = (props) => {
  return props.field === "0" ? (
    <FrontSelect setStack={props.setStack} stack={props.stack} />
  ) : props.field === "1" ? (
    <BackSelect setStack={props.setStack} stack={props.stack} />
  ) : props.field === "2" ? (
    <AppSelect setStack={props.setStack} stack={props.stack} />
  ) : null;
};

const WriteForm = () => {
  const navigate = useNavigate();
  const addPost = useMutation(
    () => postingApi(title, stack.join(", "), content, contact),
    {
      onSuccess: () => {
        queryClient.invalidateQueries("main");
        alert("작성 완료");
        navigate("/myinformation");
      },
      onError: (err) => alert(err.response.data.message),
    }
  );
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [field, setField] = useState(``); //분야 선택
  const [contact, setContact] = useState("");
  const [stack, setStack] = useState([]);
  const fieldChange = (e) => {
    setField(e.target.value);
  };
  const onSubmit = () => {
    if (title === "") {
      alert("제목을 입력해주세요");
    } else if (field === "") {
      alert("분야/스택(을) 선택해주세요");
    } else if (stack.length === 0) {
      alert("스택을 선택해주세요");
    } else if (content === "") {
      alert("내용을 입력해주세요");
    } else if (contact === "") {
      alert("카카오톡 오픈채팅 URL을 입력해주세요");
    } else if (stack.length > 4) {
      alert("스택은 4개까지 선택할 수 있습니다");
    } else {
      addPost.mutate();
    }
  };
  return (
    <Styled.FlexForm>
      <Styled.FormContainer>
        <Styled.FormText>글 쓰기</Styled.FormText>
        <Styled.FlexRow>
          <Styled.FormText id="title">제목</Styled.FormText>
          <Styled.TitleInput
            rows={1}
            placeholder="제목을 입력하세요"
            onChange={(e) => {
              setTitle(e.target.value);
            }}
          />
        </Styled.FlexRow>
        <Styled.FlexRow id="field">
          <Styled.FormText id="url">모집분야</Styled.FormText>
          <Styled.Content
            id="content"
            onChange={fieldChange}
            style={{ float: "left" }}
          >
            <Styled.FormLabel>
              <Styled.FormCheckLeft
                name="field"
                id="frontend"
                value="0"
                defaultChecked={field === "0"}
              />
              <Styled.FormCheckText>프론트엔드</Styled.FormCheckText>
            </Styled.FormLabel>
            <Styled.FormLabel>
              <Styled.FormCheckLeft
                name="field"
                id="backend"
                value="1"
                defaultChecked={field === "1"}
              />
              <Styled.FormCheckText>백엔드</Styled.FormCheckText>
            </Styled.FormLabel>
            <Styled.FormLabel>
              <Styled.FormCheckLeft
                name="field"
                id="app"
                value="2"
                defaultChecked={field === "2"}
              />
              <Styled.FormCheckText>앱</Styled.FormCheckText>
            </Styled.FormLabel>
          </Styled.Content>
        </Styled.FlexRow>
        <Styled.FlexRow id="stack">
          {field !== "" ? (
            <Styled.FormText id="subtext">
              기술
              <br />
            </Styled.FormText>
          ) : null}
          {field === "0" ? (
            <StackSelect field={field} stack={stack} setStack={setStack} />
          ) : field === "1" ? (
            <StackSelect field={field} stack={stack} setStack={setStack} />
          ) : (
            <StackSelect field={field} stack={stack} setStack={setStack} />
          )}
        </Styled.FlexRow>
        <Styled.FlexRow>
          <Styled.FormText id="title">내용</Styled.FormText>
          <Styled.ContentTextArea
            rows={15}
            placeholder="프로젝트 소개 및 원하는 팀원을 적어주세요"
            onChange={(e) => {
              setContent(e.target.value);
            }}
          />
        </Styled.FlexRow>
        <Styled.FlexRow>
          <Styled.FormText id="url">
            오픈채팅
            <br />
            URL
          </Styled.FormText>
          <Styled.TitleInput
            rows={1}
            placeholder="카카오톡 오픈채팅 URL (https:// ....)"
            onChange={(e) => {
              setContact(e.target.value);
            }}
          />
        </Styled.FlexRow>
      </Styled.FormContainer>
      <Styled.SubmitButton onClick={onSubmit}>작성하기</Styled.SubmitButton>
    </Styled.FlexForm>
  );
};

export default WriteForm;
