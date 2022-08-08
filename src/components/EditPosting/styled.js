import styled from "styled-components";

export const FlexForm = styled.div`
  display: flex;
  width: 600px;
  flex-direction: column;
  align-items: center;
`;

export const FormContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  margin: 20px;
  flex-direction: column;
  @media screen and (max-width: 960px) {
    width: 100%;
  }
`;

export const FormText = styled.div`
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

export const FlexRow = styled.div`
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
    @media only screen and (max-width: 960px) {
      flex-direction: column;
      align-items: flex-start;
      width: 90%;
    }
  }
  @media only screen and (max-width: 960px) {
    flex-direction: column;
    width: 90%;
  }
`;

export const TitleInput = styled.textarea`
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

export const ContentTextArea = styled.textarea`
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

export const Content = styled.form`
  display: flex;
  width: 85%;
  align-items: flex-start;

  @media only screen and (max-width: 960px) {
  }
`;

export const ContentTitle = styled.div`
  width: 20%;
  &#mobile {
    width: 30%;
  }
`;

export const CustomBr = styled.br`
  @media only screen and (max-width: 960px) {
    display: none;
  }
`;

// 라디오버튼 스타일
export const FormLabel = styled.label``;
export const FormCheckText = styled.span`
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

export const FormCheckLeft = styled.input.attrs({ type: "radio" })`
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

export const FormCheckMulti = styled.input.attrs({ type: "checkbox" })`
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
  &#difficult {
    &:checked + ${FormCheckText} {
      color: #7800ff;
      font-weight: 600;
    }
  }
  &#normal {
    &:checked + ${FormCheckText} {
      color: #222222;
      font-weight: 600;
    }
  }
  &#easy {
    &:checked + ${FormCheckText} {
      color: #346cfd;
      font-weight: 600;
    }
  }
  display: none;
`;

export const SubmitButton = styled.div`
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
