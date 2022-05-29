import {React} from "react"
import * as Styled from './styled'

const PostingDetail = (props) => {
    return(
        <Styled.Wrapper>
            <Styled.TitleBox>
                <Styled.Title>{props.title}</Styled.Title>
                <Styled.CloseButton onClick={()=>props.setModalIsOpen(false)}>X</Styled.CloseButton>
            </Styled.TitleBox>
            <Styled.StackWrapper>
                <Styled.SubTitle>모집 기술</Styled.SubTitle>
                <Styled.WantingStack>{props.stack}</Styled.WantingStack>
            </Styled.StackWrapper>
            <Styled.ContentBox>
                <Styled.Content>{props.content}</Styled.Content>
            </Styled.ContentBox>
            <Styled.StackWrapper>
                <Styled.SubTitle>오픈채팅 URL</Styled.SubTitle>
                <Styled.WantingStack id="url">{props.contact}</Styled.WantingStack>
            </Styled.StackWrapper>
            <Styled.Date>작성일자 {props.date}</Styled.Date>
        </Styled.Wrapper>
    )
}
export default PostingDetail