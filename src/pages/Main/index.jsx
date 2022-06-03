import React, { useState, useEffect } from "react"
import * as Styled from './styled'
import TeamList from "../../components/TeamList/index"
import { useNavigate } from "react-router-dom"
import moment from 'moment';
import 'moment/locale/ko';
import { mainApi } from "../../API/api";
import noticePath from '../../img/notice.png'
// designed by soo kyung

const Main = () => {
    let navigate = useNavigate();
    const [db, setData] = useState();
    useEffect(() => {
        mainApi(setData)
    },[])
    const nowTime = moment().format('YYYY년 M월 D일')
    const [search, setSearch] = useState();
    const [part, setPart] = useState('frontEnd');
    const handler = (e) => {
        console.log(part)
        setPart(e);        
    }
    console.log(search)
    const options = [
        {
          name: '프론트엔드',
          lec: 'frontEnd',
        },
        {
          name: '백엔드',
          lec: 'backEnd',
        },
        {
          name: '앱',
          lec: 'app',
        },
      ];

    return(
        <Styled.Wrapper>
            <Styled.Container>
                <Styled.SearchInput placeholder="원하는 기술스택, 제목으로 프로젝트를 검색해보세요!" onChange={(e)=>{setSearch(e.target.value)}}/>
                <Styled.SelectWrapper>
                    <Styled.MainTextBox>
                        <Styled.MainText>분야별로</Styled.MainText>
                        <Styled.MainText>나의 팀원들을 찾아보세요! <Styled.GrayText onClick={()=>navigate("/total")}>{'글 목록 >'}</Styled.GrayText>
                        <Styled.MobileGrayText onClick={()=>navigate("/total")}>{'글 목록 >'}</Styled.MobileGrayText>
                        </Styled.MainText>
                    </Styled.MainTextBox>
                    <Styled.CustomSelect defaultValue={'frontEnd'} onChange={handler}>
                        {options.map((index) => (
                            <Styled.StyledOption key={index.name} value={index.lec}>
                                {index.name}
                            </Styled.StyledOption>
                        ))}
                    </Styled.CustomSelect>
                </Styled.SelectWrapper>
                <Styled.ContentWrapper>
                    <Styled.NoticeWrapper onClick={()=>{navigate("notice")}}>
                        <Styled.NoticeContainer>
                            <Styled.MainText id="notice">오늘은 <Styled.PaddingBottom />{nowTime} 입니다.</Styled.MainText>
                            <Styled.NoticeImg src={noticePath} />
                        </Styled.NoticeContainer>
                        <Styled.NoticeContainer id="bottom">
                            <Styled.MainText id="bottom">오늘의 공지사항 →</Styled.MainText>
                        </Styled.NoticeContainer>
                    </Styled.NoticeWrapper>
                    <TeamList db={db}/>
                </Styled.ContentWrapper>
            </Styled.Container>
        </Styled.Wrapper>
    )
}

export default Main