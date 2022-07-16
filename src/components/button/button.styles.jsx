import styled from 'styled-components';

const transitionSpeed = `700ms`
export const ButtonWrapper = styled.button`
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
