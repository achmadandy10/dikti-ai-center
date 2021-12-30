import { useEffect, useState } from "react"
import { Button } from "../../../../components/button/Button"
import { LoadingElement } from "../../../../components/loading/Loading"
import { NewsListDetail } from "../../../../dummy/NewsList"
import { NewsViewCard, NewsViewCardBody, NewsViewCardButtonContainer, NewsViewCardDate, NewsViewCardDetail, NewsViewCardImage, NewsViewCardTitle, NewsViewContainer, NewsViewContentLeft, NewsViewContentRight, NewsViewDetailDate, NewsViewDetailImage, NewsViewDetailTitle } from "./NewsView.elements"

interface List {
    title: string,
    slug: string,
    body: string,
    thumbnail: string,
    created_at: string,
}

const NewsView = () => {
    const [get, setGet] = useState(true)
    const [list, setList] = useState<List[]>([])
    const [detail, setDetail] = useState<List>({
        title: '',
        body: '',
        slug: '',
        thumbnail: '',
        created_at: '',
    })
    
    useEffect(() => {
        const GetDetail = async () => {
            setList(NewsListDetail)
            setDetail(NewsListDetail[1])
            setGet(false)
        }

        GetDetail()
    }, [])

    const shuffle = (arr: any) => [...arr].sort(() => Math.random() - 0.5);

    const newsHit = shuffle(list).slice(0, 5).map(({ title, slug, body, thumbnail, created_at}, idx) => {
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
                if (body.length <= 100) {
                    newBody = body
                } else {
                    newBody = `${body.substring(0, 100)}...`
                }
            } else {
                if (body.length <= 50) {
                    newBody = body
                } else {
                    newBody = `${body.substring(0, 50)}...`
                }
            }
        }

        return (
            <NewsViewCard key={ idx }>
                <NewsViewCardImage src={ thumbnail }/>
                <NewsViewCardDetail>
                    <NewsViewCardTitle>{ title }</NewsViewCardTitle>
                    <NewsViewCardBody dangerouslySetInnerHTML={{ __html: newBody }}/>
                    
                    <NewsViewCardButtonContainer>
                        <Button
                            type="link"
                            color="primary"
                            size="small"
                            styled="default"
                            to={ "/berita/view?slug=" + slug }
                        >
                            Lihat
                        </Button>  

                        <NewsViewCardDate>{ created_at }</NewsViewCardDate>
                    </NewsViewCardButtonContainer>
                </NewsViewCardDetail>
            </NewsViewCard>
        )
    })

    if (get) {
        return <LoadingElement/>
    }

    return (
        <NewsViewContainer>
            <NewsViewContentLeft>
                <NewsViewDetailTitle>{ detail.title }</NewsViewDetailTitle>
                <NewsViewDetailDate>{ detail.created_at }</NewsViewDetailDate>
                <NewsViewDetailImage src={ detail.thumbnail }/>
                <div dangerouslySetInnerHTML={{ __html: detail.body }}/>
            </NewsViewContentLeft>

            <NewsViewContentRight>
                { newsHit }
            </NewsViewContentRight>
        </NewsViewContainer>
    )
}

export default NewsView