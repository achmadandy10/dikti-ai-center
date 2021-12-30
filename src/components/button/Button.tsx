import { MouseEventHandler, ReactNode } from "react"
import { ButtonLinkContainer, ButtonSubmitContainer } from "./Button.elements"
import Loader from "react-loader-spinner";

interface Props {
    children: ReactNode
    color: string
    size: string
    styled: string
    fullWidth?: boolean
    width?: number
    height?: number
    onClicked?: MouseEventHandler
    to?: any
    type?: string
    loading?: boolean
}

const ButtonSubmit = ({ children, color, size, styled, width, height, onClicked, fullWidth, loading }: Props) => {
    return (
        <ButtonSubmitContainer
            color={ color }
            size={ size }
            styled={ styled }
            width_button={ width }
            height_button={ height }
            onClick={ onClicked }
            full_width={ fullWidth }
        >
            {
                loading ?
                    <Loader
                        type="TailSpin"
                        color="#FFFFFF"
                        height={30}
                        width={30}
                    />
                :
                    children
            }
        </ButtonSubmitContainer>
    )
}

const ButtonLink = ({ children, color, size, styled, width, height, fullWidth, to }: Props) => {
    return (
        <ButtonLinkContainer
            color={ color }
            size={ size }
            styled={ styled }
            width_button={ width }
            height_button={ height }
            to={ to }
            full_width={ fullWidth }
        >
            { children }
        </ButtonLinkContainer>
    )
}

export const Button = ({ children,type, color, size, styled, onClicked, to, fullWidth, width, height, loading }: Props) => {
    let element:any = ''

    if (type === "submit") {
        element = (
            <ButtonSubmit
                children={ children }
                color={ color }
                size={ size }
                styled={ styled }
                width={ width }
                height={ height }
                onClicked={ onClicked }
                loading={ loading }
                fullWidth={ fullWidth }
            />    
        )
    } else if (type === "link") {
        element = (
            <ButtonLink
                children={ children }
                color={ color }
                size={ size }
                styled={ styled }
                width={ width }
                height={ height }
                to={ to }
                fullWidth={ fullWidth }
            />
        )
    }
    
    return ( element )
}