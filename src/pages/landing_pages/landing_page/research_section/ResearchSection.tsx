import { ResearchSectionContainer, ResearchSectionContent, ResearchSectionContentButtonContainer, ResearchSectionContentDetail, ResearchSectionContentImage, ResearchSectionContentLeft, ResearchSectionContentRight, ResearchSectionTitle } from "./ResearchSection.elements"
import DevProductivity from "../../../../images/dev_productivity.svg"
import { Button } from "../../../../components/button/Button"

const ResearchSection = () => {
    return (
        <ResearchSectionContainer>
            <ResearchSectionContent>
                <ResearchSectionContentLeft>
                    <ResearchSectionTitle>Penelitian</ResearchSectionTitle>
                    <ResearchSectionContentDetail>
                        Dikti AI Center mendukung solusi untuk banyak pertanyaan penelitian. Temukan lebih lanjut tentang solusi dan proyek yang telah mendapatkan manfaat dari lab kami.
                    </ResearchSectionContentDetail>

                    <ResearchSectionContentButtonContainer>
                        <Button
                            type="link"
                            color="primary"
                            size="default"
                            styled="default"
                            to="/penelitian/list"
                            width={ 200 }
                            height={ 50 }
                        >
                            Lihat Penelitian
                        </Button>
                        <Button
                            type="link"
                            color="primary"
                            size="default"
                            styled="border"
                            to="/daftar-penelitian"
                            width={ 200 }
                            height={ 50 }
                        >
                            Daftar Penelitian
                        </Button>
                    </ResearchSectionContentButtonContainer>
                </ResearchSectionContentLeft>
                <ResearchSectionContentRight>
                    <ResearchSectionContentImage src={ DevProductivity }/>
                </ResearchSectionContentRight>
            </ResearchSectionContent>
        </ResearchSectionContainer>
    )
}

export default ResearchSection