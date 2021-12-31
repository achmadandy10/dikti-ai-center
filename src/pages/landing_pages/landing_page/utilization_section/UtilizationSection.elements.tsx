import styled from "styled-components"
import Background from "../../../../images/colored-shapes.png"

export const UtilizationSectionContainer = styled.div`
    background-image: url(${Background});
    background-repeat: no-repeat;
    background-size: cover;
    height: 100%;
    width: 100%;
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
    width: 100%;
    position: relative;
    & .swiper {
        width: 100%;
        margin-left: auto;
        margin-right: auto;
        display: grid;
    }

    & .swiper-wrapper {
        height: 85vh;

        @media Screen and (max-width: 960px) {
            height: 90vh;
        }
    }

    & .swiper-slide {
        height: calc((100% - 30px) / 4) !important;
        padding: 10px;
    }
`

export const UtilizationSectionSlider = styled.div`
    display: flex;
    box-shadow: var(--bs-smooth);
    background-color: var(--container-color);
    border-radius: 4px;
    padding: 20px;
    gap: 20px;
    height: 100%;
    align-items: center;
`

export const UtilizationSectionSliderImage = styled.img`
    width: 70px;
    height: 70px;
    border-radius: 50%;
`

export const UtilizationSectionSliderContent = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
`

export const UtilizationSectionSliderName = styled.h3`
    font-size: var(--h3-font-size);
    font-weight: var(--font-semi-bold);
    color: var(--title-color);

    @media Screen and (max-width: 960px) {
        font-size: var(--normal-font-size);
    }
`

export const UtilizationSectionSliderDetail = styled.span`
    font-size: var(--normal-font-size);
    font-weight: var(--font-slim);
    color: var(--text-color);

    @media Screen and (max-width: 960px) {
        font-size: var(--small-font-size);
    }
`