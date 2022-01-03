import styled from "styled-components";

export const ServiceResearchContainer = styled.div`
    padding: 20px 80px;
    width: 100%;

    @media Screen and (max-width: 960px) {
        padding: 20px;
    }
`

export const ServiceResearchTitle = styled.h1`
    font-size: var(--big-color);
    color: var(--title-color);
    font-weight: var(--font-semi-bold);
`

export const ServiceResearchCard = styled.div`
    height: 100%;
    box-shadow: var(--bs-smooth);
    background-color: var(--container-color);
    margin-top: 20px;
    border-radius: 4px;
`

export const ServiceResearchCardTitle = styled.h3`
    font-size: var(--h1-font-size);
    color: var(--first-color);
    font-weight: var(--font-semi-bold);
    text-align: center;
`

export const ServiceResearchCardContent = styled.div`
    margin-top: 20px;
    padding: 20px;
    display: flex;
    flex-direction: column;
    gap: 20px;
`

export const ServiceResearchList = styled.div`
    display: grid;
    grid-template-columns: 50px auto;
    gap: 20px;
`

export const ServiceResearchNumber = styled.div`
    background-color: var(--first-color);
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    font-size: var(--h1-font-size);
    color: var(--container-color);
`

export const ServiceResearchText = styled.div`
    font-size: var(--h1-font-size);
    font-weight: var(--font-semi-bold);
`