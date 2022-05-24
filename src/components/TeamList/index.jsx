import * as Styled from './styled'

export const Team = (props) => {
    let tag = ['React.js','Node.js','Spring','Flutter']
    return(
      <Styled.Wrapper>
          <Styled.TagBox>
            {tag.filter((v,i)=>!(i%2))
            .map((v,i)=>(
                <Styled.ContentTag key={i}>#{v}</Styled.ContentTag>
            ))}
          </Styled.TagBox>
          <Styled.TagBox id='bottom'>
            {tag.filter((v,i)=>(i%2))
            .map((v,i)=>(
                <Styled.ContentTag key={i}>#{v}</Styled.ContentTag>
            ))}
          </Styled.TagBox>
          <Styled.ContentTitle>{props.title}</Styled.ContentTitle>
          <Styled.ContentDate>2022.04.28</Styled.ContentDate>
      </Styled.Wrapper>
    )
  
  }
  
const TeamList = () => {
          
    const teamDB = [
        {
            title: "리액트 잘하시는분 무조건 모셔갑니다",
            content: ""
        },
        {
            title: "스프링 잘하시는분 무조건 모셔갑니다",
            content: ""
        },
        {
            title: "플러터 잘하시는분 무조건 모셔갑니다",
            content: ""
        },
        {
            title: "노드js 구합니다 무조건 모셔갑니다",
            content: ""
        },
        {
          title: "노드js 구합니다 무조건 모셔갑니다",
          content: ""
      },
      {
        title: "노드js 구합니다 무조건 모셔갑니다",
        content: ""
    },
    
    ] 
  return(
      teamDB.map((v,i)=>{
          return(
            <Team title={v.title} content={v.content} key={i}/>
          )
      }))
  }

export default TeamList