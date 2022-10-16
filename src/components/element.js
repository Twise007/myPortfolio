import styled from "styled-components"


export const Title = styled.div` 
    background: var(--color-white);
    color: var(--color-red);
    text-transform: capitalize;
    padding: 20px;
    font-size: 24px;
    text-align: center;
    cursor: pointer;
    p{  
        padding-top: 1px;
        text-transform: capitalize;
    }
`

export const Section = styled.div`
    background: var(--color-white);
    align-items: center;
    justify-content: center;
    padding:50px 150px 20px 150px; 
    @media (max-width: 770px) {
            padding-left: 70px;
            padding-right: 70px;
    }

    @media (max-width: 500px) {
            padding-left: 10px;
            padding-right: 10px;
    }
` 

export const Containers = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    background: #efefef;
    padding: 15px;
    border-radius: 25px;
    @media (min-width: 770px) {
        
    }
    
    
`

export const Btn = styled.div`
   background: var(--color-secondary);
   color: var(--color-white);
   text-align: center;
   cursor: pointer;
   width: max-content;
   padding-top: 10px;
   padding-bottom: 10px;
    padding-left: 16px ;
    padding-right: 16px ;
    font-size: 14px ;
    font-weight: 600;
    text-transform: uppercase;
    border-width: 5px;
    border-radius: 10px;
`

