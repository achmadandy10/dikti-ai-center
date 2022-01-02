import styled from "styled-components";

export const ResearchListContaner = styled.div`
    padding: 20px 80px;
    width: 100%;

    @media Screen and (max-width: 960px) {
        padding: 20px;
    }
`

export const ResearchListTitle = styled.h1`
    font-size: var(--big-font-size);
    color: var(--title-color);
    font-weight: var(--font-semi-bold);
`

export const ResearchListCard = styled.div`
    height: 100%;
    box-shadow: var(--bs-smooth);
    background-color: var(--container-color);
    margin-top: 20px;
    padding: 20px;
    border-radius: 4px;
`

export const ResearchListCardTitle = styled.h3`
    font-size: var(--h1-font-size);
    color: var(--title-color);
    font-weight: var(--font-semi-bold);
`

export const ResearchListContentTable = styled.table`
    border-collapse: collapse;
    width: 100%;
    border-radius: 4px;
    margin-top: 20px;

    & td,
    & th {
        padding: 20px;
    }

    & tr:nth-child(even) {
        background-color: #f2f2f2;
    }

    & tr:hover {
        background-color: #ddd;
    }

    & th {
        text-align: left;
        background-color: var(--first-color);
        color: var(--container-color);
    }
`

export const ResearchListContentTableTitle = styled.span`
    font-size: var(--normal-font-size);
    color: var(--title-color);
    font-weight: var(--font-semi-bold);
`

export const ResearchListContentTableText = styled.p`
    font-size: var(--normal-font-size);
    color: var(--title-color);
    font-weight: var(--font-skinny);
`

export const ResearchListBadgeText = styled.span`
    font-size: var(--normal-font-size);
    color: var(--info-color);
    font-weight: var(--font-semi-bold);
`

export const ResearchListText = styled.p`
    font-size: var(--normal-font-size);
    color: var(--text-color);
    font-weight: var(--font-skinny);
`