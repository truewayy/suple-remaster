import {React, useState, useEffect} from 'react'
import { WrittenPostApi } from '../../API/api';
import PostList from '../../components/WrittenPostList';
import * as Styled from './styled'

const WrittenPost = () => {
    const [db, setData] = useState();

    useEffect(()=>{
        WrittenPostApi(setData);
    }, [setData])
    return(
        <Styled.Wrapper>
            <Styled.Container>
                <Styled.NoticeText>전체 글</Styled.NoticeText>
                <PostList db={db} />
            </Styled.Container>
        </Styled.Wrapper>
    )
}

export default WrittenPost