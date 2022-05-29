import * as Styled from './styled'

export const Team = (props) => {
    const stack = props.stack.split(', ');
    let title = props.title
    if (title.length >= 25) {
      title = props.title.substr(0, 25) + '...';
    }
    return(
      <Styled.Wrapper>
        <Styled.TagWrapper>
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
        </Styled.TagWrapper>
        <Styled.ContentTitle>{title}</Styled.ContentTitle>
        <Styled.ContentDate>{props.date}</Styled.ContentDate>
      </Styled.Wrapper>
    )
  
  }
  
const TeamList = (props) => {
         
  return(
      props.db && props.db.map((v,i)=>{
          return(
            <Team title={v.title} content={v.content} date={v.date_format} key={i} stack={v.stack}/>
          )
      }))
  }

export default TeamList