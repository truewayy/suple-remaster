import {React, useState} from 'react'
import * as Styled from './styled'
import { TextField } from '@material-ui/core';
import { findIdApi } from '../../API/api'

const IdSearch = () => {
    const [email, setEmail] = useState();
    const onSubmit = () => {
        findIdApi(email);
    };

    return(
        <Styled.Wrapper>
            <Styled.Container>

                <Styled.FindWrapper>
                    <Styled.FindText>아이디 찾기</Styled.FindText>
                    <Styled.DetailText>학교 계정을 입력하세요</Styled.DetailText>

                    <TextField 
                        type='email'
                        id='email'
                        fullWidth 
                        label="학교 이메일 (example@suwon.ac.kr)"
                        required
                        autoComplete="current-email" 
                        style={{paddingBottom:"10px"}}
                        onChange={(e)=>setEmail(e.target.value)} />
                    <Styled.SubmitButton onClick={onSubmit}>전송</Styled.SubmitButton>
                    
                </Styled.FindWrapper>
            </Styled.Container>
        </Styled.Wrapper>
    )

}

export default IdSearch;