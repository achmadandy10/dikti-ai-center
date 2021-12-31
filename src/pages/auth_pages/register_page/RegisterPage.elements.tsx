import { Link } from "react-router-dom";
import styled from "styled-components";

export const RegisterPageContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    height: 100vh;
`

export const RegisterPageLeft = styled.div`
    flex: 2;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: var(--first-color);
    width: 100%;
    height: 100%;

    @media Screen and (max-width: 960px) {
        display: none;
    }
`

export const RegisterPageImage = styled.img`
    width: 150px;
`

export const RegisterPageRight = styled.div`
    flex: 4;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: column;
    height: 100%;

    @media Screen and (max-width: 960px) {
        justify-content: center;
        width: 100%;
    }
`

export const RegisterPageContent = styled.div`
    padding: 40px;
    width: 50%;
    border-radius: 4px;

    @media Screen and (max-width: 960px) {
        width: 100%;
    }
`

export const RegisterPageTitle = styled.h3`
    font-size: var(--h1-font-size);
    font-weight: var(--font-semi-bold);
    text-align: center;
    color: var(--title-color);
`

export const RegisterPageForm = styled.form`
    margin-top: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`

export const RegisterPageButtonContainer = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
`

export const RegisterPageLinkContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 20px;
`

export const RegisterPageLinkLabel = styled.span`
    display: flex;
    align-items: center;
    gap: 5px;
`

export const RegisterPageLinkButton = styled(Link)`
    color: var(--text-color);
    text-decoration: underline;

    &:hover{
        color: var(--first-color);
    }
`