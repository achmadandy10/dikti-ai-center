import { ResearchSectionContainer, ResearchSectionContent, ResearchSectionContentDetail, ResearchSectionContentImage, ResearchSectionContentLeft, ResearchSectionContentRight, ResearchSectionTitle } from "./ResearchSection.elements"
import DevProductivity from "../../../../images/dev_productivity.svg"
import { Button } from "../../../../components/button/Button"
import { FaChevronRight } from "react-icons/fa"

const ResearchSection = () => {
    return (
        <ResearchSectionContainer>
            <ResearchSectionContent>
                <ResearchSectionContentLeft>
                    <ResearchSectionTitle>Penelitian</ResearchSectionTitle>
                    <ResearchSectionContentDetail>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis nam eligendi reiciendis nobis vitae distinctio, iste blanditiis obcaecati dolor fugiat dolores asperiores assumenda rerum sint? Consectetur laboriosam obcaecati quos optio.
                    </ResearchSectionContentDetail>

                    <Button
                        type="link"
                        color="primary"
                        size="default"
                        styled="default"
                        to="/penelitian"
                        width={ window.innerWidth >= 500 ? 200 : 150 }
                        height={ 50 }
                    >
                        Lihat Penelitian <FaChevronRight/>
                    </Button>
                </ResearchSectionContentLeft>
                <ResearchSectionContentRight>
                    <ResearchSectionContentImage src={ DevProductivity }/>
                </ResearchSectionContentRight>
            </ResearchSectionContent>
        </ResearchSectionContainer>
    )
}

export default ResearchSection