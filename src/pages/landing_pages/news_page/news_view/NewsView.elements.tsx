import styled from "styled-components";

export const NewsViewContainer = styled.div`
    padding: 20px 80px;
    width: 100%;
    display: flex;
    gap: 20px;
    
    @media Screen and (max-width: 960px) {
        padding: 20px;
        flex-direction: column;
    }
`

export const NewsViewContentLeft = styled.div`
    flex: 4;
    background-color: var(--container-color);
    box-shadow: var(--bs-smooth);
    border-radius: 4px;
    padding: 20px;
`

export const NewsViewDetailTitle = styled.h1`
    font-size: var(--h2-font-size);
    color: var(--title-color);
`

export const NewsViewDetailDate = styled.span`
    font-size: var(--normal-font-size);
    color: var(--text-color-light);
    font-weight: var(--font-skinny);
`

export const NewsViewDetailImage = styled.img`
    margin: 30px auto;
    width: 500px;
    height: 300px;
    object-fit: cover;
    display: flex;
    align-items: center;
    justify-content: center;
`

export const NewsViewContentRight = styled.div`
    flex: 1.5;
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 20px;
`

export const NewsViewCard = styled.div`
    background-color: var(--container-color);
    box-shadow: var(--bs-smooth);
    border-radius: 4px;
    padding: 20px;
    width: 100%;
    display: grid;
    grid-template-columns: 80px auto;
    gap: 10px;
    @media Screen and (max-width: 960px) {
        height: 100%;
    }
`

export const NewsViewCardImageContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
`

export const NewsViewCardImage = styled.img`
    width: 100%;
    height: 100%;
    border-radius: 4px;
    object-fit: cover;
`

export const NewsViewCardDetail = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
    width: 100%;
`

export const NewsViewCardTitle = styled.h3`
    font-size: var(--normal-font-size);
    color: var(--title-color);
    font-weight: var(--font-semi-bold);
`

export const NewsViewCardDate = styled.span`
    font-size: var(--smaller-font-size);
    color: var(--text-color-light);
    font-weight: var(--font-skinny);
`

export const NewsViewCardBody = styled.p`
    font-size: var(--small-font-size);
    color: var(--text-color);
    font-weight: var(--font-slim);
`

export const NewsViewCardButtonContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
`