import { UtilizationSectionContainer, UtilizationSectionContent, UtilizationSectionOverlay, UtilizationSectionSlider, UtilizationSectionSliderContent, UtilizationSectionSliderDetail, UtilizationSectionSliderImage, UtilizationSectionSliderName, UtilizationSectionTitle } from "./UtilizationSection.elements"
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination, Keyboard, Autoplay, Grid } from 'swiper';
import { useEffect, useState } from "react";
import { UtilizationDetail } from "../../../../dummy/DetailLandingPage";
import { LoadingElement } from "../../../../components/loading/Loading";

SwiperCore.use([Navigation, Pagination, Keyboard, Autoplay, Grid]);

interface Props {
    image: string
    name: string
    detail: string
}

const UtilizationSection = () => {
    const [get, setGet] = useState(true)
    const [list, setList] = useState<Props[]>([])

    useEffect(() => {
        const GetDetail = async () => {
            setList(UtilizationDetail)
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
                <UtilizationSectionSlider>
                    <UtilizationSectionSliderImage src={ image }/>
                    <UtilizationSectionSliderContent>
                        <UtilizationSectionSliderName>{ name }</UtilizationSectionSliderName>
                        <UtilizationSectionSliderDetail>{ detail }</UtilizationSectionSliderDetail>
                    </UtilizationSectionSliderContent>
                </UtilizationSectionSlider>
            </SwiperSlide>
        )
    })

    return (
        <UtilizationSectionContainer>
            <UtilizationSectionOverlay>
                <UtilizationSectionTitle>Jumlah Super Komputer yang Dimiliki Perguruan Tinggi</UtilizationSectionTitle>
                <UtilizationSectionContent>
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
                </UtilizationSectionContent>
            </UtilizationSectionOverlay>
        </UtilizationSectionContainer>
    )
}

export default UtilizationSection