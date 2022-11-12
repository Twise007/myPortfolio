import styled from "styled-components";


export const Timeline = styled.div`
  background: var(--color-white);
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 3rem;
  //padding: 50px;


  @media screen and (max-width: 700px) {
        grid-template-columns: repeat(1, 1fr);
        padding-bottom: 30px;
    }
`

export const TimelineItem = styled.div`
  padding-left: 20px;
  border-left: 1px solid var(--color-primary);
  transition: .5s;
  &:hover{
    border: 1px solid var(--color-primary);
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
  Bs{
    ::before{
                    content: '';
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 50px;
                    height: 100%;
                    background: rgba(255, 255, 255, 0.5);
                    transform: skewX(45deg) translateX(150px);
                    transition: 0.5s;
                }
                :hover::before{
                    transform: skewX(45deg) translateX(-150px);   
                }
  }
`
