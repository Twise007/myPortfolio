import styled from "styled-components";


export const Timeline = styled.div`
  background: var(--color-white);
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 2rem;
  //padding: 50px;


  @media screen and (max-width: 700px) {
        grid-template-columns: repeat(1, 1fr);
        padding-bottom: 6rem;
    }
`

export const TimelineItem = styled.div`
  padding-left: 3rem;
  border-left: 1px solid var(--color-primary);
  h5{ 
  padding: 1rem 0;
  text-transform: uppercase;
  font-size: 1.3rem;
  font-weight: 600;
  }
`

export const TlIcon = styled.div`
  background-color: var(--color-secondary);
  color: var(--color-white);
  width: 50px;
  height: 50px;
  border-radius: 25%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 25px;
`
