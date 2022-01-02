import styled from "styled-components";

export const KedairekaListContainer = styled.div`
    width: 100%;
    padding: 20px 80px;
    display: flex;
    justify-content: center;
    flex-direction: column;

    @media Screen and (max-width: 960px) {
        padding: 20px;
    }
`

export const KedairekaListTitle = styled.h1`
    font-size: var(--big-font-size);
    color: var(--title-color);
    font-weight: var(--font-semi-bold);
`

export const KedairekaListContent = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
    margin-top: 20px;

    @media Screen and (max-width: 960px) {
        grid-template-columns: repeat(1, 1fr);
    }
`

export const KedairekaListCard = styled.div`
    position: relative;
    height: 100%;
    border-radius: 4px;
`

export const KedairekaListCardImage = styled.img`
    display: block;
    width: 100%;
    border-radius: 4px;
`

export const KedairekaListCardDetail = styled.div`
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
`

export const KedairekaListCardTitle = styled.h3`
    font-size: var(--h1-font-size);
    color: var(--title-color);
    font-weight: var(--font-semi-bold);
`

export const KedairekaListCardButtonContainer = styled.div`
    display: flex;
    align-items: center;
    margin-top: 20px;
`