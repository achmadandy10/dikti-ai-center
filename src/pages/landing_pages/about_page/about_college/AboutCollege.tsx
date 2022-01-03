import { AboutCollegeCard, AboutCollegeContainer, AboutCollegeContent, AboutCollegeOverlay, AboutCollegeSlider, AboutCollegeSliderContent, AboutCollegeSliderDetail, AboutCollegeSliderImage, AboutCollegeSliderName, AboutCollegeSubTitle } from "./AboutCollege.elements"
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination, Keyboard, Autoplay, Grid } from 'swiper';
import { useEffect, useState } from "react";
import { CollegeDetail } from "../../../../dummy/College";
import { LoadingElement } from "../../../../components/loading/Loading";
import Kemendikbud from "../../../../images/kemendikbud.png"

SwiperCore.use([Navigation, Pagination, Keyboard, Autoplay, Grid]);

interface Props {
    image: string
    name: string
    detail: string
}

const AboutCollege = () => {
    const [get, setGet] = useState(true)
    const [list, setList] = useState<Props[]>([])

    useEffect(() => {
        const GetDetail = async () => {
            setList(CollegeDetail)
            setGet(false)
        }

        GetDetail()
    }, [])

    if (get) {
        return <LoadingElement/>
    }

    const elementSlider = list.map(({image, name, detail}, idx) => {
        return (
            <SwiperSlide key={ idx }>
                <AboutCollegeSlider>
                    <AboutCollegeSliderImage src={ image }/>
                    <AboutCollegeSliderContent>
                        <AboutCollegeSliderName>{ name }</AboutCollegeSliderName>
                        <AboutCollegeSliderDetail>{ detail }</AboutCollegeSliderDetail>
                    </AboutCollegeSliderContent>
                </AboutCollegeSlider>
            </SwiperSlide>
        )
    })

    return (
        <AboutCollegeContainer>
            <AboutCollegeOverlay>
                <AboutCollegeSubTitle>Statistik Fasilitas Komputasi AI</AboutCollegeSubTitle>
                <AboutCollegeCard>
                    <AboutCollegeSliderImage src={ Kemendikbud }/>
                    <AboutCollegeSliderContent>
                        <AboutCollegeSliderName>Dikti AI Center</AboutCollegeSliderName>
                        <AboutCollegeSliderDetail>25 PetaFLOPS (5 DGX A100)</AboutCollegeSliderDetail>
                    </AboutCollegeSliderContent>
                </AboutCollegeCard>
                <AboutCollegeContent>
                    <Swiper
                        breakpoints={{
                            700: {
                                slidesPerView: 2,
                            },
                            560: {
                                slidesPerView: 1,
                            },
                            300: {
                                slidesPerView: 1,
                            }
                        }}
                        slidesPerView={2}
                        grid={{
                            rows: 4
                        }} 
                        pagination={{
                            clickable: true
                        }}
                    >
                        { elementSlider }
                    </Swiper>
                </AboutCollegeContent>
            </AboutCollegeOverlay>
        </AboutCollegeContainer>
    )
}

export default AboutCollege