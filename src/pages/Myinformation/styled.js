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