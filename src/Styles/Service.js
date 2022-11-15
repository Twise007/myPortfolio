import styled from "styled-components";


export const Timeline = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 3rem;
  padding-top: 20px;

  @media screen and (max-width: 700px) {
        grid-template-columns: repeat(1, 1fr);
        padding-bottom: 30px;
    }
`

export const TimelineItem = styled.div`
  padding-left: 20px;
  border-left: 1px solid;
  transition: .5s;
  &:hover{
    border: 1px solid;
    padding-top: 10px;
    padding-bottom: 5px;
    transition: ease-in-out .5s;
    border-radius: 10px;
  }
  h5{ 
  padding: 1rem 0;
  text-transform: uppercase;
  font-size: 1.3rem;
  font-weight: 600;
  }
  p{
    color: var(--color-white);
  }
`

export const TlIcon = styled.div`
  background-color: var(--color-white);
  color: var(--color-secondary);
  width: 50px;
  height: 50px;
  border-radius: 25%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 25px;
`
