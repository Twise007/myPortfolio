import styled from "styled-components"


export const Title = styled.div`
    color: var(--color-red);
    text-transform: capitalize;
    padding: 20px;
    padding-bottom: 10px;
    font-size: 24px;
    text-align: center;
    background: initial;
    border: rgba(255, 255, 255, 0.2);
    border-radius: 10px;
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.2);
    backdrop-filter: blur(5px);
    p{  
        padding-top: 1px;
        text-transform: capitalize;
    }
`

export const Section = styled.div`
    background: var(--color-white);
    align-items: center;
    justify-content: center;
    padding:50px 20px 20px 20px; 
    @media (max-width: 770px) {
            padding-left: 20px;
            padding-right: 20px;
    }

    @media (max-width: 500px) {
            padding-left: 10px;
            padding-right: 10px;
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
export const Purple = styled.div`
    padding-top: 30px;
    background: var(--color-secondary);
    margin-top: 20px;
    padding: 50px;
    color: var(--color-white);
    @media (max-width: 500px) {
            padding-left: 10px;
            padding-right: 10px;
    }
`
