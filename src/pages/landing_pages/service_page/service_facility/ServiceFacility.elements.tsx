import styled from "styled-components";

export const ServiceFacilityContainer = styled.div`
    padding: 20px 80px;
    width: 100%;

    @media Screen and (max-width: 960px) {
        padding: 20px;
    }
`

export const ServiceFacilityTitle = styled.h1`
    font-size: var(--big-font-size);
    font-weight: var(--font-semi-bold);
    color: var(--title-color);
`

export const ServiceFacilityCard = styled.div`
    height: 100%;
    box-shadow: var(--bs-smooth);
    background-color: var(--container-color);
    margin-top: 20px;
    border-radius: 4px;
    padding: 20px;
    display: flex;
    gap: 20px;

    @media Screnn and (max-width: 960px) {
        flex-direction: column;
    }
`

export const ServiceFacilityCardTitle = styled.h3`
    font-size: var(--h1-font-size);
    color: var(--first-color);
    font-weight: var(--font-semi-bold);
    text-align: center;
`

export const ServiceFacilityCardDetail = styled.div`
    font-size: var(--normal-font-size);
    font-weight: var(--font-skinny);
    color: var(--text-color);
    width: 100%;
`

export const ServiceFacilityCardImageContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: cetenr;
    width: 100%;
`

export const ServiceFacilityCardImage = styled.img`
    width: 100%;
`