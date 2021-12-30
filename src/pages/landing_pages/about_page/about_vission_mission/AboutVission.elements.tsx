import styled from "styled-components";

export const AboutVissionContainer = styled.div`
    padding: 20px 80px;
    width: 100%;
`

export const AboutVissionTitle = styled.h1`
    font-size: var(--h1-font-size);
    color: var(--title-color);
    font-weight: var(--font-semi-bold);
`

export const AboutVissionContent = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
`

export const AboutVissionCard = styled.div`
    height: 100%;
    box-shadow: var(--bs-smooth);
    background-color: var(--container-color);
    margin-top: 20px;
    padding: 20px;
`

export const AboutVissionCardTitle = styled.h3`
    font-size: var(--h1-font-size);
    color: var(--first-color);
    font-weight: var(--font-semi-bold);
`

export const AboutVissionCardDetail = styled.div`
    font-size: var(--normal-font-size);
    color: var(--text-color);
    font-weight: var(--font-slim);
    text-align: justify;

    & ul {
        list-style: dot;
        display: flex;
        flex-direction: column;
        gap: 20px;
        padding: 20px;
    }
`