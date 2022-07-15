import styled, { css } from "styled-components";

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
        transition: 0.5s;
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
                        transform:translateY(237px)
                    }
                    ${HorizentalLine}:last-child{
                        opacity:0.5;
                        transform:translateY(-117px)
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
                    transform: translateX(-80px);
                }
                ${VerticalLine}:nth-child(4){
                    opacity:0.5;
                    transform: translateX(-218px);
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
    width: 220px;
    height: 55px;
    padding: 10px 0;
    text-transform: uppercase;
    letter-spacing: 1px;
    font-size: 26px;
    color:white;
    transition: 500ms ease-in;
    outline: none;
    border: none;
    display: flex;
    cursor: pointer;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    border-radius: 10px;
    &::before{
        content: '';
        position: absolute;
        border-style: solid;
        z-index: 0;
        border-width: 275px 1100px 0 0;
        border-color: #1ba7de #18586f #000000 #000000;
        transition: 500ms ease-in-out;

    }
    &:hover{
        letter-spacing: 2px;
    }
    &:hover::before{
        transform: rotate(180deg);
    }
    span{
        z-index: 1;
    }
`
export const Paragraph = styled.p`
    transform: translateY(-100px);
    width: 550px;
    font-size: 20px;
    opacity: 0.6;
`