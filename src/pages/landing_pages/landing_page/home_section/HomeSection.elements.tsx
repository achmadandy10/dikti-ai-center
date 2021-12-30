import styled from "styled-components";
import Background from "../../../../images/colored-shapes.png"

export const HomeSectionContainer = styled.div`
    background-image: url(${Background});
    background-repeat: no-repeat;
    background-size: cover;
    height: calc(100vh - 90px);
`

export const HomeSectionContent = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 20px;
    width: 100%;
    height: 100%;
    padding: 20px 80px;
    background-color: var(--rgba-color-0-5-white);

    @media Screen and (max-width: 960px) {
        flex-direction: column;
        padding: 20px;
        margin-top: 70px;
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

export const HomeSectionButtonContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 20px;
    margin-top: 20px;
    width: 100%;
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