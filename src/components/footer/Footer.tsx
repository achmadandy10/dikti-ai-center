import { CopyRightContainer, FooterContainer, FooterCopyRight } from "./Footer.elements"
import dateFormat from "dateformat"

const year = dateFormat("yyyy")

export const CopyRight = () => {
    return (
        <CopyRightContainer>
            Direktorat Jenderal Pendidikan Tinggi &copy; { year } All Right Reserved
        </CopyRightContainer>
    )
}

const Footer = () => {
    return (
        <FooterContainer>
            <FooterCopyRight>
                Direktorat Jenderal Pendidikan Tinggi &copy; { year } All Right Reserved
            </FooterCopyRight>
        </FooterContainer>
    )
}   

export default Footer