import { Link } from "react-router-dom";
import styled from "styled-components";

export const RepositoryPageContainer = styled.div`
    padding: 20px 80px;
    width: 100%;

    @media Screen and (max-width: 960px) {
        padding: 20px;
    }
`

export const RepositoryPageDetail = styled.div`
    display: flex;
    gap: 20px;

    @media Screen and (max-width: 960px) {
        flex-direction: column;
    }
`

export const RepositoryPageDetailItem = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
`

export const RepositoryPageTitle = styled.h1`
    font-size: var(--big-font-size);
    color: var(--title-color);
    font-weight: var(--font-semi-bold);
`

export const RepositoryPageSubtitle = styled.p`
    font-size: var(--normal-font-size);
    color: var(--text-color);
    font-weight: var(--font-slim);
`

export const RepositoryPageDetailImageContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
`

export const RepositoryPageDetailImage = styled.img`
    width: 300px;
    height: 300px;
`

export const RepositoryPageContentHeader = styled.div`
    margin-top: 20px;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    align-items: center;
    gap: 20px;

    @media Screen and (max-width: 960px) {
        grid-template-columns: repeat(1, 1fr);
    }
`

export const RepositoryPageContentTitle = styled.h1`
    font-size: var(--big-font-size);
    color: var(--title-color);
    font-weight: var(--font-semi-bold);
`

export const RepositoryPageContentSearch = styled.form`
    display: flex;
    align-items: center;
    justify-content: center;
`

export const RepositoryPageContent = styled.div`
    margin-top: 20px;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 20px;

    @media Screen and (max-width: 960px) {
        grid-template-columns: repeat(1, 1fr);
    }
`

export const RepositoryPageCard = styled(Link)`
    border: 1px solid var(--text-color);
    border-radius: 4px;
    background-color: var(--container-color);

    &:hover {
        border-color: transparent;
        box-shadow: var(--bs-smooth);
    }
`

export const RepositoryPageCardImage = styled.img`
    width: 100%;
    height: 150px;
    border-top-left-radius: 4px;
    border-top-right-radius: 4px;
    object-fit: cover;
`

export const RepositoryPageCardDetail = styled.div`
    padding: 20px;
`

export const RepositoryPageCardHeader = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`

export const RepositoryPageCardTitle = styled.h3`
    font-size: var(--h3-font-size);
    color: var(--title-color);
    font-weight: var(--font-semi-bold);
`

export const RepositoryPageCardBody = styled.div`
    display: flex;
    align-items: center;
    gap: 5px;

    & svg {
        font-size: 3px;
    }
`

export const RepositoryPageCardName = styled.span`
    font-size: var(--small-font-size);
    color: var(--title-color);
    font-weight: var(--font-skinny);
    text-decoration: underline;
`

export const RepositoryPageCardDate = styled.span`
    font-size: var(--small-font-size);
    color: var(--title-color);
    font-weight: var(--font-normal);
`

export const RepositoryPageCardFooter = styled.div`
    border-top: 1px solid var(--text-color);
    padding: 20px;
`

export const RepositoryPageCardCategory = styled(Link)`
    border: 1px solid var(--title-color);
    border-radius: 4px;
    padding: 7px 14px;
    font-size: var(--small-font-size);
    color: var(--title-color);
    font-weight: var(--font-normal);
`