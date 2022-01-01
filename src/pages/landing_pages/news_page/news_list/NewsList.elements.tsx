import styled from "styled-components";

export const NewsListContainer = styled.div`
    padding: 20px 80px;
    width: 100%;
    
    @media Screen and (max-width: 960px) {
        padding: 20px;
    }
`

export const NewsListSlider = styled.div`
    margin-bottom: 20px;
`

export const NewsListSlide = styled.div`
    position: relative;
    height: 250px;

    @media Screen and (max-width: 960px) {
        height: 100%;
    }
`

export const NewsListSlideThumbnail = styled.img`
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
`

export const NewsListSlideDetail = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: var(--rgba-color-0-5-black);
    color: var(--container-color);
    padding: 0 80px;
    display: flex;
    flex-direction: column;
    justify-content: center;

    @media Screen and (max-width: 960px) {
        padding: 20px;
    }
`

export const NewsListSlideDetailTitle = styled.h3`
    color: var(--container-color);
    font-weight: var(--font-bold);
    font-size: var(--h3-font-size);
`

export const NewsListSlideDetailDate = styled.span`
    font-size: var(--smaller-font-size);
    font-weight: var(--font-skinny);
`

export const NewsListSlideDetailBody = styled.p`
    font-weight: var(--font-slim);
    font-size: var(--normal-font-size);
`

export const NewsListSlideDetailButtonContainer = styled.div`
    display: flex;
    align-items: center;
    margin-top: 20px;
`

export const NewsListHeader = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    align-items: center;
    gap: 20px;

    @media Screen and (max-width: 960px) {
        grid-template-columns: repeat(1, 1fr);
    }
`

export const NewsListHeaderTitle = styled.h1`
    font-size: var(--h1-font-size);
    color: var(--title-color);
`

export const NewsListHeaderSearch = styled.form`
    display: flex;
    align-items: center;
    justify-content: center;
`

export const NewsListContent = styled.div`
    margin-top: 20px;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 50px;
    row-gap: 50px;
    
    @media Screen and (max-width: 960px) {
        grid-template-columns: repeat(1, 1fr);
        row-gap: 20px;
    }
`

export const NewsListCard = styled.div`
    border-radius: 4px;
    border: 1px solid var(--text-color-light);
    height: 500px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    &:hover {
        border-color: transparent;
        box-shadow: var(--bs-smooth);
    }
`

export const NewsListCardImg = styled.img`
    border-top-left-radius: 4px;
    border-top-right-radius: 4px;
    object-fit: cover;
    width: 100%;
    height: 200px;
`

export const NewsListCardItem = styled.div`
    display: flex;
    justify-content: space-between;
    flex-direction: column;
`

export const NewsListCardDetail = styled.div`
    padding: 20px;
`

export const NewsListCardTitle = styled.h3`
    font-size: var(--h3-font-size);
    font-weight: var(--font-semi-bold);
    color: var(--title-color);
`

export const NewsListCardDate = styled.span`
    font-size: var(--small-font-size);
    font-weight: var(--font-skinny);
`

export const NewsListCardBody = styled.p`
    font-weight: var(--font-slim);
    font-size: var(--normal-font-size);
    text-align: justify;
`

export const NewsListCardFooter = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px;
    border-top: 1px solid var(--text-color-light);
`