import { FaClock, FaMapMarked, FaPhone } from "react-icons/fa"
import { ContactPageCard, ContactPageCardDetail, ContactPageCardIcon, ContactPageCardInfo, ContactPageCardLabel, ContactPageCardTitle, ContactPageContainer, ContactPageContent, ContactPageTitle } from "./ContactPage.elements"

const ContactPage = () => {
    return (
        <ContactPageContainer>
            <ContactPageTitle>Kontak</ContactPageTitle>
            <ContactPageContent>
                <ContactPageCard>
                    <ContactPageCardTitle>Sekretariat Direktorat Jenderal Dikti</ContactPageCardTitle>
                    <ContactPageCardDetail>
                        <ContactPageCardInfo>
                            <ContactPageCardIcon>
                                <FaMapMarked/>
                            </ContactPageCardIcon>
                            <ContactPageCardLabel>
                                Gedung D Lantai 9, Jl. Raya Jend Sudirman Pintu I, Senayan, Kebayoran Baru, RT.1/RW.3, Kecamatan Tanah Abang, Kota Jakarta Selatan, Daerah Khusus Ibukota Jakarta 10270
                            </ContactPageCardLabel>
                            
                            <ContactPageCardIcon>
                                <FaClock/>
                            </ContactPageCardIcon>
                            <ContactPageCardLabel>
                                Buka - Tutup pukul 16.00
                            </ContactPageCardLabel>
                            
                            <ContactPageCardIcon>
                                <FaPhone/>
                            </ContactPageCardIcon>
                            <ContactPageCardLabel>
                                (021) 57946093
                            </ContactPageCardLabel>
                        </ContactPageCardInfo>
                        <iframe 
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.3011922545634!2d106.80127421476911!3d-6.22395959549457!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f154dd05561f%3A0x1e55c10cb4f8c7f0!2sSekretariat%20Direktorat%20Jenderal%20Dikti!5e0!3m2!1sen!2sid!4v1640858060589!5m2!1sen!2sid" 
                            width="100%" 
                            height="450" 
                            loading="lazy"
                        />    
                    </ContactPageCardDetail>
                </ContactPageCard>
            </ContactPageContent>
        </ContactPageContainer>
    )
}

export default ContactPage