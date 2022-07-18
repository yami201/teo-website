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
        position: absolute;
        font-size: 26px;
        @media screen and (max-width: 1150px){
            font-size: 20px;
        }
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

    @media screen and (min-width: 850px){
        &:first-child{
            right: 10vw;
        }
        &:nth-child(2){
            right: 36.6vw;
        }
        &:nth-child(3){
            right: 63.2vw;
        }
        &:last-child{
            right: 90vw;
        }
    };
    @media screen and (max-width: 850px){
        &:first-child{
            right: 15vw;
        }
        &:nth-child(2){
            right: 50vw;
        }
        &:last-child{
            right: 85vw;
        }
    };
`
export const HorizentalLine = styled.span`
    ${lineStyle(false)}

    @media screen and (min-width: 850px){
        &:first-child{
            top: 25vh;
        }
        &:last-child{
            top: 75vh;
        }

    };
    @media screen and (max-width: 850px){
        &:first-child{
            top: 10vh;
        }
        &:nth-child(2){
            top: 36.6vh;
        }
        &:nth-child(3){
            top: 63.2vh;
        }
        &:last-child{
            top: 90vh;
        }
    };
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
                        top:calc(60vh - 0.2vh);
                    }
                    ${HorizentalLine}:last-child{
                        opacity:0.5;
                        top:calc(calc(60vh + 0.1vh) + 2.5em);
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
    @media screen and (min-width:850px){
        ${({state}) => {
            if(state){
                return  (
                    `${VerticalLine}:nth-child(2){
                        opacity:0.5;
                        right:calc(calc(27vw + 0.1vw) + 8em)
                    }
                    ${VerticalLine}:first-child{
                        opacity:0.5;
                        right: calc(27vw - 0.1vw);
                    }`
                )
            }
            
        }}
    }
    @media screen and (max-width:850px){
        ${({state}) => {
            if(state){
                return  (
                    `${VerticalLine}:nth-child(2){
                        opacity:0.5;
                        right:calc(calc(10vw + 0.1vw) + 8em)
                    }
                    ${VerticalLine}:first-child{
                        opacity:0.5;
                        right: calc(10vw - 0.1vw);
                    }`
                )
            }
            
        }}
    }
`