import { ResearchListBadgeText, ResearchListCard, ResearchListCardTitle, ResearchListContaner, ResearchListContentTable, ResearchListContentTableText, ResearchListContentTableTitle, ResearchListText, ResearchListTitle } from "./ResearchList.elements"

const ResearchList = () => {
    return (
        <ResearchListContaner>
            <ResearchListTitle>Penelitian</ResearchListTitle>

            <ResearchListCard>
                <ResearchListCardTitle>
                    Daftar Penelitian yang Masuk di Dikti AICE
                </ResearchListCardTitle>
                <ResearchListContentTableText>
                    <ResearchListContentTableTitle>Fase 1: </ResearchListContentTableTitle>Januari 2022
                </ResearchListContentTableText>
                <ResearchListContentTable>
                    <tr>
                        <th>No</th>
                        <th>PT</th>
                        <th>PLC</th>
                        <th>Tema Pelatihan</th>
                    </tr>
                    <tr>
                        <td>-</td>
                        <td>-</td>
                        <td>-</td>
                        <td>-</td>
                    </tr>
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