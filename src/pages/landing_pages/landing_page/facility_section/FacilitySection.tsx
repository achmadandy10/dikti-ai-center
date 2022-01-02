import { FacilitySectionContainer, FacilitySectionContent, FacilitySectionContentDetail, FacilitySectionContentImage, FacilitySectionContentLeft, FacilitySectionContentRight, FacilitySectionTitle } from "./FacilitySection.elements"
import DGXServer from "../../../../images/dgx-server.jpg"
import { Button } from "../../../../components/button/Button"
import { FaChevronRight } from "react-icons/fa"

const FacilitySection = () => {
    return (
        <FacilitySectionContainer>
            <FacilitySectionContent>
                <FacilitySectionContentLeft>
                    <FacilitySectionTitle>Fasilitas</FacilitySectionTitle>
                    <FacilitySectionContentDetail>
                        Untuk mengatasi masalah tersebut Kemdikbudristek meluncurkan suatu fasilitas server komputasi berkemampuan tinggi yang dapat dimanfaatkan secara terbuka oleh semua insan Dikti  di Indonesia.   Fasilitas Superkomputer DIKTI AI Center ini bertujuan agar terciptanya talenta AI nasional melalui berbagai kegiatan pelatihan maupun pendidikan yang bekerja sama dengan industri  dalam kaitannya dengan Merdeka Belajar Kampus Merdeka (MBKM). Fasilitas ini juga  digunakan oleh  perguruan tinggi dan mitra untuk menghasilkan inovasi-inovasi di bidang Artificial Intelligence yang dapat menjawab kebutuhan industri dan lembaga pemerintah.
                    </FacilitySectionContentDetail>

                    <Button
                        type="link"
                        color="white"
                        size="default"
                        styled="default"
                        to="/#"
                        width={ window.innerWidth >= 500 ? 200 : 150 }
                        height={ 50 }
                    >
                        Lihat Fasilitas <FaChevronRight/>
                    </Button>
                </FacilitySectionContentLeft>
                <FacilitySectionContentRight>
                    <FacilitySectionContentImage src={ DGXServer }/>
                </FacilitySectionContentRight>
            </FacilitySectionContent>
        </FacilitySectionContainer>
    )
}

export default FacilitySection