import styled from "styled-components";

export const NewsSectionContainer = styled.div`
    padding: 20px 80px;
    width: 100%;

    @media Screen and (max-width: 960px) {
        margin-top: 70px;
        padding: 20px;
    }
`

export const NewsSectionTitle = styled.h1`
    font-size: var(--h1-font-size);
    font-weight: var(--font-bold);
    color: var(--title-color);
`

export const NewsSectionSubTitle = styled.h3`
    font-size: var(--h2-font-size);
    font-weight: var(--font-semi-bold);
    color: var(--first-color);
`

export const NewsSectionContent = styled.div`
    margin-top: 20px;
    & .swiper-wrapper {
        padding-top: 20px;
        padding-bottom: 50px;
    }
`

export const NewsSectionSlide = styled.div`
    box-shadow: var(--bs-smooth);
    background-color: var(--container-color);
    border-radius: 4px;
`

export const NewsSectionSlideImage = styled.img`
    border-top-left-radius: 4px;
    border-top-right-radius: 4px;
    width: 100%;
    height: 200px;
    object-fit: cover;
    box-shadow: var(--bs-smooth);
`

export const NewsSectionSlideDetail = styled.div`
    padding: 20px;
`

export const NewsSectionSlideTitle = styled.h3`
    font-size: var(--h2-font-size);
    color: var(--title-color);
    font-weight: var(--font-semi-bold);
`

export const NewsSectionSlideDate = styled.span`
    font-size: var(--smaller-font-size);
    color: var(--text-color-light);
    font-weight: var(--font-skinny);
`

export const NewsSectionSlideBody = styled.p`
    font-size: var(--normal-font-size);
    color: var(--text-color);
    font-weight: var(--font-slim);
`

export const NewsSectionSlideButtonContainer = styled.div`
    margin-top: 20px;
`