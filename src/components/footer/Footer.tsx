import { CopyRightContainer, FooterContainer, FooterContent, FooterContentCategoryContainer, FooterContentCategoryLink, FooterContentCategoryTitle, FooterContentDetail, FooterContentImage, FooterContentItem, FooterContentSosialContainer, FooterContentSosialIcon, FooterContentSosialIconContainer, FooterContentSubDetail, FooterCopyRight } from "./Footer.elements"
import dateFormat from "dateformat"
import LaporDikti from "../../images/lapor-dikti.svg"
import { Button } from "../button/Button"
import { ReactNode, useEffect, useState } from "react"
import { FooterCategory, FooterSocial } from "../../dummy/Footer"

const year = dateFormat("yyyy")

export const CopyRight = () => {
    return (
        <CopyRightContainer>
            Direktorat Jenderal Pendidikan Tinggi &copy; { year } All Right Reserved
        </CopyRightContainer>
    )
}

interface Category {
    name: string
    link: string
}

interface Social {
    link: string
    icon: ReactNode
}

const Footer = () => {
    const [category, setCategory] = useState<Category[]>([])
    const [social, setSocial] = useState<Social[]>([])

    useEffect(() => {
        const GetData = async () => {
            setCategory(FooterCategory)
            setSocial(FooterSocial)
        }

        GetData()
    }, [])

    const elementCategory = category.map(({name, link}, idx) => {
        return (
            <FooterContentCategoryLink
                key={ idx }    
                href={ link }
            >
                { name }
            </FooterContentCategoryLink>
        )
    })

    const elementSocial = social.map(({link, icon}, idx) => {
        return (
            <FooterContentSosialIcon
                key={ idx }
                href={ link }
            >
                { icon }
            </FooterContentSosialIcon>
        )
    })

    return (
        <FooterContainer>
            <FooterContent>
                <FooterContentItem>
                    <FooterContentImage src={ LaporDikti }/>

                    <FooterContentDetail>
                        Direktorat Jenderal Pendidikan Tinggi Kementerian Pendidikan dan Kebudayaan Republik Indonesia
                    </FooterContentDetail>
                    <FooterContentSubDetail>
                        Alamat: Gedung D, Jalan Jenderal Sudirman, Pintu 1 Senayan, Jakarta Pusat 10270
                    </FooterContentSubDetail>
                    <Button
                        type="href"
                        color="info"
                        size="default"
                        styled="default"
                        to="tel:126"
                        width={ 200 }
                        height={ 50 }
                    >
                        Pusat Panggilan: 126
                    </Button>
                    <FooterContentSosialContainer>
                        Ikuti kami:
                        <FooterContentSosialIconContainer>
                            { elementSocial }
                        </FooterContentSosialIconContainer>
                    </FooterContentSosialContainer>
                </FooterContentItem>
                <FooterContentItem>
                    <FooterContentCategoryTitle>Kategori</FooterContentCategoryTitle>
                    <FooterContentCategoryContainer>
                        { elementCategory }
                    </FooterContentCategoryContainer>
                </FooterContentItem>
                <FooterContentItem>
                    <iframe 
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.3011922545634!2d106.80127421476911!3d-6.22395959549457!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f154dd05561f%3A0x1e55c10cb4f8c7f0!2sSekretariat%20Direktorat%20Jenderal%20Dikti!5e0!3m2!1sen!2sid!4v1640858060589!5m2!1sen!2sid" 
                        width="100%" 
                        height="450" 
                        loading="lazy"
                        title="Dikti Location"
                    />    
                </FooterContentItem>
            </FooterContent>
            <FooterCopyRight>
                Direktorat Jenderal Pendidikan Tinggi &copy; { year } All Right Reserved
            </FooterCopyRight>
        </FooterContainer>
    )
}   

export default Footer