import {React, useState, useCallback, useEffect} from 'react'
import * as Styled from './styled'
import { TextField } from '@material-ui/core';
import { checkEmailApi, checkIdApi, signUpApi, submitCodeApi } from '../../API/api';
import { useNavigate } from 'react-router-dom';

const SignUp = () => {
    const navigate = useNavigate();
    const [db, setData] = useState({
        data: ''
    });
    const [loading, setLoading] = useState(false);
    const [username, setUsername] = useState('');
    const [nameMessage, setNameMessage] = useState('');
    const [isName, setIsName] = useState(false);

    const [password, setPassword] = useState('');
    const [passwordConfirm, setPasswordConfirm] = useState('');
    const [passwordMessage, setPasswordMessage] = useState('');
    const [passwordConfirmMessage, setPasswordConfirmMessage] = useState('');
    const [isPassword, setIsPassword] = useState(false);
    const [isPasswordConfirm, setIsPasswordConfirm] = useState(false);
    
    const [email, setEmail] = useState('');
    const [isEmail, setIsEmail] = useState(false);
    const [emailMessage, setEmailMessage] = useState('');

    const [code, setCode] = useState('');
    const [isCode, setIsCode] = useState(false);
    const [inputCode, setInputCode] = useState();
    const [checkCode, setCheckCode] = useState(false);

    // 아이디 중복확인
    const [checkID, setCheckID] = useState(false);
    const [checkEmail, setCheckEmail] = useState(false);

    // 아이디
    const onChangeName = useCallback((e) => {
        setUsername(e.target.value);
        setCheckID(false);
        if (e.target.value.length < 6) {
          setNameMessage('아이디는 6자리 이상 입력해주세요.');
          setIsName(false);
        } else if (e.target.value.length > 20) {
          setNameMessage('아이디는 20자리 이하로 입력해주세요.');
          setIsName(false);
        } else if (e.target.value.length > 6 || e.target.value.length < 20) {
          setNameMessage('아이디 중복확인해주세요.');
          setIsName(true);
        }
      }, []);

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

    // 이메일
    const onChangeEmail = useCallback((e) => {
        const emailRegex =
        /([\w-.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
        const emailCurrent = e.target.value;
        setEmail(emailCurrent);
        setCheckEmail(false);
        if (!emailRegex.test(emailCurrent)) {
        setEmailMessage('이메일 형식이 틀렸습니다.');
        setIsEmail(false);
        } else {
        setEmailMessage('사용 가능한 이메일입니다.');
        setIsEmail(true);
        }
    }, []);

    const signUp = () => {
        if(checkID===false) {
            alert("아이디 중복확인이 필요합니다");
        } else if(checkEmail===false) {
            alert("이메일 중복확인이 필요합니다");
        } else if(isPasswordConfirm===false || isPassword===false) {
            alert("비밀번호를 확인해주세요")
        }
        else {
            signUpApi(setData, setLoading, username, password, email)
            }
        }
    useEffect(() => {
        if (loading) {
            if (db.data !== null) {
            alert('회원가입 성공');
            navigate('/');
            } else {
            alert('회원가입 실패');
            }
        }
        });
    const IDcheck = () => {
        checkIdApi(setCheckID, username)
    }

    const EmailCheck = () => {
        if(email.includes('@suwon.ac.kr')===false) {
            alert("수원대학교 이메일을 입력해주세요")
        } else {
            checkEmailApi(setCheckEmail, email)
        }
    }

    const SubmitCode = () => {
        submitCodeApi(setIsCode, setCode, email)
    }

    const CheckCode = () => {
        console.log(inputCode, code);
        if(parseInt(inputCode)===code) {
            setCheckCode(true);
            alert("인증이 완료되었습니다")
        }
        else {
            setCheckCode(false);
            alert("인증 번호가 일치하지 않습니다")
        }
    }

    return(
        <Styled.Wrapper>
            <Styled.Container>

                <Styled.LoginWrapper>
                    <Styled.SignupText>회원가입</Styled.SignupText>
                    
                    <TextField label="아이디" style={{paddingBottom:"10px", width:"80%"}}
                       onChange={onChangeName} /><Styled.OverlapButton onClick={IDcheck} disabled={isName===false ? true : false}>중복확인</Styled.OverlapButton>
                    {username.length > 0 && (
                        <Styled.CheckText id='check' className={`message ${isName ? 'success' : 'error'}`}>
                            {nameMessage}
                        </Styled.CheckText>
                        )}
                    <TextField fullWidth type="password" label="비밀번호" style={{paddingBottom:"10px"}}
                       onChange={onChangePassword} />
                    {password.length > 0 && (
                        <Styled.CheckText id='check' className={`message ${isPassword ? 'success' : 'error'}`}>
                            {passwordMessage}
                        </Styled.CheckText>
                        )}
                    <TextField fullWidth type="password" label="비밀번호 확인" style={{paddingBottom:"10px"}}
                       onChange={onChangePasswordConfirm} />
                    {passwordConfirm.length > 0 && (
                        <Styled.CheckText id='check' className={`message ${isPasswordConfirm ? 'success' : 'error'}`}>
                            {passwordConfirmMessage}
                        </Styled.CheckText>
                        )}
                    <TextField label="학교 이메일 (@suwon.ac.kr)" style={{paddingBottom:"10px", width:"80%"}}
                       onChange={onChangeEmail} /><Styled.OverlapButton onClick={EmailCheck} disabled={isEmail===false ? true : false}>중복확인</Styled.OverlapButton>
                    {email.length > 0 && (
                        <Styled.CheckText id='email' className={`message ${isEmail ? 'success' : 'error'}`}>
                            {emailMessage}
                        </Styled.CheckText>
                        )}
                    {checkEmail===true ? 
                        <div style={{width:"100%", marginTop:"20px"}}>
                        <TextField label="인증코드 6자리 입력" style={{paddingBottom:"10px", width:"60%"}}
                            onChange={(e)=>setInputCode(e.target.value)} />
                            <Styled.OverlapButton id='code' disabled={checkEmail===false ? true : false}
                            onClick={SubmitCode}>코드전송</Styled.OverlapButton>
                            <Styled.OverlapButton id='code' disabled={isCode===false ? true : false} onClick={CheckCode}>코드확인</Styled.OverlapButton>
                        </div> : null
                    }
                    <Styled.CheckText>* 수원대 메일 인증 후 서비스 이용 가능합니다</Styled.CheckText>
                    <Styled.LoginButton disabled={checkID===false || checkEmail===false || isPasswordConfirm===false || checkCode===false ? true : false} onClick={signUp}>회원가입</Styled.LoginButton>
                </Styled.LoginWrapper>

            </Styled.Container>
        </Styled.Wrapper>
    )

}

export default SignUp;