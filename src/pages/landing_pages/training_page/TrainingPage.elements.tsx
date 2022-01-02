import styled from "styled-components";

export const TrainingPageContainer = styled.div`
    padding: 20px 80px;
    width: 100%;

    @media Screen and (max-width: 960px) {
        padding: 20px;
    }
`

export const TrainingPageTitle = styled.h1`
    font-size: var(--big-font-size);
    color: var(--title-color);
    font-weight: var(--font-semi-bold);
`

export const TrainingPageCard = styled.div`
    height: 100%;
    box-shadow: var(--bs-smooth);
    background-color: var(--container-color);
    margin-top: 20px;
    padding: 20px;
    border-radius: 4px;
`

export const TrainingPageCardTitle = styled.h3`
    font-size: var(--h1-font-size);
    color: var(--title-color);
    font-weight: var(--font-semi-bold);
`