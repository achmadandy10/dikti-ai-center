import { Link } from "react-router-dom";
import styled from "styled-components";

export const DropdownList = styled.ul`
    position: absolute;
    left: 0;
    width: 200px;
    background: var(--container-color);
    box-shadow: var(--bs-smooth);
    border-radius: 4px;
    transition: .3s ease;
    visibility: hidden;
    opacity: 0;
    transform: translateY(20px);
    z-index: 100;
    
    &.show {
        visibility: visible !important;
        opacity: 1 !important;
        transform: translateY(0) !important;
    }

    &.clicked {
        visibility: hidden;
        opacity: 0;
        transform: translateY(20px);
    }

    @media Screen and (max-width: 960px) {
        position: relative;
        width: 100%;
        box-shadow: none;
        border-top: 1px solid var(--title-color);
        border-bottom: 1px solid var(--title-color);
        border-radius: 0;

        display: none;

        &.show {
            display: block;
        }

        &.clicked {
            display: none;
        }
    }
`

export const DropdownItem = styled.li`
    width: 100%;
    cursor: pointer;
    &:not(:nth-of-type(1)) {
        border-top: 1px solid var(--first-color);
    }
`

export const DropdownLink = styled(Link)`
    display: block;
    font-size: var(--normal-font-size);
    width: 100%;
    height: 100%;
    color: var(--title-color);
    padding: 16px;
`