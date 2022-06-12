import {React, useState} from 'react'
import * as Styled from './styled'
import { TextField } from '@material-ui/core';
import { findPasswordApi } from '../../API/api';

const PwSearch = () => {
    const [username, setUsername] = useState();
    const [email, setEmail] = useState();
    
    const onSubmit = () => {
        findPasswordApi(username, email);
    }
    
    return(
        <Styled.Wrapper>
            <Styled.Container>

                <Styled.FindWrapper>
                    <Styled.FindText>비밀번호 찾기</Styled.FindText>
                    <Styled.DetailText>아이디에 해당하는 학교 이메일로 임시 비밀번호를 전송합니다</Styled.DetailText>

                    <TextField 
                        type='id'
                        id='id'
                        fullWidth 
                        label="SUPLE 아이디" 
                        required 
                        autoComplete="id" 
                        style={{paddingBottom:"20px"}}
                        onChange={(e)=>setUsername(e.target.value)} />
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

export default PwSearch;