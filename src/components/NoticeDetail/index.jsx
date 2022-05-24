import {React} from "react"
import * as Styled from './styled'

const NoticeDetail = (props) => {
    return(
        <Styled.Wrapper>
            <Styled.TitleBox>
                <Styled.Title>{props.title}</Styled.Title>
                <Styled.CloseButton onClick={()=>props.setModalIsOpen(false)}>X</Styled.CloseButton>
            </Styled.TitleBox>
            <Styled.ContentBox>
                <Styled.Content>{props.content}</Styled.Content>
            </Styled.ContentBox>
            <Styled.Date>작성일자 {props.date}</Styled.Date>
        </Styled.Wrapper>
    )
}
export default NoticeDetail