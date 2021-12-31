import styled from "styled-components";

export const KedairekaDataContainer = styled.div`
    padding: 20px 80px;
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 20px;

    @media Screen and (max-width: 960px) {
        padding: 20px;
    }
`

export const KedairekaDataTitle = styled.h1`
    font-size: var(--h1-font-size);
    color: var(--title-color);
    font-weight: var(--font-semi-bold);
`

export const KedairekaDataCardInfo = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 20px;

    @media Screen and (max-width: 960px) {
        grid-template-columns: repeat(1, 1fr);
    }
`

export const KedairekaDataChart = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    box-shadow: var(--bs-smooth);
    background-color: var(--container-color);
    border-radius: 4px;
    padding: 20px;
    height: 100%;
    
    @media Screen and (max-width: 960px) {
        grid-template-columns: repeat(1, 1fr);
    }
`

export const KedairekaDataChartLegend = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 5px;
    width: 100%;
`

interface LegendProps {
    color: string
}

export const KedairekaDataChartLegendDetail = styled.div<LegendProps>`
    display: flex;
    align-items: center;
    gap: 10px;
    width: 100%;

    & svg {
        color: ${({ color }) => color};
        font-size: var(--h3-font-size);
    }
`

export const KedairekaDataChartLegendName = styled.div`
    font-size: var(--normal-font-size);
    font-weight: var(--font-normal);
    color: var(--text-color);
`