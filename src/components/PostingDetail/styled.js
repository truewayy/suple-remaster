import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  width: 500px;
`;

export const Title = styled.div`
  font-size: 25px;
  font-weight: bold;
  margin-bottom: 30px;
  @media screen and (max-width: 767px) {
    font-size: 17px;
  }
`;

export const TitleBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const ContentBox = styled.div`
  display: flex;
  border: 1px solid rgb(224, 224, 224);
  border-radius: 15px;
  padding: 10px;
  margin-bottom: 30px;
  height: 200px;
  overflow: auto;
  @media screen and (max-width: 767px) {
    width: 280px;
  }
`;

export const Content = styled.div`
  font-weight: normal;
  font-size: 15px;
  word-break: break-all;
  @media screen and (max-width: 767px) {
    font-size: 12px;
  }
`;

export const Date = styled.div`
  font-size: 13px;
  font-weight: 300;
  @media screen and (max-width: 767px) {
    font-size: 11px;
  }
`;

export const CloseButton = styled.div`
  font-weight: bold;
  font-size: 25px;
  &:hover {
    cursor: pointer;
    color: #00a0e9;
  }
`;

export const StackWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 15px;
`;

export const WantingStack = styled.div`
  font-size: 15px;
  font-weight: 500;
  border: 1px solid rgb(224, 224, 224);
  border-radius: 15px;
  padding: 10px;
  @media screen and (max-width: 767px) {
    font-size: 12px;
  }
  &#url {
    font-size: 13px;
  }
`;

export const SubTitle = styled.div`
  font-size: 15px;
  font-weight: 500;
  margin-right: 15px;
  @media screen and (max-width: 767px) {
    font-size: 12px;
  }
`;
