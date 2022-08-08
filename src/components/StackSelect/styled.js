import styled from "styled-components";

export const FlexForm = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const FormContainer = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid black;
  width: 700px;
  margin: 20px;
  flex-direction: column;
`;

export const FormText = styled.div`
  font-size: 20px;
  font-weight: 500;
  margin: 20px;
  &#title {
    font-size: 18px;
    margin: 0px;
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
  }
`;

export const TitleInput = styled.textarea`
  width: 90%;
  padding: 10px;
  border-radius: 10px;
  resize: none;
`;

export const ContentTextArea = styled.textarea`
  width: 90%;
  resize: none;
  padding: 10px;
  border-radius: 10px;
`;

export const Content = styled.form`
  display: flex;
  width: 85%;
  align-items: cener;
  &#group {
    margin-bottom: 1.5rem;
  }
`;

export const ContentTitle = styled.div`
  width: 20%;
  &#mobile {
    width: 30%;
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
  @media screen and (max-width: 960px) {
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
