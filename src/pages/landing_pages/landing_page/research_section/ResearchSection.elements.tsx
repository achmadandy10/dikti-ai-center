import styled from "styled-components";

export const ResearchSectionContainer = styled.div`
    padding: 20px 80px;
    width: 100%;
    height: calc(100vh - 80px);
    display: flex;
    justify-content: center;
    flex-direction: column;

    @media Screen and (max-width: 960px) {
        padding: 20px;
        height: 100%;
    }
`

export const ResearchSectionTitle = styled.h1`
    font-size: var(--h1-font-size);
    font-weight: var(--font-bold);
    color: var(--title-color);
`

export const ResearchSectionContent = styled.div`
    display: flex;
    gap: 20px;
    margin-top: 20px;
    flex-direction: row-reverse;
    
    @media Screen and (max-width: 960px) {
        flex-direction: column;
    }
`

export const ResearchSectionContentLeft = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 20px;
    width: 100%;
`

export const ResearchSectionContentDetail = styled.h3`
    font-size: var(--h3-font-size);
    font-weight: var(--font-skinny);
    color: var(--text-color);
    text-align: left;
`

export const ResearchSectionContentRight = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
`

export const ResearchSectionContentImage = styled.img`
    width: 400px;
`