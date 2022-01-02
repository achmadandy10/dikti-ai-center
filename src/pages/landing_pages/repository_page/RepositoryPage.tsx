import { RepositoryPageCard, RepositoryPageCardBody, RepositoryPageCardCategory, RepositoryPageCardDate, RepositoryPageCardDetail, RepositoryPageCardFooter, RepositoryPageCardHeader, RepositoryPageCardImage, RepositoryPageCardName, RepositoryPageCardTitle, RepositoryPageContainer, RepositoryPageContent, RepositoryPageContentHeader, RepositoryPageContentSearch, RepositoryPageContentTitle, RepositoryPageDetail, RepositoryPageDetailImage, RepositoryPageDetailImageContainer, RepositoryPageDetailItem, RepositoryPageSubtitle, RepositoryPageTitle } from "./RepositoryPage.elements"
import Productive from "../../../images/dev_productivity.svg"
import { Button } from "../../../components/button/Button"
import { FaCircle, FaPlus } from "react-icons/fa"
import { SearchField } from "../../../components/input/Input"
import { ReactNode, useEffect, useState } from "react"
import { RepositoryData } from "../../../dummy/Repository"
import { LoadingElement } from "../../../components/loading/Loading"

interface List {
    image: string
    title: string
    slug: string
    name: string
    updated_at: string
    category: string
}

const RepositoryPage = () => {
    const [get, setGet] = useState(true)
    const [list, setList] = useState<List[]>([])
    const [search, setSearch] = useState<List[]>([])

    const searchInput = (value: []) => {
        setList(value)
    }

    useEffect(() => {
        const GetDetail = async () => {
            setList(RepositoryData)
            setSearch(RepositoryData)
            setGet(false)
        }

        GetDetail()
    }, [])

    let elementRepo: ReactNode = ''

    if (get) {
        elementRepo = <LoadingElement/>
    } else {
        elementRepo = list.slice(0, 8).map(({ image, title, slug, name, updated_at, category }, idx) => {
            return (
                <RepositoryPageCard key={ idx } to={ "/repository/" + slug}>
                    <RepositoryPageCardImage src={ image }/>
                    <RepositoryPageCardDetail>
                        <RepositoryPageCardHeader>
                            <RepositoryPageCardTitle>{ title }</RepositoryPageCardTitle>
                        </RepositoryPageCardHeader>
                        <RepositoryPageCardBody>
                            <RepositoryPageCardName>{ name }</RepositoryPageCardName>
                            <FaCircle/>
                            <RepositoryPageCardDate>{ updated_at }</RepositoryPageCardDate>
                        </RepositoryPageCardBody>
                    </RepositoryPageCardDetail>
                    <RepositoryPageCardFooter>
                        <RepositoryPageCardCategory to={ "/repository/category/" + category }>{ category }</RepositoryPageCardCategory>
                    </RepositoryPageCardFooter>
                </RepositoryPageCard>
            )
        })
    }

    return (
        <RepositoryPageContainer>
            <RepositoryPageDetail>
                <RepositoryPageDetailItem>
                    <RepositoryPageTitle>Repository</RepositoryPageTitle>
                    <RepositoryPageSubtitle>
                        Salah satu kendala di dalam melakukan penelitian AI adalah adanya data yang dapat digunakan secara bersama oleh para peneliti.  Ketersediaan data adalah komponen penting di dalam penelitian AI. Fasilitas DIKTI AI CENTER ini juga dilengkapi dengan Fasilitas Storage untuk layanan Repositori yang dapat digunakan peneliti dan mahasiswa. Repositori Data terbuka ini akan disediakan untuk menyimpan reusable object misal  data terlabel, corpus, annotated corpus,  pre-trained model dan lain sebagainya.    Diharapkan fasilitas ini akan mengakselerasi terciptanya solusi-solusi AI dan meningkatkan data AI yang memecahkan masalah dengan kekhasan lokal, misal motif batik, image tanaman Indonesia,  data bahasa Indonesia dan lain sebagainya.
                    </RepositoryPageSubtitle>
                    <Button
                        type="link"
                        color="primary"
                        size="default"
                        styled="default"
                        to="/user/repository/buat"
                        width={ 200 }
                        height={ 50 }
                    >
                        <FaPlus/>
                        Buat Repository
                    </Button>
                </RepositoryPageDetailItem>

                <RepositoryPageDetailImageContainer>
                    <RepositoryPageDetailImage src={ Productive }/>
                </RepositoryPageDetailImageContainer>
            </RepositoryPageDetail>

            <RepositoryPageContentHeader>
                <RepositoryPageContentTitle>Daftar Repository</RepositoryPageContentTitle>
                <RepositoryPageContentSearch>
                    <SearchField
                        data={ search }
                        placeholder="Cari repository"
                        onChanged={ searchInput }
                    />
                </RepositoryPageContentSearch>
            </RepositoryPageContentHeader>
            
            <RepositoryPageContent>
                { elementRepo }
            </RepositoryPageContent>
        </RepositoryPageContainer>
    )
}

export default RepositoryPage