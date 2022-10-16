import styled from "styled-components";


export const Footercontainer = styled.div`
    margin-top: 100px;
    position: relative;
    width: 100%;
    background: var(--color-secondary);
    min-height: 100px;
    padding: 20px 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    .socialIcon{
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 10px 0;
        flex-wrap: wrap;
        li{
            list-style: none;
            a{
                font-size: 30px;
                color: var(--color-white);
                margin: 0 10px;
                display: inline-block;
                transition: 0.5s;
                :hover{
                    transform: translateY(-10px);
                }

            }
        }

    }
    p{
        color: var(--color-white);
        text-align: center;
        margin-top: 15px;
        margin-bottom: 10px;
        font-size: 20px;
    }   
`

export const Waves = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    overflow: hidden;
    line-height: 0;
    
     .svg {
        position: relative;
        display: block;
        width: calc(120% + 1.3px);
        height: 161px;
    }
    .shape-fill {
        fill:  #efefef;
    }
`