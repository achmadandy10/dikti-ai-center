import { NewsSectionContainer, NewsSectionContent, NewsSectionSlide, NewsSectionSlideBody, NewsSectionSlideButtonContainer, NewsSectionSlideDate, NewsSectionSlideDetail, NewsSectionSlideImage, NewsSectionSlideTitle, NewsSectionSubTitle, NewsSectionTitle } from "./NewsSection.elements"
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination, Keyboard, Autoplay } from 'swiper';
import { useEffect, useState } from "react";
import { NewsListDetail } from "../../../../dummy/NewsList";
import { LoadingElement } from "../../../../components/loading/Loading";
import { Button } from "../../../../components/button/Button";
import { removeHTML } from "../../../../function/RemoveTag";

SwiperCore.use([Navigation, Pagination, Keyboard, Autoplay]);

interface Detail {
    title: string,
    slug: string,
    body: string,
    thumbnail: string,
    created_at: string,
}

const NewsSection = () => {
    const [get, setGet] = useState(true)
    const [list, setList] = useState<Detail[]>([])

    useEffect(() => {
        const GetDetail = async () => {
            setList(NewsListDetail)
            setGet(false)
        }

        GetDetail()
    }, [])

    if (get) {
        return <LoadingElement/>
    }

    const elementSlider = list.slice(0, 5).map(({ title, slug, body, thumbnail, created_at}, idx) => {
        var newTitle = ''

        if (title !== null) {
            if (window.innerWidth <= 500) {
                if (title.length <= 25) {
                    newTitle = title
                } else {
                    newTitle = `${title.substring(0, 25)}...`
                }
            } else if (window.innerWidth <= 768) {
                if (title.length <= 25) {
                    newTitle = title
                } else {
                    newTitle = `${title.substring(0, 25)}...`
                }
            } else if (window.innerWidth <= 25) {
                if (title.length <= 200) {
                    newTitle = title
                } else {
                    newTitle = `${title.substring(0, 25)}...`
                }
            } else {
                if (title.length <= 25) {
                    newTitle = title
                } else {
                    newTitle = `${title.substring(0, 25)}...`
                }
            }
        }
        
        var newBody = ''

        if (body !== null) {
            if (window.innerWidth <= 500) {
                if (body.length <= 100) {
                    newBody = body
                } else {
                    newBody = `${body.substring(0, 100)}...`
                }
            } else if (window.innerWidth <= 768) {
                if (body.length <= 100) {
                    newBody = body
                } else {
                    newBody = `${body.substring(0, 100)}...`
                }
            } else if (window.innerWidth <= 1024) {
                if (body.length <= 200) {
                    newBody = body
                } else {
                    newBody = `${body.substring(0, 200)}...`
                }
            } else {
                if (body.length <= 100) {
                    newBody = body
                } else {
                    newBody = `${body.substring(0, 100)}...`
                }
            }
        }
        
        return (
            <SwiperSlide key={ idx }>
                <NewsSectionSlide>
                    <NewsSectionSlideImage src={ thumbnail }/>
                    <NewsSectionSlideDetail>
                        <NewsSectionSlideTitle>{ newTitle }</NewsSectionSlideTitle>
                        <NewsSectionSlideDate>{ created_at }</NewsSectionSlideDate>
                        <NewsSectionSlideBody>
                            { removeHTML(newBody) }
                        </NewsSectionSlideBody>
                        <NewsSectionSlideButtonContainer>
                            <Button
                                type="link"
                                color="primary"
                                styled="default"
                                size="default"
                                to={ "/berita/view?slug=" + slug }
                            >
                                Lihat
                            </Button>
                        </NewsSectionSlideButtonContainer>
                    </NewsSectionSlideDetail>
                </NewsSectionSlide>
            </SwiperSlide>
        )
    })

    return (
        <NewsSectionContainer>
            <NewsSectionTitle>Berita</NewsSectionTitle>
            <NewsSectionSubTitle>Berita Terkini Pengembangan AI di Indonesia</NewsSectionSubTitle>

            <NewsSectionContent>
                <Swiper
                    breakpoints={{
                        720: {
                            slidesPerView: 4
                        },
                        568: {
                            slidesPerView: 2
                        },
                        300: {
                            slidesPerView: 1
                        }
                    }}
                    slidesPerView={4}
                    
                    autoplay={{
                        "delay": 2500
                    }}  
                    keyboard={{
                        enabled: true
                    }}
                    navigation
                    pagination={{ clickable: true }}
                >
                    { elementSlider }
                </Swiper>
            </NewsSectionContent>
        </NewsSectionContainer>
    )
}

export default NewsSection