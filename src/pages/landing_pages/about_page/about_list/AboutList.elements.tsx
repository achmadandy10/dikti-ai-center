import styled from "styled-components";

export const AboutListContainer = styled.div`
    width: 100%;
    padding: 20px 80px;
    display: flex;
    justify-content: center;
    flex-direction: column;

    @media Screen and (max-width: 960px) {
        padding: 20px;
    }
`

export const AboutListTitle = styled.h1`
    font-size: var(--big-font-size);
    color: var(--title-color);
    font-weight: var(--font-semi-bold);
`

export const AboutListContent = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
    margin-top: 20px;
    padding: 20px;

    @media Screen and (max-width: 960px) {
        grid-template-columns: repeat(1, 1fr);
    }
`

export const AboutListCard = styled.div`
    position: relative;
    height: 100%;
    border-radius: 4px;
`

export const AboutListCardImage = styled.img`
    display: block;
    width: 100%;
    border-radius: 4px;
`

export const AboutListCardDetail = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: var(--rgba-color-0-5-white);
    color: var(--container-color);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 4px;
    padding: 20px;
`

export const AboutListCardTitle = styled.h3`
    font-size: var(--h1-font-size);
    color: var(--title-color);
    font-weight: var(--font-semi-bold);
    text-align: center;
`

export const AboutListCardButtonContainer = styled.div`
    display: flex;
    align-items: center;
    margin-top: 20px;
`