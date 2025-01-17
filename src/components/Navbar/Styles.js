import styled from "styled-components";
export const Header = styled.header`
    background: #451E12;
    padding: 0 40px;
    width:100vw;
    height: 100px;
`;
export const Nav = styled.nav`
    width: 100%;
    height:100%;
    display: flex;
    justify-content:space-around;
    align-items: center;
`;
export const Button = styled.button`
    color: #DB9E71;
    font-size:40px;
    background: transparent;
    border:none;

    &:hover{
        transition: font-size 0.2s linear;
        -webkit-transition:font-size 0.3s;
        font-size: 50px;
        color: beige;
    }
`;