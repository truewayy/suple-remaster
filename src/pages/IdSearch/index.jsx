import {React, useState, useEffect} from 'react'
import * as Styled from './styled'
import { TextField } from '@material-ui/core';
import { useNavigate } from 'react-router-dom';

const IdSearch = () => {
    const navigate = useNavigate();
    const [password, setPassword] = useState();
    const [db, setData] = useState({
        user: [],
      });
    const onSubmit = () => {
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
                        onChange={(e)=>setPassword(e.target.value)} />
                    <Styled.SubmitButton>전송</Styled.SubmitButton>
                    
                </Styled.FindWrapper>
            </Styled.Container>
        </Styled.Wrapper>
    )

}

export default IdSearch;