import styled from "styled-components";
import { React, useState } from "react";
import { useMutation } from "react-query";
import { queryClient } from "..";
import User from "../api/User";
import StackSelect from "./StackSelect";

const EditPosting = ({ row, setModal }) => {
  const { updatePost } = User();
  const [title, setTitle] = useState(`${row.title}`);
  const [content, setContent] = useState(`${row.content}`);
  const [field, setField] = useState(`0`); //분야 선택
  const [contact, setContact] = useState(`${row.contact}`);
  const [stack, setStack] = useState(() => row.stack.split(", "));
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
      setModal(false);
      editPost.mutate();
    }
  };
  return (
    <FlexForm>
      <FormContainer>
        <FormText>글 수정</FormText>
        <FlexRow>
          <FormText id="title">제목</FormText>
          <TitleInput
            rows={1}
            defaultValue={row.title}
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
            <FormLabel>
              <FormCheckLeft
                name="field"
                id="frontend"
                value="0"
                defaultChecked={field === "0"}
              />
              <FormCheckText>프론트엔드</FormCheckText>
            </FormLabel>
            <FormLabel>
              <FormCheckLeft
                name="field"
                id="backend"
                value="1"
                defaultChecked={field === "1"}
              />
              <FormCheckText>백엔드</FormCheckText>
            </FormLabel>
            <FormLabel>
              <FormCheckLeft
                name="field"
                id="app"
                value="2"
                defaultChecked={field === "2"}
              />
              <FormCheckText>앱</FormCheckText>
            </FormLabel>
          </Content>
        </FlexRow>
        <FlexRow id="stack">
          {field !== "" ? (
            <FormText id="subtext">
              기술
              <CustomBr />
            </FormText>
          ) : null}
          <StackSelect stack={stack} setStack={setStack} field={field} />
        </FlexRow>
        <FlexRow>
          <FormText id="title">내용</FormText>
          <ContentTextArea
            rows={8}
            defaultValue={row.content}
            onChange={(e) => {
              setContent(e.target.value);
            }}
          />
        </FlexRow>
        <FlexRow>
          <FormText id="url">
            오픈채팅
            <CustomBr />
            URL
          </FormText>
          <TitleInput
            rows={1}
            defaultValue={row.contact}
            onChange={(e) => {
              setContact(e.target.value);
            }}
          />
        </FlexRow>
      </FormContainer>
      <SubmitButton onClick={onSubmit}>수정하기</SubmitButton>
    </FlexForm>
  );
};

export default EditPosting;

const FlexForm = styled.div`
  display: flex;
  width: 100%;
  padding: 0px 30px;
  flex-direction: column;
  align-items: center;
`;

const FormContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
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
  margin-top: 0px;
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
  width: 100%;
  margin-bottom: 20px;
  &#stack {
    margin-bottom: 20px;
    @media only screen and (max-width: 960px) {
    }
  }
  &#field {
    align-items: center;
    margin-bottom: 10px;
    @media only screen and (max-width: 960px) {
      flex-direction: column;
      align-items: flex-start;
    }
  }
  @media only screen and (max-width: 960px) {
    flex-direction: column;
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
    width: 100%;
    margin-top: 10px;
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
    width: 100%;
    margin-top: 10px;
  }
`;

const Content = styled.form`
  display: flex;
  width: 85%;
  align-items: flex-start;
`;

const CustomBr = styled.br`
  @media only screen and (max-width: 960px) {
    display: none;
  }
`;

const FormLabel = styled.label``;
const FormCheckText = styled.span`
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
    padding: 4px 10px;
  }
`;

const FormCheckLeft = styled.input.attrs({ type: "radio" })`
  &:checked {
    display: inline-block;
    background: none;
    padding: 0px 10px;
    text-align: center;
    height: 35px;
    line-height: 33px;
    font-weight: 500;
    display: none;
  }
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
  margin-bottom: 30px;
  &:hover {
    cursor: pointer;
  }
`;
