import { useEffect, useState } from "react"
import { NewsListDetail } from "../../../../dummy/NewsList"
import { NewsListCard, NewsListCardBody, NewsListCardDate, NewsListCardDetail, NewsListCardFooter, NewsListCardImg, NewsListCardItem, NewsListCardTitle, NewsListContainer, NewsListContent, NewsListHeader, NewsListSlide, NewsListSlideDetail, NewsListSlideDetailBody, NewsListSlideDetailButtonContainer, NewsListSlideDetailDate, NewsListSlideDetailTitle, NewsListSlider, NewsListSlideThumbnail } from "./NewsList.elements"
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination, Keyboard, Autoplay } from 'swiper';
import { Button } from "../../../../components/button/Button";
import { LoadingElement } from "../../../../components/loading/Loading";

SwiperCore.use([Navigation, Pagination, Keyboard, Autoplay]);

interface Detail {
    title: string,
    slug: string,
    body: string,
    thumbnail: string,
    created_at: string,
}

const NewsList = () => {
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
        var newBody = ''

        if (body !== null) {
            if (window.innerWidth <= 500) {
                if (body.length <= 50) {
                    newBody = body
                } else {
                    newBody = `${body.substring(0, 50)}...`
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
                if (body.length <= 300) {
                    newBody = body
                } else {
                    newBody = `${body.substring(0, 300)}...`
                }
            }
        }
        
        return (
            <SwiperSlide key={ idx }>
                <NewsListSlide>
                    <NewsListSlideThumbnail src={thumbnail}/>
                    <NewsListSlideDetail>
                        <NewsListSlideDetailTitle>{ title }</NewsListSlideDetailTitle>
                        <NewsListSlideDetailDate>{ created_at }</NewsListSlideDetailDate>
                        <NewsListSlideDetailBody dangerouslySetInnerHTML={{ __html: newBody }}/>
                        <NewsListSlideDetailButtonContainer>
                            <Button
                                type="link"
                                color="primary"
                                size="default"
                                styled="default"
                                to={ "/berita/view?slug=" + slug}
                            >
                                Lihat
                            </Button>
                        </NewsListSlideDetailButtonContainer>
                    </NewsListSlideDetail>
                </NewsListSlide>
            </SwiperSlide>
        )
    })
    
    const elementNews = list.map(({ title, slug, body, thumbnail, created_at}, idx) => {
        var newBody = ''

        if (body !== null) {
            if (window.innerWidth <= 500) {
                if (body.length <= 200) {
                    newBody = body
                } else {
                    newBody = `${body.substring(0, 200)}...`
                }
            } else if (window.innerWidth <= 768) {
                if (body.length <= 200) {
                    newBody = body
                } else {
                    newBody = `${body.substring(0, 200)}...`
                }
            } else if (window.innerWidth <= 1024) {
                if (body.length <= 200) {
                    newBody = body
                } else {
                    newBody = `${body.substring(0, 200)}...`
                }
            } else {
                if (body.length <= 200) {
                    newBody = body
                } else {
                    newBody = `${body.substring(0, 200)}...`
                }
            }
        }
        
        return (
            <NewsListCard key={ idx }>
                <NewsListCardItem>
                    <NewsListCardImg src={ thumbnail }/>
                    <NewsListCardDetail>
                        <NewsListCardTitle>{ title }</NewsListCardTitle>
                        <NewsListCardBody dangerouslySetInnerHTML={{ __html: newBody }}/>
                    </NewsListCardDetail>
                </NewsListCardItem>
                <NewsListCardFooter>
                    <Button
                        type="link"
                        color="primary"
                        size="default"
                        styled="default"
                        to={ "/berita/view?slug=" + slug}
                    >
                        Lihat
                    </Button>
                    <NewsListCardDate>{ created_at }</NewsListCardDate>
                </NewsListCardFooter>
            </NewsListCard>
        )
    })


    return (
        <NewsListContainer>
            <NewsListSlider>
                <Swiper
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
            </NewsListSlider>
            
            <NewsListHeader>Berita</NewsListHeader>
            <NewsListContent>
                { elementNews }
            </NewsListContent>
        </NewsListContainer>
    )
}

export default NewsList