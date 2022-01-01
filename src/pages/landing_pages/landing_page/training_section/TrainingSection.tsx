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
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis nam eligendi reiciendis nobis vitae distinctio, iste blanditiis obcaecati dolor fugiat dolores asperiores assumenda rerum sint? Consectetur laboriosam obcaecati quos optio.
                    </TrainingSectionContentDetail>

                    <Button
                        type="link"
                        color="white"
                        size="default"
                        styled="default"
                        to="/fasilitas"
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