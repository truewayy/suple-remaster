import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  width: 100%;
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
`;

export const Content = styled.div`
  font-weight: normal;
  font-size: 15px;
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
