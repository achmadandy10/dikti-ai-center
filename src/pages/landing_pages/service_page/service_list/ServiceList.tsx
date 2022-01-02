import { useEffect, useState } from "react"
import { Button } from "../../../../components/button/Button"
import { ServiceListDetail } from "../../../../dummy/ServiceList"
import { ServiceListCard, ServiceListCardButtonContainer, ServiceListCardDetail, ServiceListCardImage, ServiceListCardTitle, ServiceListContainer, ServiceListContent, ServiceListTitle } from "./ServiceList.elements"

interface List {
    title: string
    slug: string
    thumbnail: string
}

const ServiceList = () => {
    const [list, setList] = useState<List[]>([])

    useEffect(() => {
        const GetList = async () => {
            setList(ServiceListDetail)
        }

        GetList()
    }, [])

    const elementService = list.map(({ title, slug, thumbnail }, idx) => {
        return (
            <ServiceListCard key={ idx }>
                <ServiceListCardImage src={ thumbnail }/>
                <ServiceListCardDetail>
                    <ServiceListCardTitle>{ title }</ServiceListCardTitle>
                    <ServiceListCardButtonContainer>
                        <Button
                            type="link"
                            color="primary"
                            size="default"
                            styled="default"
                            to={ "/layanan/" + slug }
                        >
                            Lihat
                        </Button>
                    </ServiceListCardButtonContainer>
                </ServiceListCardDetail>
            </ServiceListCard>
        )
    })

    return (
        <ServiceListContainer>
            <ServiceListTitle>Tentang</ServiceListTitle>
            <ServiceListContent>
                { elementService }
            </ServiceListContent>
        </ServiceListContainer>
    )
}

export default ServiceList