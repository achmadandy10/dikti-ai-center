import styled from "styled-components";

interface Props {
    password?: boolean,
    error?: string,
    icon?: string,
    type?: string,
}

export const InputFieldError = styled.span`
    color: var(--danger-color);
`

export const InputFieldLabel = styled.label<Props>`
    position: absolute;
    left: 1rem;
    top: 0.75rem;
    padding: 0 0.25rem;
    background-color: var(--container-color);
    color: var(--title-color);
    font-size: var(--normal-font-size);
    transition: 0.3s;
    cursor: Input;

    ${({error}) => {
        if (error) {
            return `
                color: var(--danger-color) !important;
            `
        }
    }}
`

export const InputFieldIcon = styled.div<Props>`
    position: absolute;
    right: 1rem;
    top: .85rem;
    z-index: 100;
    cursor: ${({password}) => password ? "pointer" : "default"};
`

export const InputFieldInput = styled.input<Props>`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    font-size: var(--normal-font-size);
    border: 1px solid var(--text-color);
    border-radius: 4px;
    outline: none;
    padding: 1.25rem;
    background: none;
    z-index: 0;
    
    ${({type, icon}) => {
        if (type === "password" || icon) {
            return `
            padding-right: 2.5rem !important;
            `
        }
    }}

    ${({error}) => {
        if (error) {
        return `
            border-color: var(--danger-color) !important;
            `
        }
    }}

    &:hover {
        border-color: var(--first-color);
    }

    &:focus,
    &:not(:placeholder-shown) {
        border: 2px solid var(--first-color);
    }

    &:focus ~ ${InputFieldLabel},
    &:not(:placeholder-shown):not(:focus) ~ ${InputFieldLabel} {
        top: -0.5rem;
        left: 0.8rem;
        color:  var(--first-color);
        font-size: var(--small-font-size);
        font-weight: var(--font-medium);
        z-index: 10;
    }
`

export const InputFieldContent = styled.div`
    position: relative;
    height: 48px;
`

export const InputFieldContainer = styled.div<Props>`
    display: flex;
    flex-direction: column;
    width: 100%;
    margin-bottom: 1.5rem;

    &:last-of-type {
        margin-bottom: 0;
    }

    & .css-1s2u09g-control {
        border-radius: 4px;
        border-color: ${({error}) => error ? 'var(--danger-color);' : 'var(--Input-color);'};
        
        &:hover {
            border-color: ${({error}) => error ? 'var(--danger-color);' : 'var(--Input-color);'};
        }
    }
    & .css-319lph-ValueContainer {
        padding: 6px 1.25rem;
    }
    & .css-14el2xx-placeholder {
        color: ${({error}) => error ? 'var(--danger-color);' : 'var(--Input-color);'};
    }
    & .css-1okebmr-indicatorSeparator {
        background-color: var(--Input-color);
    }
    & .css-tlfecz-indicatorContainer {
        color: var(--Input-color);
    }
    & .css-1pahdxg-control:hover,
    & .css-1pahdxg-control {
        border: 2px solid var(--first-color);
        box-shadow: none;

        ${({error}) => {
            if (error) {
                return `border-color: var(--danger-color) !important;`
            }
        }}
    }
`

export const SearchFieldContainer = styled.div`
    display: flex;
    align-items: center;
    background-color: var(--first-color);
    border-radius: 4px;
    padding: 7px 7px 7px 14px;
    gap: 10px;
    width: 100%;
`

export const SearchFieldInput = styled.input`
    padding: 14px;
    background-color: var(--container-color);
    color: var(--title-color);
    font-size: var(--normal-font-size);
    outline: none;
    border: none;
    border-radius: 4px;
    width: 100%;
`

export const SearchFieldIcon = styled.span`
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--container-color);
    font-size: var(--normal-font-size);
`