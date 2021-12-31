import { KedairekaPartnerCard, KedairekaPartnerContainer, KedairekaPartnerContent, KedairekaPartnerImage, KedairekaPartnerTitle } from "./KedairekaPartner.elements"
import Partner from "../../../../images/partner-kedaireka.png"

const KedairekaPartner = () => {
    return (
        <KedairekaPartnerContainer>
            <KedairekaPartnerTitle>Partner</KedairekaPartnerTitle>
            <KedairekaPartnerContent>
                <KedairekaPartnerCard>
                    <KedairekaPartnerImage src={ Partner }/>
                </KedairekaPartnerCard>
            </KedairekaPartnerContent>
        </KedairekaPartnerContainer>
    )
}

export default KedairekaPartner