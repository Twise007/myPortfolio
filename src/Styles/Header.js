import styled from "styled-components";


export const Head = styled.div`
        a{
          text-decoration: none;
          font-size: 15px;
          text-transform: uppercase;
          font-weight: 500;
          &:hover {
            color: var(--color-secondary);
              border-bottom: 3px solid var(--color-primary);
            }
        }
        @media (max-width: 800px) {
        display: none;
    }
`
export const NavMenu = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 30%;
    margin-right: 10px;

    display: flex;
    justify-content: center;
    align-items: center;
    background-color: var(--color-secondary);
    svg {
      width: 70%;
      height: 70%;
      color: var(--color-white);
      cursor: pointer;
    }
  
    div {
      position: fixed;
      height: 100%;
      top: 0;
      padding-top: 0px;
      align-items: center;

      margin-right: 14rem;
      z-index: 20;
      width: 20rem;
      display: flex;

      flex-direction: column;
      background: var(--color-white);
  
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
`


