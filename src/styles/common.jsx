import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
`;

export const Container = styled.form`
  margin: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  border: 1px solid rgb(224, 224, 224);
  border-radius: 15px;
  width: 350px;
`;

export const FindWrapper = styled.div`
  width: 300px;
  &#search {
    width: 100%;
    display: flex;
    justify-content: space-between;
  }
`;

export const FindText = styled.div`
  width: 100%;
  text-align: left;
  padding-top: 30px;
  padding-bottom: 10px;
  font-weight: bold;
  font-size: 1.3rem;
`;

export const DetailText = styled.div`
  width: 100%;
  font-weight: 500;
  font-size: 12px;
  padding-bottom: 20px;
  text-align: left;
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
