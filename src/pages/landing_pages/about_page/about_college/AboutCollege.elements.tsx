import styled from "styled-components"
import Background from "../../../../images/colored-shapes.png"

export const AboutCollegeContainer = styled.div`
    background-image: url(${Background});
    background-repeat: no-repeat;
    background-size: cover;
    height: 100%;
    width: 100%;
`

export const AboutCollegeOverlay = styled.div`
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

export const AboutCollegeTitle = styled.h1`
    font-size: var(--big-font-size);
    font-weight: var(--font-bold);
    color: var(--title-color);
`

export const AboutCollegeSubTitle = styled.h1`
    font-size: var(--h1-font-size);
    font-weight: var(--font-semi-bold);
    color: var(--title-color);
    text-transform: uppercase;
`

export const AboutCollegeContent = styled.div`
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

export const AboutCollegeSlider = styled.div`
    display: flex;
    box-shadow: var(--bs-smooth);
    background-color: var(--container-color);
    border-radius: 4px;
    padding: 20px;
    gap: 20px;
    height: 100%;
    align-items: center;
`

export const AboutCollegeSliderImage = styled.img`
    width: 70px;
    height: 70px;
    border-radius: 50%;
`

export const AboutCollegeSliderContent = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
`

export const AboutCollegeSliderName = styled.h3`
    font-size: var(--h3-font-size);
    font-weight: var(--font-semi-bold);
    color: var(--title-color);

    @media Screen and (max-width: 960px) {
        font-size: var(--normal-font-size);
    }
`

export const AboutCollegeSliderDetail = styled.span`
    font-size: var(--normal-font-size);
    font-weight: var(--font-slim);
    color: var(--text-color);

    @media Screen and (max-width: 960px) {
        font-size: var(--small-font-size);
    }
`

export const AboutCollegeCard = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 20px;
    box-shadow: var(--bs-smooth);
    background-color: var(--container-color);
    border-radius: 4px;
    padding: 20px;
    width: 100%;
`

export const AboutCollegeCardImage = styled.img`
    width: 50px;
    height: 50px;
`

export const AboutCollegeCardText = styled.span`
    font-size: var(--h1-font-size);
    font-weight: var(--font-semi-bold);
    color: var(--title-color);
    text-transform: uppercase;
`