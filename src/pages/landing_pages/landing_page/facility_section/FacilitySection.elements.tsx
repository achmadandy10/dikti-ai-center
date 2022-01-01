import styled from "styled-components";

export const FacilitySectionContainer = styled.div`
    padding: 20px 80px;
    width: 100%;
    background-color: var(--first-color);
    height: calc(100vh - 80px);
    display: flex;
    justify-content: center;
    flex-direction: column;

    @media Screen and (max-width: 960px) {
        padding: 20px;
    }
`

export const FacilitySectionTitle = styled.h1`
    font-size: var(--h1-font-size);
    font-weight: var(--font-bold);
    color: var(--container-color);
`

export const FacilitySectionContent = styled.div`
    display: flex;
    gap: 20px;
    margin-top: 20px;
    
    @media Screen and (max-width: 960px) {
        flex-direction: column;
    }
`

export const FacilitySectionContentLeft = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 20px;
    width: 100%;
`

export const FacilitySectionContentDetail = styled.h3`
    font-size: var(--h3-font-size);
    font-weight: var(--font-skinny);
    color: var(--container-color);
    text-align: left;
`

export const FacilitySectionContentRight = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
`

export const FacilitySectionContentImage = styled.img`
    width: 400px;
`