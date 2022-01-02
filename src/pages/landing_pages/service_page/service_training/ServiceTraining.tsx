import { ServiceTrainingContainer, ServiceTrainingCard, ServiceTrainingTitle, ServiceTrainingImage, ServiceTrainingImageContainer } from "./ServiceTraining.elements"
import SPADA from "../../../../images/SPADA.png"
import PMAI from "../../../../images/PMAI.jpeg"
import TFT from "../../../../images/TFT.jpeg"

const ServiceTraining = () => {
    return (
        <ServiceTrainingContainer>
            <ServiceTrainingTitle>Pelatihan</ServiceTrainingTitle>

            <ServiceTrainingCard>
                Untuk mempersiapkan agar mahasiswa dan dosen dapat memanfaatkan fasilitas tersebut, DIKTI AI Center juga melaksanakan kegiatan pelatihan-pelatihan. Baik yang berupa pelatihan terkait pengelolaan super komputer, ataupun pelatihan terkait materi Data Science dan Artificial Intelligence.   Di dalam melakukan pelatihan tersebut pihak industri dan asosiasi terkait dilibatkan dalam penyusunan materi dan pelaksanaanya.  Pelatihan ini akan menggunakan salah satu node super komputer dengan perangkat lunak khusus. Diharapkan mahasiswa dan dosen dapat berinteraksi langsung dengan perangkat super komputer ini saat pelatihan. Pelatihan ini akan dilaksanakan berjejaring dengan menggunakan fasilitas SPADA.
                <br />
                <br />                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              
                Pemanfaatan  DIKTI AI Center didukung oleh Indonesia AI Research Consortium (IARC), konsorsium jejaring penelitian yang diinisiasi oleh Dirjen Dikti yang terbangun  dari 7  perguruan tinggi yang telah memiliki pengalaman operasional Superkomputer NVIDIA DGX serta telah melakukan berbagai penelitian di bidang AI.   Anggota konsorsium tersebut adalah Universitas Indonesia, Universitas Gunadarma, Institut Teknologi Bandung, Universitas Telkom, Universitas Gadjah Mada, Institut Teknologi Sepuluh Nopember dan Universitas Dian Nuswantoro.
            </ServiceTrainingCard>

            <ServiceTrainingCard>                   
                <ServiceTrainingImageContainer>                                                                         
                    <ServiceTrainingImage src={ SPADA }/>           
                    <ServiceTrainingImage src={ PMAI }/>
                    <ServiceTrainingImage src={ TFT }/>
                </ServiceTrainingImageContainer>
            </ServiceTrainingCard>
        </ServiceTrainingContainer>
    )
}

export default ServiceTraining                                                                                                                                                             