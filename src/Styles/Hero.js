import styled from "styled-components";

export const Herosection = styled.div`
            padding-top: 100px;
            padding-bottom: 100px;
            height: max-content;
            h2{
                position: absolute;
                color: var(--color-secondary);
                top: 60px;
                font-size: 180px;
                font-weight: 900;
                font-family: fantasy;
                text-align: center;
                opacity: 0.04;
                @media (max-width: 700px){
                font-size: 120px;
            } 
            @media (max-width: 700px){
                font-size: 70px;
                top: 70px;
            } 
                }
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


export const Textz = styled.div`
    position: relative;
    color: var(--color-secondary);
    text-transform: capitalize;
    font-size: 30px;
    font-weight: 600;
    font-family: fantasy;
    @media (max-width: 500px) {
        font-size: 20px;
    }
    @media (max-width: 400px) {
        font-size: 14px;
    }
`



