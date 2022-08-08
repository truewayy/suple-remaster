import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
`;

export const Container = styled.div`
  margin: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 15px;
  border: 1px solid rgb(224, 224, 224);
  border-radius: 15px;
  width: 400px;
`;

export const LoginButton = styled.button`
  border: none;
  border-radius: 10px;
  background-color: #00a0e9;
  color: white;
  font-weight: bold;
  font-size: 15px;
  padding: 10px 20px;
  margin-top: 20px;
  margin-bottom: 30px;
  width: 100%;
  &:hover {
    background-color: #5d8bf4;
    cursor: pointer;
  }
  &:disabled {
    background-color: #eee;
    cursor: default;
  }
`;

export const OverlapButton = styled.button`
  border: none;
  border-radius: 20px;
  background-color: #00a0e9;
  color: white;
  font-size: 13px;
  font-weight: bold;
  padding: 5px 5px;
  width: 20%;
  margin-top: 15px;
  &:hover {
    background-color: #5d8bf4;
    cursor: pointer;
  }
  &:disabled {
    background-color: #eee;
    cursor: default;
  }
  &#code {
    width: 18%;
    margin-right: 5px;
  }
`;

export const CheckText = styled.div`
  padding-top: 20px;
  font-size: 0.7rem;
  float: left;
  &#check {
    padding-top: 0px;
    padding-bottom: 10px;
  }
  &#email {
    padding-top: 0px;
    padding-bottom: 0px;
  }
`;

export const LoginWrapper = styled.div`
  width: 330px;
  &#search {
    width: 100%;
    display: flex;
    justify-content: space-between;
  }
`;

export const SignupText = styled.div`
  width: 100%;
  text-align: left;
  padding-top: 30px;
  padding-bottom: 30px;
  font-weight: bold;
  font-size: 1.3rem;
`;
