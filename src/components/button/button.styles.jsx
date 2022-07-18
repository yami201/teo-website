import styled from 'styled-components';

const transitionSpeed = `700ms`
const buttonDimensions = {
    width:`8em`,
    height:`2.5em`,
}
export const ButtonWrapper = styled.button`
    transform: translateY(-50px);
    width: ${buttonDimensions.width};
    height: ${buttonDimensions.height};
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
    transition: letter-spacing ${transitionSpeed} ease-in;
    border: 1px solid yellow;
    background-color: black;
    z-index: 100;
    position: absolute;
    transform-origin: 100% 50% 0;
    transform: rotateZ(360deg);
    top: 60vh;
    right: 27vw;
    &:hover{
        letter-spacing: 2px;
    }
    &::before{
        content: '';
        width: ${buttonDimensions.width};
        height: calc(${buttonDimensions.height} + 0.5em);
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
        width: calc(${buttonDimensions.width} + 0.5em);
        height: ${buttonDimensions.height};
        position: absolute;
        border-right: 1px solid yellow;
        border-left: 1px solid yellow;
        transition: transform ${transitionSpeed} ease;
    }
    &:hover::after{
        transform:scaleY(0);
    }
    @media screen and (max-width: 1150px){
        font-size: 20px;
    }
    @media screen and (max-width: 850px){
        right:10vw;
    }
`
export const ButtonBorder = styled.span`
    position: absolute;
    width: ${buttonDimensions.width};
    height: ${buttonDimensions.height};
    transition: transform ${transitionSpeed} ease;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 2;
    &::before{
        content: '';
        position: absolute;
        width: calc(${buttonDimensions.width} + 0.5em);
        height: calc(${buttonDimensions.height} - 2px);
        transition: transform ${transitionSpeed} ease;
        border-top: 1px solid yellow;
        border-bottom: 1px solid yellow;
    }
    &::after{
        content: '';
        position: absolute;
        width: calc(${buttonDimensions.width} - 2px);
        height: calc(${buttonDimensions.height} + 0.5em);
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
