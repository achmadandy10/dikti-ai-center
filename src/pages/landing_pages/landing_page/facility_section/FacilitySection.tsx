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
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis nam eligendi reiciendis nobis vitae distinctio, iste blanditiis obcaecati dolor fugiat dolores asperiores assumenda rerum sint? Consectetur laboriosam obcaecati quos optio.
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