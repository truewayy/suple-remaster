import styled from "@emotion/styled/macro";
import { React, useState } from "react";
import User from "../api/User";
import StackSelect from "components/StackSelect";
import { useNavigate } from "react-router-dom";
import { useMutation } from "react-query";
import { queryClient } from "..";

const WriteForm = () => {
  const { writePost } = User();
  const navigate = useNavigate();
  const addPost = useMutation(
    () => writePost(title, stack.join(", "), content, contact),
    {
      onSuccess: () => {
        queryClient.invalidateQueries("main");
        queryClient.invalidateQueries("myInfo");
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
    <FlexForm>
      <FormContainer>
        <FormText>글 쓰기</FormText>
        <FlexRow>
          <FormText id="title">제목</FormText>
          <TitleInput
            rows={1}
            placeholder="제목을 입력하세요"
            onChange={(e) => {
              setTitle(e.target.value);
            }}
          />
        </FlexRow>
        <FlexRow id="field">
          <FormText id="url">모집분야</FormText>
          <Content
            id="content"
            onChange={fieldChange}
            style={{ float: "left" }}
          >
            <FormCheckLeft
              type="radio"
              name="field"
              id="frontend"
              value="0"
              defaultChecked={field === "0"}
            />
            <FormCheckText htmlFor="frontend">프론트엔드</FormCheckText>
            <FormCheckLeft
              type="radio"
              name="field"
              id="backend"
              value="1"
              defaultChecked={field === "1"}
            />
            <FormCheckText htmlFor="backend">백엔드</FormCheckText>
            <FormCheckLeft
              type="radio"
              name="field"
              id="app"
              value="2"
              defaultChecked={field === "2"}
            />
            <FormCheckText htmlFor="app">앱</FormCheckText>
          </Content>
        </FlexRow>
        <FlexRow id="stack">
          {field !== "" ? (
            <FormText id="subtext">
              기술
              <br />
            </FormText>
          ) : null}
          <StackSelect stack={stack} setStack={setStack} field={field} />
        </FlexRow>
        <FlexRow>
          <FormText id="title">내용</FormText>
          <ContentTextArea
            rows={15}
            placeholder="프로젝트 소개 및 원하는 팀원을 적어주세요"
            onChange={(e) => {
              setContent(e.target.value);
            }}
          />
        </FlexRow>
        <FlexRow>
          <FormText id="url">
            오픈채팅
            <br />
            URL
          </FormText>
          <TitleInput
            rows={1}
            placeholder="카카오톡 오픈채팅 URL (https:// ....)"
            onChange={(e) => {
              setContact(e.target.value);
            }}
          />
        </FlexRow>
      </FormContainer>
      <SubmitButton onClick={onSubmit}>작성하기</SubmitButton>
    </FlexForm>
  );
};

export default WriteForm;

const FlexForm = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 100px;
`;

const FormContainer = styled.div`
  display: flex;
  align-items: center;
  width: 60%;
  margin: 20px;
  flex-direction: column;
  @media screen and (max-width: 960px) {
    width: 100%;
  }
`;

const FormText = styled.div`
  font-size: 20px;
  font-weight: 500;
  margin: 20px;
  &#title {
    font-size: 18px;
    margin: 0px;
    @media screen and (max-width: 960px) {
      font-size: 15px;
    }
  }
  &#subtext {
    font-size: 15px;
    font-weight: 300;
    margin: 0px;
    @media screen and (max-width: 960px) {
      font-size: 13px;
    }
    ::after {
      content: "(최대 4개)";
      font-size: 12px;
    }
  }
  &#url {
    font-size: 16px;
    margin: 0px;
    @media screen and (max-width: 960px) {
      font-size: 13px;
    }
  }
`;

const FlexRow = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  width: 70%;
  margin-bottom: 20px;
  &#stack {
    margin-bottom: 20px;
  }
  &#field {
    align-items: center;
    margin-bottom: 10px;
  }
  @media only screen and (max-width: 960px) {
    width: 90%;
  }
`;

const TitleInput = styled.textarea`
  width: 85%;
  padding: 10px;
  border-radius: 10px;
  resize: none;
  &:hover {
    border-color: #00a0e9;
  }
  &:focus {
    outline: 1px solid #00a0e9;
    border-color: #00a0e9;
  }
  @media only screen and (max-width: 960px) {
    font-size: 16px;
    ::placeholder {
      font-size: 13px;
    }
  }
`;

const ContentTextArea = styled.textarea`
  width: 85%;
  resize: none;
  padding: 10px;
  border-radius: 10px;
  &:hover {
    border-color: #00a0e9;
  }
  &:focus {
    outline: 1px solid #00a0e9;
    border-color: #00a0e9;
  }
  @media only screen and (max-width: 960px) {
    font-size: 16px;
    ::placeholder {
      font-size: 13px;
    }
  }
`;

const Content = styled.form`
  display: flex;
  width: 85%;
  align-items: cener;
  &#group {
    margin-bottom: 1.5rem;
  }
`;

// 라디오버튼 스타일
const FormCheckText = styled.label`
  font-size: 16px;
  padding: 4px 15px;
  background: none;
  border-radius: 10px;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  color: #777;
  margin-right: 8px;
  @media only screen and (max-width: 960px) {
    font-size: 14px;
  }
`;

const FormCheckLeft = styled.input`
  &#app {
    &:checked + ${FormCheckText} {
      color: #7800ff;
      font-weight: 600;
    }
  }
  &#backend {
    &:checked + ${FormCheckText} {
      color: #222222;
      font-weight: 600;
    }
  }
  &#frontend {
    &:checked + ${FormCheckText} {
      color: #346cfd;
      font-weight: 600;
    }
  }
  display: none;
`;

const SubmitButton = styled.div`
  width: 300px;
  border-radius: 10px;
  font-weight: 500;
  text-align: center;
  color: white;
  background-color: #00a0e9;
  padding: 10px 15px;
  &:hover {
    cursor: pointer;
  }
`;
