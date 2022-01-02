import styled from "styled-components";

export const FooterContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    background-color: var(--first-second-color);
    font-size: var(--normal-font-size);
    border-top: 10px solid var(--info-color);
    margin-top: 20px;

    @media only Screen and (max-width: 560px) {
        flex-direction: column-reverse;
        gap: 10px;
    }
`

export const FooterContent = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 50px;
    padding: 20px 80px;
`

export const FooterContentItem = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
`

export const FooterContentDetail = styled.div`
    font-size: var(--normal-font-size);
    font-weight: var(--font-normal);
    color: var(--container-color);
`

export const FooterContentSubDetail = styled.div`
    font-size: var(--normal-font-size);
    font-weight: var(--font-skinny);
    color: var(--text-color-light);
`

export const FooterContentImage = styled.img`
    width: 100%;
`

export const FooterContentSosialContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 20px;
    color: var(--container-color);
`

export const FooterContentSosialIconContainer = styled.span`
    display: flex;
    align-items: center;
    gap: 20px;
`

export const FooterContentSosialIcon = styled.a`
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: var(--h2-font-size);
    color: var(--container-color);
`

export const FooterContentCategoryTitle = styled.h3`
    font-size: var(--h2-font-size);
    font-weight: var(--font-semi-bold);
    color: var(--container-color);
`

export const FooterContentCategoryContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 10px;
`

export const FooterContentCategoryLink = styled.a`
    color: var(--container-color);
    font-size: var(--normal-font-size);
    font-weight: var(--font-skinny);
`

export const FooterCopyRight = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--text-color-light);
    background-color: var(--first-dark-color);
    width: 100%;
    height: 100%;
    padding: 20px;
`

export const CopyRightContainer = styled.div`
    position: relative;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    flex-direction: column;
    padding: 20px;
`