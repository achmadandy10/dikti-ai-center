import { FacilitySectionContainer, FacilitySectionContent, FacilitySectionContentDetail, FacilitySectionContentImage, FacilitySectionContentLeft, FacilitySectionContentRight, FacilitySectionTitle } from "./FacilitySection.elements"
import ServerCluster from "../../../../images/server_cluster.svg"
import { Button } from "../../../../components/button/Button"
import { FaChevronRight } from "react-icons/fa"

const FacilitySection = () => {
    return (
        <FacilitySectionContainer>
            <FacilitySectionContent>
                <FacilitySectionContentLeft>
                    <FacilitySectionTitle>Fasilitas</FacilitySectionTitle>
                    <FacilitySectionContentDetail>
                        Solusi kami mencakup berbagai aspek teknik AI, menyediakan infrastruktur dasar untuk membangun dan mengimplementasikan sistem AI dengan cepat. Anda dapat melatih sistem Anda dengan data yang telah diproses sebelumnya dan mengevaluasinya pada perangkat edge di lingkungan nyata.
                    </FacilitySectionContentDetail>

                    <Button
                        type="link"
                        color="white"
                        size="default"
                        styled="default"
                        to="/fasilitas"
                        width={ window.innerWidth >= 500 ? 200 : 150 }
                        height={ 50 }
                    >
                        Lihat Fasilitas <FaChevronRight/>
                    </Button>
                </FacilitySectionContentLeft>
                <FacilitySectionContentRight>
                    <FacilitySectionContentImage src={ ServerCluster }/>
                </FacilitySectionContentRight>
            </FacilitySectionContent>
        </FacilitySectionContainer>
    )
}

export default FacilitySection