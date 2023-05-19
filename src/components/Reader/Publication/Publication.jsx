import {Title, PublicationContainer, PublicationText  } from "./Publication.styled";

export const Publication = ({item}) => {
    return  <article>
      <PublicationContainer>
    <Title>Тримай 10 фактів про котиків</Title>
    <PublicationText>
    <h2>{item.title}</h2>
    <p>{item.text}</p>
    </PublicationText>
    </PublicationContainer>
  </article>
}