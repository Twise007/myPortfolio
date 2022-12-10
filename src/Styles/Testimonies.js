import styled from "styled-components";

export const Containers = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    background: var(--color-white);
    padding: 15px;
    border-radius: 5px;
    @media (min-width: 770px) {   
    } 
`

export const Card = styled.div`
    @media screen and (max-width:300px){
        width: 180px;
    }
`

export const ImgContent = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 5px 0px;
    row-gap: 5px;
    background: var(--color-secondary);
    border-radius: 5px 5px 0px 0px;
`
export const CardImages = styled.div`
    height: 155px;
    width: 155px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    background: var(--color-white);
`
export const CardImage = styled.div`
    height: 150px;
    width: 150px;
    border-radius: 50%;
    .cardimg{
        height: 100%;
        width: 100%;
        object-fit: cover;
        border-radius: 50%;
        border: 4px solid var(--color-secondary);
    }
`

