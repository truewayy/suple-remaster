import {React, useState, useEffect, useCallback} from 'react'
import { useNavigate } from 'react-router-dom';
import * as Styled from './styled'
import { TextField } from '@material-ui/core';
import { changePasswordApi } from '../../API/api';
import { Cookies } from 'react-cookie';

const PwChange = () => {
    const navigate = useNavigate();
    const cookies = new Cookies();
    const [db, setData] = useState({
        tf: false,
    });
    const [loading, setLoading] = useState(false);
    const [currentPassword, setCurrentPassword] = useState('');
    const [password, setPassword] = useState('');
    const [passwordConfirm, setPasswordConfirm] = useState('');
    const [passwordMessage, setPasswordMessage] = useState('');
    const [passwordConfirmMessage, setPasswordConfirmMessage] = useState('');
    const [isPassword, setIsPassword] = useState(false);
    const [isPasswordConfirm, setIsPasswordConfirm] = useState(false);

    //비밀번호
    const onChangePassword = useCallback((e) => {
        const passwordRegex = /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,25}$/;
        const passwordCurrent = e.target.value;
        setPassword(passwordCurrent);
    
        if (!passwordRegex.test(passwordCurrent)) {
            setPasswordMessage('숫자+영문자+특수문자 조합으로 8자리 이상 입력해주세요!');
            setIsPassword(false);
        } else {
            setPasswordMessage('사용 가능한 비밀번호입니다.');
            setIsPassword(true);
        }
        }, []);
        
        // 비밀번호 확인
    const onChangePasswordConfirm = useCallback(
        (e) => {
        const passwordConfirmCurrent = e.target.value;
        setPasswordConfirm(passwordConfirmCurrent);

        if (password === passwordConfirmCurrent) {
            setPasswordConfirmMessage('비밀번호가 일치합니다.');
            setIsPasswordConfirm(true);
        } else {
            setPasswordConfirmMessage('비밀번호가 일치하지 않습니다.');
            setIsPasswordConfirm(false);
        }
        },
        [password]
    );
    const onSubmit = () => {
        changePasswordApi(setData, setLoading, currentPassword, password)
    }
    useEffect(()=>{
        if(db.tf===true) {
            alert("비밀번호 변경 성공하였습니다\n(다시 로그인 해주세요)");
            cookies.remove("accessToken");
            cookies.remove("refreshToken");
            navigate("/");
        }
    }, [loading, db])
    return(
        <Styled.Wrapper>
            <Styled.Container>

                <Styled.FindWrapper>
                    <Styled.FindText>비밀번호 변경</Styled.FindText>
                    <Styled.DetailText>현재 비밀번호와 새로 사용할 비밀번호를 입력해주세요</Styled.DetailText>

                    <TextField 
                        type='password'
                        id='password'
                        fullWidth 
                        label="현재 비밀번호" 
                        style={{paddingBottom:"10px"}}
                        onChange={(e)=>setCurrentPassword(e.target.value)} />
                    <TextField fullWidth type="password" label="새로운 비밀번호" style={{paddingBottom:"10px"}}
                       onChange={onChangePassword} />
                    {password.length > 0 && (
                        <Styled.CheckText id='check' className={`message ${isPassword ? 'success' : 'error'}`}>
                            {passwordMessage}
                        </Styled.CheckText>
                        )}
                    <TextField fullWidth type="password" label="새로운 비밀번호 확인" style={{paddingBottom:"10px"}}
                       onChange={onChangePasswordConfirm} />
                    {passwordConfirm.length > 0 && (
                        <Styled.CheckText id='check' className={`message ${isPasswordConfirm ? 'success' : 'error'}`}>
                            {passwordConfirmMessage}
                        </Styled.CheckText>
                        )}
                    <Styled.SubmitButton disabled={isPasswordConfirm===false || isPassword===false || currentPassword==='' ? true : false}
                    onClick={onSubmit}>변경</Styled.SubmitButton>
                </Styled.FindWrapper>

            </Styled.Container>
        </Styled.Wrapper>
    )

}

export default PwChange;