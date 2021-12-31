import styled from "styled-components";

export const AboutUsContainer = styled.div`
    padding: 20px 80px;
    width: 100%;

    @media Screen and (max-width: 960px) {
        padding: 20px;
    }
`

export const AboutUsTitle = styled.h1`
    font-size: var(--h1-font-size);
    color: var(--title-color);
    font-weight: var(--font-semi-bold);
`

export const AboutUsContent = styled.div`
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    gap: 20px;
`

export const AboutUsCard = styled.div`
    height: 100%;
    box-shadow: var(--bs-smooth);
    background-color: var(--container-color);
    margin-top: 20px;
    padding: 20px;
`

export const AboutUsCardTitle = styled.h3`
    font-size: var(--h1-font-size);
    color: var(--first-color);
    font-weight: var(--font-semi-bold);
    text-align: center;
`

export const AboutUsCardDetail = styled.div`
    margin-top: 20px;
    font-size: var(--normal-font-size);
    color: var(--text-color);
    font-weight: var(--font-slim);
    text-align: justify;

    & ul {
        list-style: decimal;
        display: flex;
        flex-direction: column;
        gap: 20px;
        padding: 20px;
    }
`