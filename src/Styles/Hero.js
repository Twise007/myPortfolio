import styled, { keyframes } from "styled-components";

export const Herosection = styled.div`
            padding-top: 100px;
            padding-bottom: 100px;
            padding-right: 35px;
            padding-left: 70px;
            @media (max-width: 1020px){
                padding-top: 50px;
            }          
        .max-w-sm{
            @media (max-width: 500px) {
                max-width: 250px; 
            }
        }
        .p2 {
            font-size: 20px;
            @media (max-width: 400px) {
                font-size: 15px;
            }
        }
        .p3 {
            font-size: 30px;
            @media (max-width: 400px) {
                font-size: 20px;
            }
        }
    
`

const textanimate = keyframes`
   40%, 60%{
       left: calc(100% + 5px);
  }
  100% {
        left: 0%;
  }
`;

export const Textz = styled.div`
    position: relative;
    color: var(--color-secondary);
    font-size: 30px;
    font-weight: 600;
    width: max-content;
    @media (max-width: 500px) {
        font-size: 20px;
    }
    @media (max-width: 400px) {
        font-size: 14px;
    }
    .text{
        padding-left: 20px;
    }
    .text::before{      
        content: '';
        height: 100%;
        width: 100%;
        position: absolute;
        overflow: hidden;
        left: 0;
        background: var(--color-white);
        border-left: 2px solid var(--color-secondary);
        animation: ${textanimate} 10s steps(16) infinite;
    }
`



