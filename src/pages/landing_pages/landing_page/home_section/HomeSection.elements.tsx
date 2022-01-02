import styled from "styled-components";
import Background from "../../../../images/colored-shapes.png"

export const HomeSectionContainer = styled.div`
    background-image: url(${Background});
    background-repeat: no-repeat;
    background-size: cover;
    height: calc(100vh - 90px);

    @media Screen and (max-width: 960px) {
        height: 100%;
    }
`

export const HomeSectionContent = styled.div`
    display: flex;
    justify-content: center;
    gap: 20px;
    width: 100%;
    height: 100%;
    padding: 20px 80px;
    background-color: var(--rgba-color-0-5-white);

    @media Screen and (max-width: 960px) {
        flex-direction: column;
        padding: 20px;
        height: 100%;
    }
`

export const HomeSectionLeft = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
`

export const HomeSectionTitle = styled.h1`
    font-size: var(--big-font-size);
    color: var(--title-color);
    font-weight: var(--font-bold);
`

export const HomeSectionDescription = styled.p`
    font-size: var(--h3-font-size);
    color: var(--text-color);
    font-weight: var(--font-slim);
`

export const HomeSectionCardContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
    margin-top: 20px;
    width: 100%;

    @media Screen and (max-width: 960px) {
        grid-template-columns: repeat(1, 1fr);
    }
`

export const HomeSectionCard = styled.div`
    box-shadow: var(--bs-smooth);
    background-color: var(--first-color);
    padding: 20px;
    border-radius: 4px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 20px;
`

export const HomeSectionCardDetail = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
`

export const HomeSectionCardHeader = styled.h3`
    font-size: var(--h3-font-size);
    font-weight: var(--font-semi-bold);
    color: var(--container-color);
`

export const HomeSectionCardFooter = styled.div`
    display: flex;
    align-items: center;
    gap: 20px;
`

export const HomeSectionCardIcon = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: var(--h1-font-size);
    color: var(--container-color);
    
    @media Screen and (max-width: 960px) {
        font-size: var(--big-font-size);
    }
`

export const HomeSectionRight = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
`

export const HomeSectionImage = styled.img`
    width: 400px;
`