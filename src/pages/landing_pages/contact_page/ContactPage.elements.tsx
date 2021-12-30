import styled from "styled-components";

export const ContactPageContainer = styled.div`
    padding: 20px 80px;
    width: 100%;
    
    @media Screen and (max-width: 960px) {
        padding: 20px;
    }
`

export const ContactPageTitle = styled.h1`
    font-size: var(--h1-font-size);
    color: var(--title-color);
    font-weight: var(--font-semi-bold);
`

export const ContactPageContent = styled.div`
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    gap: 20px;
`

export const ContactPageCard = styled.div`
    height: 100%;
    box-shadow: var(--bs-smooth);
    background-color: var(--container-color);
    margin-top: 20px;
    padding: 20px;
`

export const ContactPageCardTitle = styled.h3`
    font-size: var(--h1-font-size);
    color: var(--first-color);
    font-weight: var(--font-semi-bold);
    text-align: center;
`

export const ContactPageCardDetail = styled.div`
    margin-top: 20px;
    font-size: var(--normal-font-size);
    color: var(--text-color);
    font-weight: var(--font-slim);
    display: grid;
    gap: 20px;
`

export const ContactPageCardInfo = styled.div`
    display: grid;
    grid-template-columns: 30px auto;
    gap: 10px;
`

export const ContactPageCardIcon = styled.span`
    font-size: var(--h2-font-size);
    color: var(--first-color);
`

export const ContactPageCardLabel = styled.span`
    font-size: var(--normal-font-size);
    line-height: var(--h2-font-size);
    font-weight: var(--font-skinny);
`