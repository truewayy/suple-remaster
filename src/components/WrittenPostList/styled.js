import styled from "styled-components";

export const Wrapper = styled.div`
    display: flex;
    justify-content: center;
`

export const NoticeText = styled.div`
    font-size: 20px;
    font-weight: normal;
    margin: 30px;
    margin-left: 0px;
    width: 100%;
`

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    margin: 20px;
    width: 700px;
`
export const ContentWrapper = styled.div`
    display: flex;
    flex-direction: column;
    border-radius: 15px;
    border: solid 1px #e0e0e0;
    width: 100%;
    margin-bottom: 20px;
    &:hover {
        cursor: pointer;
        border-color: #00a0e9;
    }
`

export const NoticeTitle = styled.div`
    margin: 20px;
    font-size: 16px;
    font-weight: 500;
`

export const NoticeDate = styled.div`
    margin: 0px 20px 20px 20px;
    font-size: 12px;
    color: #a3a3a3;
`