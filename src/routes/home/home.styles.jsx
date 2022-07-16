import styled, { keyframes } from "styled-components";

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
export const Name = styled.h1`
    font-family: serif;
    text-transform: lowercase;
    letter-spacing: 1px;
    font-size: 40px;
`


const typeAnimation = keyframes`
    0% {
        width: 0;
    }
    1%, 99%{
        border-right: 5px solid yellow;
        opacity: 1;
    }
    100%{
        border-right: none;
        opacity: 1;
    }
`
const blink = keyframes`
    0%{
        border-right: 5px solid yellow;
    }
    100%{
        border-right: none;
    }
`
const showElement = keyframes`
    0%{
        opacity: 0;
    }
    100%{
        opacity: 0.6;
    }
`


export const Subtitle = styled.div`
    font-size: 60px;
    text-transform: uppercase;
    letter-spacing: 3px;
    font-weight: 100;
    span{
        opacity: 0;
        overflow: hidden;
        white-space: nowrap;
        display: block;
    }
    span:first-child{
        width: 30vw;
        animation: ${typeAnimation} 2s 500ms steps(40,end) forwards;
    }
    span:last-child{
        width: 25vw;
        animation: ${typeAnimation} 2s 2.5s steps(40,end) forwards,
                ${blink} 0.6s 4.5s linear infinite;
    }
`
export const Paragraph = styled.p`
    transform: translateY(-100px);
    width: 550px;
    font-size: 20px;
    opacity: 0;
    animation: ${showElement} 2s  4s ease-in forwards;
`