import * as Styled from './styled'

export const Team = (props) => {
    const stack = props.stack.split(', ');

    return(
      <Styled.Wrapper>
          <Styled.TagBox>
            {stack.filter((v,i)=>!(i%2))
            .map((v,i)=>(
                <Styled.ContentTag key={i}>#{v}</Styled.ContentTag>
            ))}
          </Styled.TagBox>
          <Styled.TagBox id='bottom'>
            {stack.filter((v,i)=>(i%2))
            .map((v,i)=>(
                <Styled.ContentTag key={i}>#{v}</Styled.ContentTag>
            ))}
          </Styled.TagBox>
          <Styled.ContentTitle>{props.title}</Styled.ContentTitle>
          <Styled.ContentDate>{props.date}</Styled.ContentDate>
      </Styled.Wrapper>
    )
  
  }
  
const TeamList = (props) => {
         
  return(
      props.db.map((v,i)=>{
          return(
            <Team title={v.title} content={v.content} date={v.date_format} key={i} stack={v.stack}/>
          )
      }))
  }

export default TeamList