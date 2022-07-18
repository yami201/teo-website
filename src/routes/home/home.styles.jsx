import styled, { keyframes } from "styled-components";

export const Container = styled.section`
    display: flex;
    align-items: center;
    height:100vh;

    @media screen and (max-width:850px){
        flex-direction: column;
    }
`
export const MeshContainer = styled.div`
    width: 57vw;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

    @media screen and (max-width:850px){
        transform: translateY(-5vh);
        width: 100vw;
    }
`
export const InfosContainer = styled.div`
    position: absolute;
    right: 0;
    font-size: 26px;
    width: calc(27vw + 9em);
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    z-index: 1;
    @media screen and (max-width:1150px){
        font-size: 20px;
    }
    @media screen and (max-width:850px){
        position: absolute;
        width: 100vw;
        height: 100vh;
    }
`
export const LogoContainer = styled.h1`
    font-family: serif;
    text-transform: lowercase;
    letter-spacing: 1px;
    font-size: 40px;

    @media screen and (max-width:850px){
        position: absolute;
        font-size: 28px;
        top: 40px;
        left: 30px;
    }
`


const typeAnimation = keyframes`
    0% {
        width:0;
    }
    1%, 99%{
        border-right: 5px solid yellow;
        opacity: 1;
    }
    100%{
        border-right: none;
        transform: scaleX(100%);
        opacity: 1;
    }
`
const showParagraph =(opacity) => keyframes`
    0%{
        opacity: 0;
    }
    100%{
        opacity: ${opacity};
    }
`
const blink = keyframes`
    from{border-right:none;}
    to{border-right:3px solid yellow;}
`


export const Subtitle = styled.div`
    font-size: 60px;
    text-transform: uppercase;
    letter-spacing: 3px;
    font-weight: 100;
    width: fit-content;
    span{
        opacity: 0;
        overflow: hidden;
        white-space: nowrap;
        display: block;
        z-index: 10;
    }
    span:first-child{
        width: 100%;
        animation: ${typeAnimation} 2s 500ms steps(40,end) forwards;
    }
    span:last-child{
        width: 85%;
        animation: ${typeAnimation} 2s 2.5s steps(40,end) forwards,
                ${blink} 1s 4.5s linear infinite;
    }
    @media screen and (max-width:1150px){
        span{
            font-size: 48px;
        }
    }
    @media screen and (max-width:850px){
        transform: translate(10vw,15vh);
        span{
            font-size: 36px;
        }
    @media screen and (max-width:450px){
        span{
            font-size: 30px;
        }
    }

    }
`
export const Paragraph = styled.p`
    width: 85%;
    font-size: 20px;
    opacity: 0;
    animation: ${showParagraph(0.6)} 2s  4s ease-in forwards;
    @media screen and (max-width:1150px) and (min-width: 850px){
        width: 95%;
        font-size: 18px;
    }
    @media screen and (max-width:850px){
        transform: translateY(10vh);
        margin-left: 10vw;
        animation-name: ${showParagraph(1)};

    }
`