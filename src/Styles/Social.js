import styled from "styled-components";

export const SocialIcon = styled.div`
        position: relative;
        display: flex;
        justify-content: center;
        li{
            position: relative;
            list-style: none;
            margin: 5px;
            a{
                position: relative;
                width: 40px;
                height: 40px;
                display: inline-block;
                border-radius: 10px;
                display: flex;
                align-items: center;
                justify-content: center;
                border: 1px solid rgba(255, 255, 255, 0.4);
                border-right: 1px solid rgba(255, 255, 255, 0.2);
                border-bottom: 1px solid rgba(255, 255, 255, 0.2);
                box-shadow: 0 5px 45px rgba(0,0,0,0.1);
                backdrop-filter: blur(2px); 
                font-size: 20px;
                color: var(--color-white);
                background: var(--color-secondary) ;
                transition: 0.5s;
                overflow: hidden;
                :hover{
                    transform: translateY(-10px);
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
            }
        }  
`