import styled from "styled-components";

export const AboutVissionContainer = styled.div`
    padding: 20px 80px;
    width: 100%;
    
    @media Screen and (max-width: 960px) {
        padding: 20px;
    }
`

export const AboutVissionTitle = styled.h1`
    font-size: var(--big-font-size);
    color: var(--title-color);
    font-weight: var(--font-semi-bold);
`

export const AboutVissionContent = styled.div`
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    gap: 20px;
`

export const AboutVissionCard = styled.div`
    height: 100%;
    box-shadow: var(--bs-smooth);
    background-color: var(--container-color);
    margin-top: 20px;
    padding: 20px;
    
    &.vission {
        background-color: var(--first-color);
    }

    &.mission {
        background-color: var(--warning-color);
    }
`

export const AboutVissionCardTitle = styled.h3`
    font-size: var(--h1-font-size);
    color: var(--container-color);
    font-weight: var(--font-semi-bold);
    text-align: center;
`

export const AboutVissionCardDetail = styled.div`
    margin-top: 20px;
    font-size: var(--normal-font-size);
    color: var(--container-color);
    font-weight: var(--font-slim);
    text-align: justify;

    display: flex;
    align-items: center;
    gap: 20px;

    &.vission {
        flex-direction: row-reverse;
        
        @media Screen and (max-width: 960px) {
            flex-direction: column;
        }
    }

    @media Screen and (max-width: 960px) {
        flex-direction: column;
    }

    & ul {
        list-style: decimal;
        display: flex;
        flex-direction: column;
        gap: 20px;
        padding: 0 20px;
    }
`

export const AboutVissionCardImageContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`

export const AboutVissionCardImage = styled.img`
    width: 100%;
`