import {React, useState} from 'react'
import { AppSelect, BackSelect, FrontSelect } from '../../components/StackSelect';
import * as Styled from './styled'

export const StackSelect = (props) => {
    
    return props.field==='0' ? (
        <FrontSelect setStack={props.setFront} stack={props.front}/>
    ) : props.field==='1' ? (
        <BackSelect setStack={props.setBack} stack={props.back}/>
    ) : props.field==='2' ? (
        <AppSelect setStack={props.setApp} stack={props.app}/>
    ) : null
}

const WriteForm = () => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [field, setField] = useState(``); //분야 선택
    const [front, setFront] = useState('');
    const [back, setBack] = useState('');
    const [app, setApp] = useState('')
    const fieldChange = (e) => {
        setField(e.target.value);
      };
    return(
        <Styled.FlexForm>
            <Styled.FormContainer>
                <Styled.FormText>글 쓰기</Styled.FormText>
                <Styled.FlexRow>
                    <Styled.FormText id='title'>제목</Styled.FormText>
                    <Styled.TitleInput rows={1} placeholder='제목을 입력하세요' onChange={(e)=>{setTitle(e.target.value)}}/>
                </Styled.FlexRow>
                <Styled.FlexRow id='field'>
                    <Styled.FormText id='url'>모집분야</Styled.FormText>
                    <Styled.Content id='content' onChange={fieldChange} style={{float:"left"}}>
                        <Styled.FormLabel>
                        <Styled.FormCheckLeft name="field" id="frontend" value="0" defaultChecked={field === "0"}/>
                        <Styled.FormCheckText>프론트엔드</Styled.FormCheckText>
                        </Styled.FormLabel>
                        <Styled.FormLabel>
                        <Styled.FormCheckLeft name="field" id="backend" value="1" defaultChecked={field === "1"}/>
                        <Styled.FormCheckText>백엔드</Styled.FormCheckText>
                        </Styled.FormLabel>
                        <Styled.FormLabel>
                        <Styled.FormCheckLeft name="field" id="app" value="2" defaultChecked={field === "2"}/>
                        <Styled.FormCheckText>앱</Styled.FormCheckText>
                        </Styled.FormLabel>
                    </Styled.Content>
                </Styled.FlexRow>
                <Styled.FlexRow id='stack'>
                    {field !== '' ? (<Styled.FormText id='subtext'>기술<br/></Styled.FormText>) : null}
                    {field==='0' ? 
                    <StackSelect field={field} front={front} setFront={setFront}/> : field==='1' ? 
                    <StackSelect field={field} back={back} setBack={setBack}/> : 
                    <StackSelect field={field} app={app} setApp={setApp}/>}
                </Styled.FlexRow>
                <Styled.FlexRow>
                    <Styled.FormText id='title'>내용</Styled.FormText>
                    <Styled.ContentTextArea rows={15} placeholder='프로젝트 소개 및 원하는 팀원을 적어주세요' onChange={(e)=>{setContent(e.target.value)}}/>
                </Styled.FlexRow>
                <Styled.FlexRow>
                    <Styled.FormText id='url'>오픈채팅<br />URL</Styled.FormText>
                    <Styled.TitleInput rows={1} placeholder='카카오톡 오픈채팅 URL' onChange={(e)=>{setTitle(e.target.value)}}/>
                </Styled.FlexRow>
            </Styled.FormContainer>
            <Styled.SubmitButton>작성하기</Styled.SubmitButton>
        </Styled.FlexForm>
    )
}

export default WriteForm