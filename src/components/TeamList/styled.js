import styled from "styled-components"

export const Wrapper = styled.div`
  width: 180px;
  border: 1px solid white;
  border-radius: 15px;
  margin-right: 1px;
  margin-bottom: 30px;
  background-color: #00a0e9;
  box-shadow: 0px 0px 10px 5px #e0e0e0;
  padding: 20px;
  @media screen and (max-width: 1023px) {
    width: 30%;
}
  @media screen and (max-width: 767px) {
      width: 100%;
      font-size: 0.8rem;
  }
 
  &:hover {
      cursor: pointer;
      border: 1px solid rgba(102, 186, 255, 0.4);
      box-shadow: 0px 0px 15px 5px rgba(102, 186, 255, 0.4);
  }
`

export const TagWrapper = styled.div`
  height: 70px;
`

export const TagBox = styled.div`
  display: flex;
  justify-content: flex-start;
  margin-bottom: 10px;
  &#bottom {
    margin-bottom: 20px;
  }
`

export const ContentTag = styled.div`
  color: #00a0e9;
  text-align: center;
  font-size: 11px;
  font-weight: 500;
  padding: 3px 5px;
  background-color: #fff;
  border-radius: 10px;
  margin-right: 5px;
`

export const ContentTitle = styled.div`
  color: #fff;
  font-weight: 500;
  letter-spacing: 1px;
  height: 65px;
  @media screen and (max-width: 767px) {
    height: 30px;
}
`

export const ContentDate = styled.div`
  font-size: 11px;
  font-weight: normal;
  text-align: right;
  color: #fff;
`