import { UtilizationSectionContainer, UtilizationSectionContent, UtilizationSectionImage, UtilizationSectionOverlay, UtilizationSectionTitle } from "./UtilizationSection.elements"
import Flow from "../../../../images/flow-app.png"

const UtilizationSection = () => {
    return (
        <UtilizationSectionContainer>
            <UtilizationSectionOverlay>
                <UtilizationSectionTitle>Pemanfaatan Dikti AI Center</UtilizationSectionTitle>
                <UtilizationSectionContent>
                    <UtilizationSectionImage src={ Flow }/>
                </UtilizationSectionContent>
            </UtilizationSectionOverlay>
        </UtilizationSectionContainer>
    )
}

export default UtilizationSection