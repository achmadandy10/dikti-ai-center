import { RelationSectionContainer, RelationSectionContent, RelationSectionContentImage, RelationSectionContentLeft, RelationSectionContentRight, RelationSectionTitle } from "./RelationSection.elements"
import ServerCluster from "../../../../images/server_cluster.svg"

const RelationSection = () => {
    return (
        <RelationSectionContainer>
            <RelationSectionTitle>Hubungan Riset Bersama</RelationSectionTitle>
            <RelationSectionContent>
                <RelationSectionContentLeft>
                    <ul>
                        <li>
                            IARC mendorong kerjasama antara perguruan tinggi dan industri serta perguruan tinggi dengan industri
                        </li>
                        <li>
                            Kerjasama ini dalam rangka penelitian bidang AI terkait permasalahan yang ada di industri dan pemerintahan yang dapat diselesaikan dengan solusi AI
                        </li>
                        <li>
                            IARC akan mengelola database partner industri maupun lembaga pemerintah, serta database peneliti bidang Artificial Intelligence, serta talenta yang telah menerima pelatihan
                        </li>
                    </ul>
                </RelationSectionContentLeft>
                <RelationSectionContentRight>
                    <RelationSectionContentImage src={ ServerCluster }/>
                </RelationSectionContentRight>
            </RelationSectionContent>
        </RelationSectionContainer>
    )
}

export default RelationSection