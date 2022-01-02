import styled from "styled-components";
import AI from "../../../../images/artificial_intelligence.svg"

export const AboutProgramContainer = styled.div`
    padding: 20px 80px;
    width: 100%;
    
    @media Screen and (max-width: 960px) {
        padding: 20px;
    }
`

export const AboutProgramTitle = styled.h1`
    font-size: var(--big-font-size);
    color: var(--title-color);
    font-weight: var(--font-semi-bold);
`

export const AboutProgramContent = styled.div`
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    gap: 20px;
`

export const AboutProgramCard = styled.div`
    background-image: url(${AI});
    background-repeat: no-repeat;
    background-position: center;
    height: 100%;
    box-shadow: var(--bs-smooth);
    background-color: var(--container-color);
    margin-top: 20px;
    border-radius: 4px;

`

export const AboutProgramCardTitle = styled.h3`
    font-size: var(--h1-font-size);
    color: var(--first-color);
    font-weight: var(--font-semi-bold);
    text-align: center;
`

export const AboutProgramCardDetail = styled.div`
    width: 100%;
    height: 100%;
    background: rgba(255, 255, 255, 0.8);
    font-size: var(--normal-font-size);
    color: var(--title-color);
    font-weight: var(--font-slim);
    text-align: justify;

    & ul {
        list-style-type: disc;
        display: flex;
        flex-direction: column;
        gap: 20px;
        padding: 40px;

        & ol {
            list-style-type: decimal;
            display: flex;
            flex-direction: column;
            gap: 20px;
            padding: 20px;
        }
    }
`