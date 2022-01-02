import styled from "styled-components"
import { Link } from "react-router-dom"

interface Props {
    color: string
    size: string
    styled: string
    width_button?: number
    height_button?: number
    full_width?: boolean
}

export const ButtonSubmitContainer = styled.button<Props>`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 5px;
    color: #FFFFFF;
    outline: none;
    border: none;
    cursor: pointer;
    height: 100%;
    padding: 7px 14px;
    border-radius: 4px;

    ${({height_button}) => {
        if (height_button) {
            return `height: ${height_button}px !important;`
        }
    }}

    ${({width_button}) => {
        if (width_button) {
            return `width: ${width_button}px !important;`
        }
    }}
    
    ${({full_width}) => {
        if (full_width) {
            return `width: 100% !important;`
        }
    }}

    ${({ color }) => {
        if (color === "primary") {
            return `
                background: var(--first-color);
                &:hover {
                    box-shadow: var(--bs-first);
                }
            `
        } else if (color === "info") {
            return `
                background: var(--info-color);
                &:hover {
                    box-shadow: var(--bs-info);
                }
            `
        } else if (color === "success") {
            return `
                background: var(--success-color);
                &:hover {
                    box-shadow: var(--bs-success);
                }
            `
        } else if (color === "warning") {
            return `
                background: var(--warning-color);
                &:hover {
                    box-shadow: var(--bs-warning);
                }
            `
        }  else if (color === "danger") {
            return `
                background: var(--danger-color);
                &:hover {
                    box-shadow: var(--bs-danger);
                }
            `
        }   else if (color === "white") {
            return `
                background: var(--container-color);
                color: var(--first-color);
            `
        }   else {
            return `
                background: var(--text-color);
                &:hover {
                    box-shadow: var(--bs-grey);
                }
            `
        }
    }}

    ${({ size }) => {
        if (size === "small") {
            return `
                font-size: var(--small-font-size);
                line-height: 17px;
                height: 30px;
                padding: 7px 20xp;
                width: 75px;
            `
        } else if (size === "large") {
            return `
                font-size: var(--h3-font-size);
                line-height: 19px;
                height: 55px;
                padding: 18px 36xp;
                width: 115px;
            `
        } else {
            return `
                font-size: var(--normal-font-size);
                line-height: 18px;
                height: 41px;
                padding: 12px 30xp;
                width: 112px;
            `
        }
    }}

    ${({styled, size, color}) => {
        if (styled === "rounded") {
            return `
                border-radius: 18px;
            `
        } else if (styled === "circle") {
            if (size === "small") {
                return `
                    border-radius: 50%;
                    height: 30px !important;
                    width: 30px !important;
                    padding: 0 !important;
                    line-height: none !imporant;
                `
            } else if (size === "large") {
                return `
                    border-radius: 50%;
                    height: 55px !important;
                    width: 55px !important;
                    padding: 0 !important;
                    line-height: none !imporant;
                `
            } else {
                return `
                    border-radius: 50%;
                    height: 41px !important;
                    width: 41px !important;
                    padding: 0 !important;
                    line-height: none !imporant;
                `
            }
        } else if (styled === "transparent") {
            if (color === "primary") {
                return `
                    background-color: transparent !important;
                    box-shadow: none !important;
                    color: var(--first-color);
                `
            } else if (color === "info") {
                return `
                    background-color: transparent !important;
                    box-shadow: none !important;
                    color: var(--info-color);
                `
            } else if (color === "success") {
                return `
                    background-color: transparent !important;
                    box-shadow: none !important;
                    color: var(--success-color);
                `
            } else if (color === "warning") {
                return `
                    background-color: transparent !important;
                    box-shadow: none !important;
                    color: var(--warning-color);
                `
            } else if (color === "danger") {
                return `
                    background-color: transparent !important;
                    box-shadow: none !important;
                    color: var(--danger-color);
                `
            } else {
                return `
                    background-color: transparent !important;
                    box-shadow: none !important;
                    color: var(--text-color);
                `
            }
        }  else if (styled === "border") {
            if (color === "primary") {
                return `
                    background-color: transparent !important;
                    box-shadow: none !important;
                    color: var(--first-color);
                    border: 1px solid var(--first-color);
                    border-radius: 4px;
                `
            } else if (color === "info") {
                return `
                    background-color: transparent !important;
                    box-shadow: none !important;
                    color: var(--info-color);
                    border: 1px solid var(--info-color);
                    border-radius: 4px;
                `
            } else if (color === "success") {
                return `
                    background-color: transparent !important;
                    box-shadow: none !important;
                    color: var(--success-color);
                    border: 1px solid var(--success-color);
                    border-radius: 4px;
                `
            } else if (color === "warning") {
                return `
                    background-color: transparent !important;
                    box-shadow: none !important;
                    color: var(--warning-color);
                    border: 1px solid var(--warning-color);
                    border-radius: 4px;
                `
            } else if (color === "danger") {
                return `
                    background-color: transparent !important;
                    box-shadow: none !important;
                    color: var(--danger-color);
                    border: 1px solid var(--danger-color);
                    border-radius: 4px;
                `
            } else {
                return `
                    background-color: transparent !important;
                    box-shadow: none !important;
                    color: var(--text-color);
                    border: 1px solid var(--text-color);
                    border-radius: 4px;
                `
            }
        } else {
            return `
                border-radius: 4px;
            `
        }
    }}
`

export const ButtonLinkContainer = styled(Link)<Props>`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 5px;
    color: #FFFFFF;
    outline: none;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    height: 100%;
    padding: 7px 14px;

    ${({height_button}) => {
        if (height_button) {
            return `height: ${height_button}px !important;`
        }
    }}

    ${({width_button}) => {
        if (width_button) {
            return `width: ${width_button}px !important;`
        }
    }}

    ${({ color }) => {
        if (color === "primary") {
            return `
                background: var(--first-color);
                &:hover {
                    box-shadow: var(--bs-first);
                }
            `
        } else if (color === "info") {
            return `
                background: var(--info-color);
                &:hover {
                    box-shadow: var(--bs-info);
                }
            `
        } else if (color === "success") {
            return `
                background: var(--success-color);
                &:hover {
                    box-shadow: var(--bs-success);
                }
            `
        } else if (color === "warning") {
            return `
                background: var(--warning-color);
                &:hover {
                    box-shadow: var(--bs-warning);
                }
            `
        }  else if (color === "danger") {
            return `
                background: var(--danger-color);
                &:hover {
                    box-shadow: var(--bs-danger);
                }
            `
        }  else if (color === "white") {
            return `
                background: var(--container-color);
                color: var(--first-color);
            `
        }  else {
            return `
                background: var(--text-color);
                &:hover {
                    box-shadow: var(--bs-grey);
                }
            `
        }
    }}

    ${({ size }) => {
        if (size === "small") {
            return `
                font-size: var(--small-font-size);
                line-height: 17px;
                height: 30px;
                padding: 7px 20xp;
                width: 75px;
            `
        } else if (size === "large") {
            return `
                font-size: var(--h3-font-size);
                line-height: 19px;
                height: 55px;
                padding: 18px 36xp;
                width: 115px;
            `
        } else {
            return `
                font-size: var(--normal-font-size);
                line-height: 18px;
                height: 41px;
                padding: 12px 30xp;
                width: 112px;
            `
        }
    }}

    ${({styled, size, color}) => {
        if (styled === "rounded") {
            return `
                border-radius: 18px;
            `
        } else if (styled === "circle") {
            if (size === "small") {
                return `
                    border-radius: 50%;
                    height: 30px !important;
                    width: 30px !important;
                    padding: 0 !important;
                    line-height: none !imporant;
                `
            } else if (size === "large") {
                return `
                    border-radius: 50%;
                    height: 55px !important;
                    width: 55px !important;
                    padding: 0 !important;
                    line-height: none !imporant;
                `
            } else {
                return `
                    border-radius: 50%;
                    height: 41px !important;
                    width: 41px !important;
                    padding: 0 !important;
                    line-height: none !imporant;
                `
            }
        } else if (styled === "transparent") {
            if (color === "primary") {
                return `
                    background-color: transparent !important;
                    box-shadow: none !important;
                    color: var(--first-color);
                `
            } else if (color === "info") {
                return `
                    background-color: transparent !important;
                    box-shadow: none !important;
                    color: var(--info-color);
                `
            } else if (color === "success") {
                return `
                    background-color: transparent !important;
                    box-shadow: none !important;
                    color: var(--success-color);
                `
            } else if (color === "warning") {
                return `
                    background-color: transparent !important;
                    box-shadow: none !important;
                    color: var(--warning-color);
                `
            } else if (color === "danger") {
                return `
                    background-color: transparent !important;
                    box-shadow: none !important;
                    color: var(--danger-color);
                `
            } else {
                return `
                    background-color: transparent !important;
                    box-shadow: none !important;
                    color: var(--text-color);
                `
            }
        } else if (styled === "border") {
            if (color === "primary") {
                return `
                    background-color: transparent !important;
                    box-shadow: none !important;
                    color: var(--first-color);
                    border: 1px solid var(--first-color);
                `
            } else if (color === "info") {
                return `
                    background-color: transparent !important;
                    box-shadow: none !important;
                    color: var(--info-color);
                    border: 1px solid var(--info-color);
                `
            } else if (color === "success") {
                return `
                    background-color: transparent !important;
                    box-shadow: none !important;
                    color: var(--success-color);
                    border: 1px solid var(--success-color);
                `
            } else if (color === "warning") {
                return `
                    background-color: transparent !important;
                    box-shadow: none !important;
                    color: var(--warning-color);
                    border: 1px solid var(--warning-color);
                `
            } else if (color === "danger") {
                return `
                    background-color: transparent !important;
                    box-shadow: none !important;
                    color: var(--danger-color);
                    border: 1px solid var(--danger-color);
                `
            } else {
                return `
                    background-color: transparent !important;
                    box-shadow: none !important;
                    color: var(--text-color);
                    border: 1px solid var(--text-color);
                `
            }
        } else {
            return `
                border-radius: 3px;
            `
        }
    }}
`

export const ButtonLinkHrefContainer = styled.a<Props>`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 5px;
    color: #FFFFFF;
    outline: none;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    height: 100%;
    padding: 7px 14px;

    ${({height_button}) => {
        if (height_button) {
            return `height: ${height_button}px !important;`
        }
    }}

    ${({width_button}) => {
        if (width_button) {
            return `width: ${width_button}px !important;`
        }
    }}

    ${({ color }) => {
        if (color === "primary") {
            return `
                background: var(--first-color);
                &:hover {
                    box-shadow: var(--bs-first);
                }
            `
        } else if (color === "info") {
            return `
                background: var(--info-color);
                &:hover {
                    box-shadow: var(--bs-info);
                }
            `
        } else if (color === "success") {
            return `
                background: var(--success-color);
                &:hover {
                    box-shadow: var(--bs-success);
                }
            `
        } else if (color === "warning") {
            return `
                background: var(--warning-color);
                &:hover {
                    box-shadow: var(--bs-warning);
                }
            `
        }  else if (color === "danger") {
            return `
                background: var(--danger-color);
                &:hover {
                    box-shadow: var(--bs-danger);
                }
            `
        }  else if (color === "white") {
            return `
                background: var(--container-color);
                color: var(--first-color);
            `
        }  else {
            return `
                background: var(--text-color);
                &:hover {
                    box-shadow: var(--bs-grey);
                }
            `
        }
    }}

    ${({ size }) => {
        if (size === "small") {
            return `
                font-size: var(--small-font-size);
                line-height: 17px;
                height: 30px;
                padding: 7px 20xp;
                width: 75px;
            `
        } else if (size === "large") {
            return `
                font-size: var(--h3-font-size);
                line-height: 19px;
                height: 55px;
                padding: 18px 36xp;
                width: 115px;
            `
        } else {
            return `
                font-size: var(--normal-font-size);
                line-height: 18px;
                height: 41px;
                padding: 12px 30xp;
                width: 112px;
            `
        }
    }}

    ${({styled, size, color}) => {
        if (styled === "rounded") {
            return `
                border-radius: 18px;
            `
        } else if (styled === "circle") {
            if (size === "small") {
                return `
                    border-radius: 50%;
                    height: 30px !important;
                    width: 30px !important;
                    padding: 0 !important;
                    line-height: none !imporant;
                `
            } else if (size === "large") {
                return `
                    border-radius: 50%;
                    height: 55px !important;
                    width: 55px !important;
                    padding: 0 !important;
                    line-height: none !imporant;
                `
            } else {
                return `
                    border-radius: 50%;
                    height: 41px !important;
                    width: 41px !important;
                    padding: 0 !important;
                    line-height: none !imporant;
                `
            }
        } else if (styled === "transparent") {
            if (color === "primary") {
                return `
                    background-color: transparent !important;
                    box-shadow: none !important;
                    color: var(--first-color);
                `
            } else if (color === "info") {
                return `
                    background-color: transparent !important;
                    box-shadow: none !important;
                    color: var(--info-color);
                `
            } else if (color === "success") {
                return `
                    background-color: transparent !important;
                    box-shadow: none !important;
                    color: var(--success-color);
                `
            } else if (color === "warning") {
                return `
                    background-color: transparent !important;
                    box-shadow: none !important;
                    color: var(--warning-color);
                `
            } else if (color === "danger") {
                return `
                    background-color: transparent !important;
                    box-shadow: none !important;
                    color: var(--danger-color);
                `
            } else {
                return `
                    background-color: transparent !important;
                    box-shadow: none !important;
                    color: var(--text-color);
                `
            }
        } else if (styled === "border") {
            if (color === "primary") {
                return `
                    background-color: transparent !important;
                    box-shadow: none !important;
                    color: var(--first-color);
                    border: 1px solid var(--first-color);
                `
            } else if (color === "info") {
                return `
                    background-color: transparent !important;
                    box-shadow: none !important;
                    color: var(--info-color);
                    border: 1px solid var(--info-color);
                `
            } else if (color === "success") {
                return `
                    background-color: transparent !important;
                    box-shadow: none !important;
                    color: var(--success-color);
                    border: 1px solid var(--success-color);
                `
            } else if (color === "warning") {
                return `
                    background-color: transparent !important;
                    box-shadow: none !important;
                    color: var(--warning-color);
                    border: 1px solid var(--warning-color);
                `
            } else if (color === "danger") {
                return `
                    background-color: transparent !important;
                    box-shadow: none !important;
                    color: var(--danger-color);
                    border: 1px solid var(--danger-color);
                `
            } else {
                return `
                    background-color: transparent !important;
                    box-shadow: none !important;
                    color: var(--text-color);
                    border: 1px solid var(--text-color);
                `
            }
        } else {
            return `
                border-radius: 3px;
            `
        }
    }}
`