import styled, { css, keyframes } from 'styled-components';

const showStars = keyframes`
    from{opacity:0;}
    to{opacity:1;}
`
const showVerticalGrid = keyframes`
    from{transform:scaleY(0)}
    to{transform:scaleY(1)}
`
const showHorizentalGrid = keyframes`
    from{transform:scaleX(0)}
    to{transform:scaleX(1)}
`
export const StarsBackground = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    opacity: 0;
    animation: ${showStars} 4s ease forwards;
`
const lineStyle = (vertical) => {
    const dimension = 
        vertical ? 
            css`
                width: 1px;
                height: 100vh;
            ` : 
            css`
                width: 100vw;
                height: 1px;
            `
    return css`
        ${dimension}
        background-color: white;
        opacity: 0.1;
        transition: 700ms;
    `
}
export const GridContainer = styled.div`
    position: absolute;
    z-index: 0;
    width: 100vw;
    height: 100vh;
    overflow: hidden;
`
export const VerticalLine = styled.span`
    ${lineStyle(true)}
`
export const HorizentalLine = styled.span`
    ${lineStyle(false)}

`
export const HorizentalLinesContainer = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    transform: scaleX(0);
    animation: ${showHorizentalGrid} 4s ease forwards;
    ${({state}) => {
        if(state){
            return(
                `
                    ${HorizentalLine}:first-child{
                        opacity:0.5;
                        transform:translateY(28.6vh)
                    }
                    ${HorizentalLine}:last-child{
                        opacity:0.5;
                        transform:translateY(-14vh)
                    }
                `
            )
        }
    }}

`
export const VerticalLinesContainer = styled.div`
    position: absolute;
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: space-around;
    transform: scaleY(0);
    animation: ${showVerticalGrid} 4s ease forwards;
    ${({state}) => {
        if(state){
            return  (
                `${VerticalLine}:nth-child(3){
                    opacity:0.5;
                    transform: translateX(-5.6vw);
                }
                ${VerticalLine}:nth-child(4){
                    opacity:0.5;
                    transform: translateX(-10.4vw);
                }`
            )
        }
        
    }}
`