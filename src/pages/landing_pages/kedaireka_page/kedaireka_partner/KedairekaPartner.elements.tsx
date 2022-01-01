import styled from "styled-components";

export const KedairekaPartnerContainer = styled.div`
    padding: 20px 80px;
    width: 100%;
    
    @media Screen and (max-width: 960px) {
        padding: 20px;
    }
`

export const KedairekaPartnerTitle = styled.h1`
    font-size: var(--big-font-size);
    color: var(--title-color);
    font-weight: var(--font-semi-bold);
`

export const KedairekaPartnerContent = styled.div`
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    gap: 20px;
`

export const KedairekaPartnerCard = styled.div`
    height: 100%;
    box-shadow: var(--bs-smooth);
    background-color: var(--container-color);
    margin-top: 20px;
    padding: 20px;
`

export const KedairekaPartnerImage = styled.img`
    height: 100%;
    width: 100%;
`