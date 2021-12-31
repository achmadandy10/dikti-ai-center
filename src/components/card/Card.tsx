import { ReactNode } from "react"
import { CardInfoContainer, CardInfoDetail, CardInfoDetailItem, CardInfoDetailTitle, CardInfoIcon } from "./Card.elements"

interface Props {
    children?: ReactNode,
    title: string,
    detail: string
}

export const CardInfo = ({ children, title, detail }: Props) => {
    return (
        <CardInfoContainer>
            <CardInfoIcon>
                { children }
            </CardInfoIcon>

            <CardInfoDetail>
                <CardInfoDetailTitle>{ title }</CardInfoDetailTitle>
                <CardInfoDetailItem>{ detail }</CardInfoDetailItem>
            </CardInfoDetail>
        </CardInfoContainer>
    )
}