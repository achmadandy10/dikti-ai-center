import { RealationSectionContentSubTitle, RealationSectionContentTitle, RelationSectionContainer, RelationSectionContent, RelationSectionContentImage, RelationSectionContentLeft, RelationSectionContentRight, RelationSectionTitle } from "./RelationSection.elements"
import ServerCluster from "../../../../images/secure_server.svg"

const RelationSection = () => {
    return (
        <RelationSectionContainer>
            <RelationSectionTitle>Jumlah Super Komputer yang Dimiliki Dikti</RelationSectionTitle>
            <RelationSectionContent>
                <RelationSectionContentLeft>
                    <RealationSectionContentSubTitle>Juga Dikti akan memiliki</RealationSectionContentSubTitle>
                    <RealationSectionContentTitle>
                        5 DGX A100
                        <br />
                        = 25 PetaFLOPS
                    </RealationSectionContentTitle>
                </RelationSectionContentLeft>
                <RelationSectionContentRight>
                    <RelationSectionContentImage src={ ServerCluster }/>
                </RelationSectionContentRight>
            </RelationSectionContent>
        </RelationSectionContainer>
    )
}

export default RelationSection