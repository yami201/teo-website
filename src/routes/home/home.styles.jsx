import styled from "styled-components";

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
export const Paragraph = styled.p`
    transform: translateY(-100px);
    width: 550px;
    font-size: 20px;
    opacity: 0.6;
`