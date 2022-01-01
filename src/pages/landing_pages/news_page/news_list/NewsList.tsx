import { useEffect, useState } from "react"
import { NewsListDetail } from "../../../../dummy/NewsList"
import { NewsListCard, NewsListCardBody, NewsListCardDate, NewsListCardDetail, NewsListCardFooter, NewsListCardImg, NewsListCardItem, NewsListCardTitle, NewsListContainer, NewsListContent, NewsListHeader, NewsListHeaderSearch, NewsListHeaderTitle, NewsListSlide, NewsListSlideDetail, NewsListSlideDetailBody, NewsListSlideDetailButtonContainer, NewsListSlideDetailDate, NewsListSlideDetailTitle, NewsListSlider, NewsListSlideThumbnail } from "./NewsList.elements"
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination as Paginate, Keyboard, Autoplay } from 'swiper';
import { Button } from "../../../../components/button/Button";
import { LoadingElement } from "../../../../components/loading/Loading";
import Pagination from "../../../../components/pagination/Pagination";
import { SearchField } from "../../../../components/input/Input";
import { removeHTML } from "../../../../function/RemoveTag";

SwiperCore.use([Navigation, Paginate, Keyboard, Autoplay]);

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
    const [currentPage, setCurrentPage] = useState(1)
    const [postsPerPage] = useState(9)
    const [search, setSearch] = useState<Detail[]>([])

    const searchInput = (value: []) => {
        setList(value)
    }

    useEffect(() => {
        const GetDetail = async () => {
            setList(NewsListDetail)
            setSearch(NewsListDetail)
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
                        <NewsListSlideDetailTitle>{ newTitle }</NewsListSlideDetailTitle>
                        <NewsListSlideDetailDate>{ created_at }</NewsListSlideDetailDate>
                        <NewsListSlideDetailBody>
                            { removeHTML(newBody) }
                        </NewsListSlideDetailBody>
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

    const indexOfLastPost = currentPage * postsPerPage
    const indexOfFirstPost = indexOfLastPost - postsPerPage
    const currentPosts = list.slice(indexOfFirstPost, indexOfLastPost)
    
    const elementNews = currentPosts.map(({ title, slug, body, thumbnail, created_at}, idx) => {
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
                        <NewsListCardTitle>{ newTitle }</NewsListCardTitle>
                        <NewsListCardBody>
                            { removeHTML(newBody) }
                        </NewsListCardBody>
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

    const paginate = (pageNumber: number) => setCurrentPage(pageNumber)

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
            
            <NewsListHeader>
                <NewsListHeaderTitle>Berita</NewsListHeaderTitle>
                <NewsListHeaderSearch>
                    <SearchField
                        data={ search }
                        placeholder="Cari berita"
                        onChanged={ searchInput }
                    />
                </NewsListHeaderSearch>
            </NewsListHeader>
            <NewsListContent>
                { elementNews }
            </NewsListContent>
            <Pagination 
                totalPosts={ list.length } 
                postsPerPages={ postsPerPage }
                paginate={ paginate }
            />
        </NewsListContainer>
    )
}

export default NewsList