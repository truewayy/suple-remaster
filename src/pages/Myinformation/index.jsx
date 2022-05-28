import {React, useState, useEffect } from 'react'
import { myInfoApi } from '../../API/api'
import * as Styled from './styled'

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
                    <Styled.ContentTitle>내가 쓴 글</Styled.ContentTitle>
                    
                </Styled.ContentWrapper>
            </Styled.Container>
        </Styled.Wrapper>
    )

}
export default Myinformation