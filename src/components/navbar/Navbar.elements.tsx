import { Link } from "react-router-dom";
import styled from "styled-components";

export const NavbarContainer = styled.header`
    position: sticky;
    top: 0;
    left: 0;
    right: 0;
    z-index: var(--z-modal);
    background-color: var(--rgba-color-container);
    backdrop-filter: saturate(180%) blur(20px);
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px 80px;

    @media Screen and (max-width: 960px) {
        padding: 20px;
    }
`

export const NavbarLogo = styled(Link)`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
`

export const NavbarLogoImg = styled.img`
    height: 50px;

    @media Screen and (max-width: 960px) {
        height: 30px;
    }
`

export const NavbarMenu = styled.nav`

    @media Screen and (max-width: 960px) {
        position: absolute;
        top: 100%;
        left: -100%;
        transition: .3s ease;
        background: var(--container-color);
        border-top: 1px solid var(--title-color);
        width: 100%;

        &.active {
            left: 0;
        }
    }
`

export const NavbarToggle = styled.div`
    display: none;

    @media Screen and (max-width: 960px) {
        display: block;
    }
`

export const NavbarList = styled.ul`
    list-style: none;
`

export const NavbarItem = styled.li`
    position: relative;
    float: left;

    @media Screen and (max-width: 960px) {
        width: 100%;
    }
`

export const NavbarLink = styled(Link)`
    font-size: var(--normal-font-size);
    padding: 7px 20px;
    color: #333;
    display: flex;
    align-items: center;
    gap: 10px;
    transition: .3s ease;

    & svg {
        font-size: var(--small-font-size);
    }
`