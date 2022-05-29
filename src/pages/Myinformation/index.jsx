import {React, useState, useEffect } from 'react'
import { myInfoApi } from '../../API/api'
import * as Styled from './styled'

export const MyPosting = (props) => {
    let title = props.title
    let content = props.content
    if (title.length >= 11) {
        title = props.title.substr(0, 11) + '...';
      }
    if (content.length >= 30) {
        content = props.content.substr(0, 30) + '...';
    }

    return(
        <Styled.myPostingWrapper>
            <Styled.PostingTitle>{title}</Styled.PostingTitle>
            <Styled.PostingContent>{content}</Styled.PostingContent>
            <Styled.ButtonGroup>
                <Styled.EditButton>수정</Styled.EditButton>
                <Styled.DeleteButton>삭제</Styled.DeleteButton>
            </Styled.ButtonGroup>
        </Styled.myPostingWrapper>
    )
}

export const MyPostingList = (props) => {
    return(
        props.post && props.post.map((v,i)=>{
            return(
                <MyPosting title={v.title} stack={v.stack} content={v.content} contact={v.contact} key={i} />
            )
    }))
}

const Myinformation = () => {
    const [db, setData] = useState({})
    useEffect(()=> {
        myInfoApi(setData)
    }, [])

    return(
        <Styled.Wrapper>
            <Styled.Container>
                <Styled.MyInfoText>내 정보</Styled.MyInfoText>
                <Styled.ContentWrapper>
                    <Styled.ContentTitle>내 계정</Styled.ContentTitle>
                    <Styled.RowWrapper>
                    <Styled.DetailWrapper>
                        <Styled.ContentDetail>로그인 아이디</Styled.ContentDetail>
                        <Styled.ContentDetail id='bottom'>학교 인증 메일</Styled.ContentDetail>
                    </Styled.DetailWrapper>
                    <Styled.DetailWrapper>
                        <Styled.DetailData>{db.id}</Styled.DetailData>
                        <Styled.DetailData id='bottom'>{db.email}</Styled.DetailData>
                    </Styled.DetailWrapper>
                    </Styled.RowWrapper>
                </Styled.ContentWrapper>
                <Styled.ContentWrapper>
                    <Styled.ContentTitle id='posting'>내가 쓴 글</Styled.ContentTitle>
                    <MyPostingList post={db.post}/>
                </Styled.ContentWrapper>
            </Styled.Container>
        </Styled.Wrapper>
    )

}
export default Myinformation