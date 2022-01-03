import { useEffect, useState } from "react"
import { ResearchListData } from "../../../dummy/ResearchList"
import { ResearchListBadgeText, ResearchListCard, ResearchListCardTitle, ResearchListContaner, ResearchListContentTable, ResearchListContentTableText, ResearchListContentTableTitle, ResearchListText, ResearchListTitle } from "./ResearchList.elements"

interface List {
    id: number
    pt: string
    pic: string
    tp: string
}

const ResearchList = () => {
    const [list, setList] = useState<List[]>([])

    useEffect(() => {
        const GetDetail = async () => {
            setList(ResearchListData)
        }

        GetDetail()
    }, [])

    const elementList = list.map(({ id, pt, pic, tp }, idx) => {
        return (
            <tr key={ idx }>
                <td>{ id }</td>
                <td>{ pt }</td>
                <td>{ pic }</td>
                <td>{ tp }</td>
            </tr>
        )
    })

    return (
        <ResearchListContaner>
            <ResearchListTitle>Penelitian</ResearchListTitle>

            <ResearchListCard>
                <ResearchListCardTitle>
                    Daftar Penelitian yang Masuk di Dikti AI Center
                </ResearchListCardTitle>
                <ResearchListContentTableText>
                    <ResearchListContentTableTitle>Fase 1: </ResearchListContentTableTitle>Januari 2022
                </ResearchListContentTableText>
                <ResearchListContentTable>
                    <tr>
                        <th>No</th>
                        <th>PT</th>
                        <th>PIC</th>
                        <th>Tema Pelatihan</th>
                    </tr>
                    { elementList }
                </ResearchListContentTable>
            </ResearchListCard>

            <ResearchListCard>
                <ResearchListText>
                    <ResearchListBadgeText>Informasi: </ResearchListBadgeText>
                    Proposal yang telah masuk akan diinfokan untuk tahapan pemanfaatan selanjutnya.
                </ResearchListText>
            </ResearchListCard>
        </ResearchListContaner>
    )
}

export default ResearchList