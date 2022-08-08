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
  border: 1px solid rgb(224, 224, 224);
  border-radius: 15px;
  width: 360px;
`;

export const LoginButton = styled.button`
  border: none;
  border-radius: 10px;
  background-color: #00a0e9;
  color: white;
  font-weight: bold;
  font-size: 15px;
  padding: 10px 20px;
  margin-top: 10px;
  margin-bottom: 30px;
  width: 100%;
  &:hover {
    background-color: #5d8bf4;
    cursor: pointer;
  }
`;

export const LoginWrapper = styled.div`
  width: 300px;
  &#search {
    width: 100%;
    display: flex;
    justify-content: space-between;
  }
`;

export const SearchLink = styled.div`
  color: rgb(190, 190, 190);
  font-weight: bold;
  padding-bottom: 20px;
  &:hover {
    color: #00a0e9;
    cursor: pointer;
  }
  &#id {
    padding-left: 30px;
  }
  &#pw {
    padding-right: 30px;
  }
`;

export const LoginText = styled.div`
  width: 100%;
  text-align: left;
  padding-top: 30px;
  padding-bottom: 20px;
  font-weight: bold;
  font-size: 1.3rem;
`;
