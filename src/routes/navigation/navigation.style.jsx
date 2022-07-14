import styled from "styled-components";
import { Link } from "react-router-dom";


export const NavigationContainer = styled.div`
    height: 70px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 20px;
`
export const NavLinks = styled.div`
    width: 50%;
    display: flex;
    justify-content: space-between;

    &:first-child{
        background-color: red;
    }
`
export const NavLink = styled(Link)`
    padding: 0.5em;
    background-color: black;
    width: 5em;
    text-decoration: none;
    position: relative;
    color: white;
    font-size: 20px;
    text-transform: capitalize;
    transition: 500ms ease-in-out;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius:5px;
    &::before{
        content: '';
        position: absolute;
        width: 0;
        height: calc(100% + 2px);
        transition: 500ms ease-in;
        background-color: ${({color}) => color};
        box-shadow: 0 0 15px 0px ${({color}) => color};
        border-radius: 5px;
        z-index: -1;
    }
    &:hover::before{
        width: calc(5em + 2px);
        box-shadow: 0 0 7px 3px ${({color}) => color};
    }
`