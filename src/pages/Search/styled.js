import styled from 'styled-components'

export const Wrapper = styled.div`
    display: flex;
    justify-content: center;
`
export const Container = styled.div`
    display: flex;
    flex-direction: column;
    margin: 20px;
    width: 700px;
`
export const SearchWrapper = styled.div`
    display: flex;
    width: 100%;
    justify-content: center;
`

export const NoticeText = styled.div`
    font-size: 20px;
    font-weight: normal;
    margin: 30px;
    margin-left: 0px;
    &#value {
        font-weight: bold;
    }
`

export const TitleWrapper = styled.div`
    display: flex;
    align-items: flex-start;
`
export const SearchInput = styled.input`
    width: 90%;
    font-size: 16px;
    border: 2px solid #00a0e9;
    border-radius: 15px;
    padding: 10px 20px;
    margin: 10px;
    margin-left: 0px;
    background-repeat: no-repeat;
    background-position: 98%;

    &:focus {
        outline: none;
        border-color: #5D8BF4;
    }
    &:hover {
        border-color: #5D8BF4;
    }
    @media screen and (max-width: 767px) {
      width: 90%;
      transform: scale(0.92);
      ::placeholder {
        font-size: 13px;
      }
  }
`