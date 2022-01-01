import styled from "styled-components";

export const TrainingSectionContainer = styled.div`
    padding: 20px 80px;
    width: 100%;
    background-color: var(--first-color);
    height: calc(100vh - 80px);
    display: flex;
    justify-content: center;
    flex-direction: column;

    @media Screen and (max-width: 960px) {
        padding: 20px;
        height: 100%;
    }
`

export const TrainingSectionTitle = styled.h1`
    font-size: var(--h1-font-size);
    font-weight: var(--font-bold);
    color: var(--container-color);
`

export const TrainingSectionContent = styled.div`
    display: flex;
    gap: 20px;
    margin-top: 20px;
    
    @media Screen and (max-width: 960px) {
        flex-direction: column;
    }
`

export const TrainingSectionContentLeft = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 20px;
    width: 100%;
`

export const TrainingSectionContentDetail = styled.h3`
    font-size: var(--h3-font-size);
    font-weight: var(--font-skinny);
    color: var(--container-color);
    text-align: left;
`

export const TrainingSectionContentRight = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
`

export const TrainingSectionContentImage = styled.img`
    width: 400px;
`