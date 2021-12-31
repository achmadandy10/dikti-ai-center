import { useEffect, useState } from "react"
import { Button } from "../../../../components/button/Button"
import { KedairekaListDetail } from "../../../../dummy/KedairekaList"
import { KedairekaListCard, KedairekaListCardButtonContainer, KedairekaListCardDetail, KedairekaListCardImage, KedairekaListCardTitle, KedairekaListContainer, KedairekaListContent, KedairekaListTitle } from "./KedairekaList.elements"

interface List {
    title: string
    slug: string
    thumbnail: string
}

const KedairekaList = () => {
    const [list, setList] = useState<List[]>([])

    useEffect(() => {
        const GetList = async () => {
            setList(KedairekaListDetail)
        }

        GetList()
    }, [])

    const elementKedaireka = list.map(({ title, slug, thumbnail }, idx) => {
        return (
            <KedairekaListCard key={ idx }>
                <KedairekaListCardImage src={ thumbnail }/>
                <KedairekaListCardDetail>
                    <KedairekaListCardTitle>{ title }</KedairekaListCardTitle>
                    <KedairekaListCardButtonContainer>
                        <Button
                            type="link"
                            color="primary"
                            size="default"
                            styled="default"
                            to={ "/kedaireka/" + slug }
                        >
                            Lihat
                        </Button>
                    </KedairekaListCardButtonContainer>
                </KedairekaListCardDetail>
            </KedairekaListCard>
        )
    })

    return (
        <KedairekaListContainer>
            <KedairekaListTitle>Kedaireka</KedairekaListTitle>
            <KedairekaListContent>
                { elementKedaireka }
            </KedairekaListContent>
        </KedairekaListContainer>
    )
}

export default KedairekaList