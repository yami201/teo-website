import styled, { css } from "styled-components";

const transitionSpeed = `700ms`

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
        transition: ${transitionSpeed};
    `
}
export const Grid = styled.div`
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
export const Container = styled.section`
    display: flex;
    align-items: center;
    height:100vh;
`
export const MeshContainer = styled.div`
    width: 57vw;
    height: 100%;
    background-color: black;
    display: flex;
    align-items: center;
    justify-content: center;
`
export const InfosContainer = styled.div`
    width: 43vw;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    z-index: 1;
`
export const LanguageSelectorContainer = styled.div`
    position: absolute;
    top: 50px;
    right: 100px;
    width: 50px;
    display: flex;
    justify-content: space-between;
    span{
        transform: translateY(-2px);
    }
`
export const LanguageSelector = styled.button`
    background-color: unset;
    border: none;
    outline: none;
    color:white;
    cursor: pointer;

    ${({selected}) => !selected ? `opacity:0.5`:``}
`
export const Name = styled.h1`
    font-family: serif;
    text-transform: lowercase;
    letter-spacing: 1px;
    font-size: 40px;
`
export const Subtitle = styled.p`
    font-size: 60px;
    text-transform: uppercase;
    letter-spacing: 3px;
    font-weight: 100;
`
export const DiscoverButton = styled.button`
    transform: translateY(-50px);
    width: 20vw;
    height: 7vh;
    padding: 2vh 0;
    text-transform: uppercase;
    letter-spacing: 1px;
    font-size: 26px;
    color:white;
    outline: none;
    border: none;
    display: flex;
    cursor: pointer;
    align-items: center;
    justify-content: center;
    transition: ${transitionSpeed} ease-in;
    border: 1px solid yellow;
    background-color: black;
    z-index: 0;
    &:hover{
        letter-spacing: 2px;
    }
    &::before{
        content: '';
        width: 20vw;
        height: 9vh;
        position: absolute;
        border-top: 1px solid yellow;
        border-bottom: 1px solid yellow;
        transition: transform ${transitionSpeed} ease;
    }
    &:hover::before{
        transform: scaleX(0);
    }
    &::after{
        content: '';
        width: 21vw;
        height: 7vh;
        position: absolute;
        border-right: 1px solid yellow;
        border-left: 1px solid yellow;
        transition: transform ${transitionSpeed} ease;
    }
    &:hover::after{
        transform:scaleY(0);
    }
`
export const ButtonBorder = styled.span`
    position: absolute;
    width: 20vw;
    height: 7vh;
    transition: transform ${transitionSpeed} ease;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 2;
    &::before{
        content: '';
        position: absolute;
        width: 21vw;
        height: calc(7vh - 2px);
        transition: transform ${transitionSpeed} ease;
        border-top: 1px solid yellow;
        border-bottom: 1px solid yellow;
    }
    &::after{
        content: '';
        position: absolute;
        width: calc(20vw - 2px);
        height: 9vh;
        transition: transform ${transitionSpeed} ease;
        border-left: 1px solid yellow;
        border-right: 1px solid yellow;
    }
    &:hover::before{
        transform: scaleX(0);
    }
    &:hover::after{
        transform: scaleY(0);
    }
`

export const Paragraph = styled.p`
    transform: translateY(-100px);
    width: 550px;
    font-size: 20px;
    opacity: 0.6;
`