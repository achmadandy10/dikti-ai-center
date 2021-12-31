import styled from "styled-components";

export const CardInfoContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 20px;
    border-radius: 4px;
    background-color: var(--container-color);
    box-shadow: var(--bs-smooth);
    padding: 20px;
`

export const CardInfoIcon = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: var(--h2-font-size);
    color: var(--first-color);
`

export const CardInfoDetail = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
`

export const CardInfoDetailTitle = styled.h3`
    font-size: var(--normal-font-size);
    color: var(--title-color);
    font-weight: var(--font-semi-bold);
`

export const CardInfoDetailItem = styled.span`
    font-size: var(--normal-font-size);
    color: var(--text-color);
    font-weight: var(--font-slim);
`