import { HomeSectionCard, HomeSectionCardContainer, HomeSectionCardDetail, HomeSectionCardFooter, HomeSectionCardHeader, HomeSectionCardIcon, HomeSectionContainer, HomeSectionContent, HomeSectionDescription, HomeSectionImage, HomeSectionLeft, HomeSectionRight, HomeSectionTitle } from "./HomeSection.elements"
import Firmware from "../../../../images/firmware.svg"
import { Button } from "../../../../components/button/Button"
import { useEffect, useState } from "react"
import { HomeDetail } from "../../../../dummy/LandingPage"
import { FaChevronRight } from "react-icons/fa"
import { HiOutlineAcademicCap, HiOutlineBeaker, HiOutlineCog } from "react-icons/hi"

const HomeSection = () => {
    const [detail, setDetail] = useState({
        title: '',
        title_spotlight: '',
        description: '',
    })

    useEffect(() => {
        const Detail = async () => {
            setDetail({
                title: HomeDetail.title,
                title_spotlight: HomeDetail.title_spotlight,
                description: HomeDetail.description,
            })
        }

        Detail()
    }, [])

    return (
        <HomeSectionContainer>
            <HomeSectionContent>
                <HomeSectionLeft>
                    <HomeSectionTitle>
                        { detail.title } <span style={{ color: "var(--first-color)" }}>{detail.title_spotlight}</span>
                    </HomeSectionTitle>
                    <HomeSectionDescription>
                        { detail.description }
                    </HomeSectionDescription>

                    <HomeSectionCardContainer>
                        <HomeSectionCard>
                            <HomeSectionCardDetail>
                                <HomeSectionCardHeader>
                                    Untuk Penelitian
                                </HomeSectionCardHeader>
                                <HomeSectionCardFooter>
                                    <Button
                                        type="link"
                                        color="warning"
                                        size="default"
                                        styled="default"
                                        to="/#"
                                    >
                                        Lihat <FaChevronRight/>
                                    </Button>
                                </HomeSectionCardFooter>
                            </HomeSectionCardDetail>

                            <HomeSectionCardIcon>
                                <HiOutlineBeaker/>
                            </HomeSectionCardIcon>
                        </HomeSectionCard>

                        <HomeSectionCard>
                            <HomeSectionCardDetail>
                                <HomeSectionCardHeader>
                                    Untuk Industri
                                </HomeSectionCardHeader>
                                <HomeSectionCardFooter>
                                    <Button
                                        type="link"
                                        color="warning"
                                        size="default"
                                        styled="default"
                                        to="/#"
                                    >
                                        Lihat <FaChevronRight/>
                                    </Button>
                                </HomeSectionCardFooter>
                            </HomeSectionCardDetail>

                            <HomeSectionCardIcon>
                                <HiOutlineCog/>
                            </HomeSectionCardIcon>
                        </HomeSectionCard>

                        <HomeSectionCard>
                            <HomeSectionCardDetail>
                                <HomeSectionCardHeader>
                                    Untuk Mahasiswa
                                </HomeSectionCardHeader>
                                <HomeSectionCardFooter>
                                    <Button
                                        type="link"
                                        color="warning"
                                        size="default"
                                        styled="default"
                                        to="/#"
                                    >
                                        Lihat <FaChevronRight/>
                                    </Button>
                                </HomeSectionCardFooter>
                            </HomeSectionCardDetail>

                            <HomeSectionCardIcon>
                                <HiOutlineAcademicCap/>
                            </HomeSectionCardIcon>
                        </HomeSectionCard>
                    </HomeSectionCardContainer>
                </HomeSectionLeft>

                <HomeSectionRight>
                    <HomeSectionImage src={ Firmware }/>
                </HomeSectionRight>
            </HomeSectionContent>
        </HomeSectionContainer>
    )
}

export default HomeSection