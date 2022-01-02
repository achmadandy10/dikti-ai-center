import { ServiceFacilityCard, ServiceFacilityCardDetail, ServiceFacilityCardImage, ServiceFacilityCardImageContainer, ServiceFacilityContainer, ServiceFacilityTitle } from "./ServiceFacility.elements"
import Facility from "../../../../images/facility.jpg"

const ServiceFacility = () => {
    return (
        <ServiceFacilityContainer>
            <ServiceFacilityTitle>Fasilitas</ServiceFacilityTitle>

            <ServiceFacilityCard>
                <ServiceFacilityCardDetail>
                    DIKTI AI Center memiliki kemampuan  komputasi sebesar 25 TerraFLOPS, menggunakan teknologi dari NVIDIA.   Pemilihan platform ini berdasarkan pertimbangan solusi AI total yang disediakan oleh NVIDIA, baik dari sisi perangkat keras, perangkat lunak dan ketersediaan data.  
                    <br />
                    <br />
                    Fasilitas Super komputer ini disusun dari 5 node mesin server NVIDIA DGX A100, yang masing-masing nodenya memiliki Dual CPU AMD Rome dengan 8 Graphical Processor Unit (GPU) dengan kemampuan Multi Instance GPU (MIG). Dilengkapi 1 TB RAM dan 5 TB High Speed Storage NVME di tiap node server, setiap node ini memiliki 5 TerraFLOPS.  
                    <br />
                    <br />
                    Node-node super komputer ini dikoneksikan dengan   jaringan cepat Mellanox serta koneksi NVLink antar 5 x 8 GPU tersebut.  
                </ServiceFacilityCardDetail>
            
                <ServiceFacilityCardImageContainer>
                    <ServiceFacilityCardImage src={ Facility }/>
                </ServiceFacilityCardImageContainer>
            </ServiceFacilityCard>
        </ServiceFacilityContainer>

    )
}

export default ServiceFacility