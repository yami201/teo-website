import styled from 'styled-components';

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
export const Selector = styled.button`
    background-color: unset;
    border: none;
    outline: none;
    color:white;
    cursor: pointer;

    ${({selected}) => !selected ? `opacity:0.5`:``}
`