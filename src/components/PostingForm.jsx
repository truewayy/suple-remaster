import styled from "@emotion/styled/macro";
import { fields, postingData } from "constants/options";
import usePosting from "hooks/usePosting";
import { React } from "react";
import StackSelect from "./StackSelect";

const PostingForm = ({ row = postingData, setModal, type = "add" }) => {
  const {
    formData,
    setStack,
    handleChangeContact,
    handleChangeContent,
    handleChangeField,
    handleChangeTitle,
    onSubmit,
    edited,
  } = usePosting({ row, type });
  const { title, field, stack, content, contact } = formData;
  const page = {
    add: { title: "글 쓰기", button: "작성하기" },
    edit: { title: "글 수정", button: "수정하기" },
  };
  if (edited) setModal(false);
  return (
    <FlexForm id={type}>
      <FormContainer id={type}>
        <FormText>{page[type].title}</FormText>
        <FlexRow>
          <FormText id="title">제목</FormText>
          <TextArea
            rows={1}
            defaultValue={title}
            placeholder="제목을 입력하세요"
            onChange={handleChangeTitle}
          />
        </FlexRow>
        <FlexRow id="field">
          <FormText id="url">모집분야</FormText>
          <Content
            id="content"
            onChange={handleChangeField}
            style={{ float: "left" }}
          >
            {fields.map(({ id, name, value }) => (
              <label key={id}>
                <FormCheckLeft
                  type="radio"
                  name="field"
                  id={id}
                  value={value}
                  placeholder="프로젝트 소개 및 원하는 팀원을 적어주세요"
                  defaultChecked={field === value}
                />
                <FormCheckText>{name}</FormCheckText>
              </label>
            ))}
          </Content>
        </FlexRow>
        <FlexRow id="stack">
          {field && (
            <FormText id="subtext">
              기술
              <CustomBr />
            </FormText>
          )}
          <StackSelect stack={stack} setStack={setStack} field={field} />
        </FlexRow>
        <FlexRow>
          <FormText id="title">내용</FormText>
          <TextArea
            rows={8}
            defaultValue={content}
            onChange={handleChangeContent}
          />
        </FlexRow>
        <FlexRow>
          <FormText id="url">
            오픈채팅
            <CustomBr />
            URL
          </FormText>
          <TextArea
            rows={1}
            placeholder="카카오톡 오픈채팅 URL (https:// ....)"
            defaultValue={contact}
            onChange={handleChangeContact}
          />
        </FlexRow>
      </FormContainer>
      <SubmitButton onClick={onSubmit}>{page[type].button}</SubmitButton>
    </FlexForm>
  );
};

export default PostingForm;

const FlexForm = styled.div`
  display: flex;
  width: 100%;
  padding: 0px 30px;
  flex-direction: column;
  align-items: center;
  &#add {
    padding: 0;
    margin: 100px auto;
  }
`;

const FormContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  margin: 20px;
  flex-direction: column;
  &#add {
    width: 45%;
    @media screen and (max-width: 960px) {
      width: 80%;
    }
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
    screen and (max-width: 960px) {
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
    gap: 10px;
    @media only screen and (max-width: 960px) {
      flex-direction: column;
      align-items: flex-start;
    }
  }
  @media only screen and (max-width: 960px) {
    flex-direction: column;
  }
`;

const TextArea = styled.textarea`
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

const FormCheckLeft = styled.input`
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
  &#backEnd {
    &:checked + ${FormCheckText} {
      color: #222222;
      font-weight: 600;
    }
  }
  &#frontEnd {
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
