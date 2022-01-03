import { ServiceResearchCard, ServiceResearchCardContent, ServiceResearchCardTitle, ServiceResearchContainer, ServiceResearchList, ServiceResearchNumber, ServiceResearchText, ServiceResearchTitle } from "./ServiceResearch.elements"

const ServiceResearch = () => {
    return (
        <ServiceResearchContainer>
            <ServiceResearchTitle>Pelatihan</ServiceResearchTitle>

            <ServiceResearchCard>
                <ServiceResearchCardTitle>Tata Cara Menggunakan Website Dikti AI Center</ServiceResearchCardTitle>

                <ServiceResearchCardContent>
                    <ServiceResearchList>
                        <ServiceResearchNumber>1</ServiceResearchNumber>
                        <ServiceResearchText>Buat Akun</ServiceResearchText>
                    </ServiceResearchList>
                    <ServiceResearchList>
                        <ServiceResearchNumber>2</ServiceResearchNumber>
                        <ServiceResearchText>Isi Formulir Pendaftaran</ServiceResearchText>
                    </ServiceResearchList>
                    <ServiceResearchList>
                        <ServiceResearchNumber>3</ServiceResearchNumber>
                        <ServiceResearchText>Review Proposal</ServiceResearchText>
                    </ServiceResearchList>
                    <ServiceResearchList>
                        <ServiceResearchNumber>4</ServiceResearchNumber>
                        <ServiceResearchText>Pelatihan Penggunaan Fasilitas</ServiceResearchText>
                    </ServiceResearchList>
                    <ServiceResearchList>
                        <ServiceResearchNumber>5</ServiceResearchNumber>
                        <ServiceResearchText>Menggunakan Fasilitas</ServiceResearchText>
                    </ServiceResearchList>
                </ServiceResearchCardContent>
            </ServiceResearchCard>
        </ServiceResearchContainer>
    )
}

export default ServiceResearch