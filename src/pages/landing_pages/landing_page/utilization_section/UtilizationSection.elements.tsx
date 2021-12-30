import styled from "styled-components"
import Background from "../../../../images/colored-shapes.png"

export const UtilizationSectionContainer = styled.div`
    background-image: url(${Background});
    background-repeat: no-repeat;
    background-size: cover;
    height: 100%;
`

export const UtilizationSectionOverlay = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 100%;
    height: 100%;
    padding: 20px 80px;
    background-color: var(--rgba-color-0-5-white);
    @media Screen and (max-width: 960px) {
        padding: 20px;
    }
`

export const UtilizationSectionTitle = styled.h1`
    font-size: var(--h1-font-size);
    font-weight: var(--font-bold);
    color: var(--title-color);
`

export const UtilizationSectionContent = styled.div`
    margin-top: 20px;
    border-radius: 4px;
    padding: 20px;
`

export const UtilizationSectionImage = styled.img`
    width: 100%;

    @media Screen and (max-width: 960px) {
        height: 300px;
    }
`