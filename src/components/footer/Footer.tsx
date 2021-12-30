import { CopyRightContainer, FooterContainer, FooterCopyRight } from "./Footer.elements"

export const CopyRight = () => {
    return (
        <CopyRightContainer>
            &copy; 2021 Dikti AI Center
        </CopyRightContainer>
    )
}

const Footer = () => {
    return (
        <FooterContainer>
            <FooterCopyRight>&copy; 2021 Dikti AI Center</FooterCopyRight>
        </FooterContainer>
    )
}   

export default Footer