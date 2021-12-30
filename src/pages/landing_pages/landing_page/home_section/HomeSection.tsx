import { HomeSectionButtonContainer, HomeSectionContainer, HomeSectionContent, HomeSectionDescription, HomeSectionImage, HomeSectionLeft, HomeSectionRight, HomeSectionTitle } from "./HomeSection.elements"
import Firmware from "../../../../images/firmware.svg"
import { Button } from "../../../../components/button/Button"
import { useEffect, useState } from "react"
import { HomeDetail } from "../../../../dummy/DetailLandingPage"

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
                description: HomeDetail.descripton,
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
                    <HomeSectionButtonContainer>
                        <Button
                            type="link"
                            color="primary"
                            size="large"
                            styled="default"
                            to={"/masuk"}
                            width={150}
                        >
                            Masuk
                        </Button>
                        <Button
                            type="link"
                            color="primary"
                            size="large"
                            styled="border"
                            to={"/daftar"}
                            width={150}
                        >
                            Daftar
                        </Button>
                    </HomeSectionButtonContainer>
                </HomeSectionLeft>

                <HomeSectionRight>
                    <HomeSectionImage src={ Firmware }/>
                </HomeSectionRight>
            </HomeSectionContent>
        </HomeSectionContainer>
    )
}

export default HomeSection