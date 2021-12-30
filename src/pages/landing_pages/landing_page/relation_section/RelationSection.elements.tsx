import styled from "styled-components";

export const RelationSectionContainer = styled.div`
    padding: 20px 80px;
    width: 100%;

    @media Screen and (max-width: 960px) {
        padding: 20px;
    }
`

export const RelationSectionTitle = styled.h1`
    font-size: var(--h1-font-size);
    font-weight: var(--font-bold);
    color: var(--title-color);
`

export const RelationSectionContent = styled.div`
    display: flex;
    gap: 20px;
    margin-top: 20px;
    
    @media Screen and (max-width: 960px) {
        flex-direction: column;
    }
`

export const RelationSectionContentLeft = styled.div`
    display: flex;
    flex-direction: column;

    & ul {
        display: flex;
        flex-direction: column;
        gap: 20px;
        list-style: circle;

        @media Screen and (max-width: 960px) {
            padding: 20px;
        }

        & li {
            font-size: var(--normal-font-size);
            font-weight: var(--font-slim);
            color: var(--text-color);
        }
    }
`

export const RelationSectionContentRight = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
`

export const RelationSectionContentImage = styled.img`
    width: 400px;
`