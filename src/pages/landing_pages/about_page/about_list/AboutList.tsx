import { useEffect, useState } from "react"
import { Button } from "../../../../components/button/Button"
import { AboutListDetail } from "../../../../dummy/AboutList"
import { AboutListCard, AboutListCardButtonContainer, AboutListCardDetail, AboutListCardImage, AboutListCardTitle, AboutListContainer, AboutListContent, AboutListTitle } from "./AboutList.elements"

interface List {
    title: string
    slug: string
    thumbnail: string
}

const AboutList = () => {
    const [list, setList] = useState<List[]>([])

    useEffect(() => {
        const GetList = async () => {
            setList(AboutListDetail)
        }

        GetList()
    }, [])

    const elementAbout = list.map(({ title, slug, thumbnail }, idx) => {
        return (
            <AboutListCard key={ idx }>
                <AboutListCardImage src={ thumbnail }/>
                <AboutListCardDetail>
                    <AboutListCardTitle>{ title }</AboutListCardTitle>
                    <AboutListCardButtonContainer>
                        <Button
                            type="link"
                            color="primary"
                            size="default"
                            styled="default"
                            to={ "/tentang/" + slug }
                        >
                            Lihat
                        </Button>
                    </AboutListCardButtonContainer>
                </AboutListCardDetail>
            </AboutListCard>
        )
    })

    return (
        <AboutListContainer>
            <AboutListTitle>Tentang</AboutListTitle>
            <AboutListContent>
                { elementAbout }
            </AboutListContent>
        </AboutListContainer>
    )
}

export default AboutList