import styled from "styled-components";


export const Head = styled.div`
        a{
          text-decoration: none;
          font-size: 15px;
          text-transform: uppercase;
          font-weight: 500;
          &:hover {
              color: var(--color-secondary);
              border-bottom: 2px solid var(--color-primary); 
            }
        }
        @media (max-width: 800px) {
        display: none;
    }
`
export const Nav_Menu = styled.div`
    width: 35px;
    height: 35px;
    border-radius: 50%;

    display: flex;
    justify-content: center;
    align-items: center;
    background-color: red;
    svg {
      width: 70%;
      height: 70%;
      color: var(--color-white);
      cursor: pointer;
    }
  
    div {
      position: fixed;
      top: 0;
      bottom: 0;
      right: 0;
      z-index: 20;
      padding: 15px;
      width: 60%;
      height: 100vh;
      display: flex;
      justify-content: flex-end;
      align-items: flex-end;
      flex-direction: column;
      background: url('../');
      background-color: var(--color-white);
      background-size: cover;
      background-repeat: repeat;
  
      /* top box shadow */
      box-shadow: 0px 0px 20px var(--color-secondary);
  
      svg {
        border-radius: 50%;
        width: 35px;
        height: 35px;
        padding: 4px;
        background: var(--color-secondary);
        color: var(--color-white);
        margin: 0.5rem 1rem;
      }
  
      ul {
        list-style: none;
        margin: 0;
        padding: 0;
        height: 100%;
        width: 100%;
        display: flex;
        justify-content: flex-start;
        align-items: flex-start;
        flex-direction: column;
        
  
        li {
          margin: 1rem;

          a {
            text-decoration: none;
            font-size: 15px;
            text-transform: uppercase;
            font-weight: 500;
            &:hover {
              color: var(--color-secondary);
              border-bottom: 3px solid var(--color-primary); 
              
            }
          }
        }
      }
  
      @media screen and (min-width: 800px) {
        display: none;
      }
    }
  
    @media screen and (min-width: 800px) {
      display: none;
    }
`


