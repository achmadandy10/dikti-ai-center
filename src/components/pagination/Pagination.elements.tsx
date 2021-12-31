import styled from "styled-components";

export const PaginationContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 20px;
`

export const PaginationList = styled.ul`
    display: flex;
    align-items: center;
    gap: 5px;
`

export const PaginationItem = styled.li`
    cursor: pointer;
    box-shadow: var(--bs-smooth);
    padding: 10px;
    border-radius: 4px;
    background-color: var(--container-color);
    transition: .3s ease;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 50px;

    &.active {
        background-color: var(--first-color);
        color: #FFFFFF;
    }
`