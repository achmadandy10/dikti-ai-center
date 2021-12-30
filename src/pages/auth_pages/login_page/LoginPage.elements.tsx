import { Link } from "react-router-dom";
import styled from "styled-components";

export const LoginPageContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 20px;
    width: 100%;
    height: 100vh;
`

export const LoginPageImage = styled.img`
    width: 70px;
`

export const LoginPageContent = styled.div`
    background-color: var(--container-color);
    box-shadow: var(--bs-smooth);
    padding: 40px;
    border-radius: 4px;
`

export const LoginPageTitle = styled.h3`
    font-size: var(--h1-font-size);
    font-weight: var(--font-semi-bold);
    text-align: center;
    color: var(--title-color);
`

export const LoginPageForm = styled.form`
    margin-top: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`

export const LoginPageButtonContainer = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
`

export const LoginPageLinkContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 20px;
`

export const LoginPageLinkLabel = styled.span`
    display: flex;
    align-items: center;
    gap: 5px;
`

export const LoginPageLinkButton = styled(Link)`
    color: var(--text-color);
    text-decoration: underline;

    &:hover{
        color: var(--first-color);
    }
`