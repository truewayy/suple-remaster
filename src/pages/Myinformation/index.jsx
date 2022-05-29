import {React, useState, useEffect } from 'react'
import Modal from 'react-modal';
import { myInfoApi } from '../../API/api'
import PostingDetail from '../../components/PostingDetail';
import * as Styled from './styled'

const ModalStyle = {
    overlay: {
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: 'rgba(0, 0, 0, 0.4)',
      zIndex: 100,
    },
    content: {
      display: 'flex',
      justifyContent: 'center',
      background: '#ffffff',
      overflow: 'auto',
      maxWidth: '500px',
      minWidth: '300px',
      maxHeight: '500px',
      left: '50%',
      top: '20%',
      transform: 'translate(-50%, 2%)',
      WebkitOverflowScrolling: 'touch',
      borderRadius: '14px',
      outline: 'none',
      zIndex: 100,
    },
  };

export const MyPosting = (props) => {
    const [modalIsOpen, setModalIsOpen] = useState(false);
    let title = props.title
    let content = props.content
    if (title.length >= 11) {
        title = props.title.substr(0, 11) + '...';
      }
    if (content.length >= 30) {
        content = props.content.substr(0, 30) + '...';
    }

    return(
        <div>
            <Styled.myPostingWrapper onClick={()=>setModalIsOpen(true)}>
                <Styled.PostingTitle>{title}</Styled.PostingTitle>
                <Styled.PostingContent>{content}</Styled.PostingContent>
                <Styled.ButtonGroup>
                    <Styled.EditButton>수정</Styled.EditButton>
                    <Styled.DeleteButton>삭제</Styled.DeleteButton>
                </Styled.ButtonGroup>
            </Styled.myPostingWrapper>
            <Modal
                isOpen={modalIsOpen}
                style={ModalStyle}
                // 오버레이나 esc를 누르면 핸들러 동작
                ariaHideApp={false}
                onRequestClose={() => setModalIsOpen(false)}
                >
                <PostingDetail setModalIsOpen={setModalIsOpen} title={props.title} content={props.content} 
                    stack={props.stack} contact={props.contact} date={props.date} />
            </Modal>

        </div>
    
    )
}

export const MyPostingList = (props) => {
    return(
        props.post && props.post.map((v,i)=>{
            return(
                <MyPosting title={v.title} stack={v.stack} content={v.content} contact={v.contact} key={v.post_key} date={v.date_format} />
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