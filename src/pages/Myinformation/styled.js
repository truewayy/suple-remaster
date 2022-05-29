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

export const MyInfoText = styled.div`
    font-size: 20px;
    font-weight: normal;
    margin: 30px;
    margin-left: 0px;
`

export const ContentWrapper = styled.div`
    display: flex;
    flex-direction: column;
    border-radius: 15px;
    border: solid 1px #e0e0e0;
    width: 100%;
    padding: 25px;
    margin-bottom: 20px;
`

export const ContentTitle = styled.div`
    font-size: 16px;
    font-weight: 500;
    padding-bottom: 30px;
    &#posting {
        padding-bottom: 20px;
    }
`

export const RowWrapper = styled.div`
    display: flex;
`

export const DetailWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
`

export const ContentDetail = styled.span`
    font-size: 14px;
    width: 80px;
    margin-bottom: 20px;
    margin-right: 30px;
    &#bottom {
        margin-bottom: 0px;
    }
`

export const DetailData = styled.span`
    font-size: 16px;
    font-weight: 100;
    margin-bottom: 20px;
    &#bottom {
        margin-bottom: 0px;
    }
`

export const myPostingWrapper = styled.div`
    display: flex;
    border: 1px solid #e0e0e0;
    padding: 15px;
    border-radius: 15px;
    margin-top: 10px;
    &:hover {
        border-color: #00a0e9;
    }
`

export const PostingTitle = styled.div`
    font-size: 14px;
    font-weight: 500;
    width: 160px;
    &:hover {
        cursor: pointer;
    }
`

export const PostingContent = styled.div`
    font-size: 14px;
    font-weight: 200;
    @media screen and (max-width: 767px) {
        display: none;
    }
`

export const ButtonGroup = styled.div`
    display: flex;
    align-items: flex-start;
    margin-left: auto;
`

export const EditButton = styled.div`
    font-size: 12px;
    cursor: pointer;
    color: #a3a3a3;
    &:hover {
        color: #222;
    }
`

export const DeleteButton = styled(EditButton)`
    padding-left: 10px;
`