import { TrainingSectionContainer, TrainingSectionContent, TrainingSectionContentDetail, TrainingSectionContentImage, TrainingSectionContentLeft, TrainingSectionContentRight, TrainingSectionTitle } from "./TrainingSection.elements"
import CircuitBoard from "../../../../images/circuit_board.svg"
import { Button } from "../../../../components/button/Button"
import { FaChevronRight } from "react-icons/fa"

const TrainingSection = () => {
    return (
        <TrainingSectionContainer>
            <TrainingSectionContent>
                <TrainingSectionContentLeft>
                    <TrainingSectionTitle>Pelatihan</TrainingSectionTitle>
                    <TrainingSectionContentDetail>
                        Kegiatan pendidikan dan kualifikasi kami untuk topik AI telah dibuat untuk memenuhi kebutuhan mendesak akan pakar AI. Pelatihan bisa mencakup kebutuhan untuk pelajar, pakar, industri, dan perusahaan rintisan.
                    </TrainingSectionContentDetail>

                    <Button
                        type="link"
                        color="white"
                        size="default"
                        styled="default"
                        to="/layanan/pelatihan"
                        width={ window.innerWidth >= 500 ? 200 : 150 }
                        height={ 50 }
                    >
                        Lihat Pelatihan <FaChevronRight/>
                    </Button>
                </TrainingSectionContentLeft>
                <TrainingSectionContentRight>
                    <TrainingSectionContentImage src={ CircuitBoard }/>
                </TrainingSectionContentRight>
            </TrainingSectionContent>
        </TrainingSectionContainer>
    )
}

export default TrainingSection