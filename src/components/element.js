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
    position: relative;
    height: 40px;
    display: inline-block;
    background: var(--color-white);
    color:var(--color-secondary);
    text-align: center;
    cursor: pointer;
    width: max-content;
    padding: 10px 16px;
    font-size: 14px ;
    font-weight: 600;
    text-transform: capitalize;
    border: 1px solid var(--color-secondary);
    border-radius: 10px;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: 0.5s;
    overflow: hidden;
    :hover{
        border: none;
        background: rgb(237,237,237);
    }
    ::before{
        content:'';
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
`

