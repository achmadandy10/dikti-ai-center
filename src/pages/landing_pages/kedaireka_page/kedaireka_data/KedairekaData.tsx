import { ReactNode, useEffect, useState } from "react"
import { FaSquare } from "react-icons/fa"
import { CardInfo } from "../../../../components/card/Card"
import { ChartPie } from "../../../../components/chart/Chart"
import { LoadingElement } from "../../../../components/loading/Loading"
import { KedairekaDataInfo, KedairekaDataInfoChart } from "../../../../dummy/KedairekaData"
import { KedairekaDataCardInfo, KedairekaDataChart, KedairekaDataChartLegendDetail, KedairekaDataChartLegendName, KedairekaDataChartLegend, KedairekaDataContainer, KedairekaDataTitle } from "./KedairekaData.elements"

interface Info {
    title: string,
    detail: string,
    icon: ReactNode
}

interface Chart {
    name: string,
    value: number,
    color: string
}

const KedairekaData = () => {
    const [get, setGet] = useState(true)
    const [info, setInfo] = useState<Info[]>([])
    const [chart, setChart] = useState<Chart[]>([])

    useEffect(() => {
        const GetData = async () => {
            setInfo(KedairekaDataInfo)
            setChart(KedairekaDataInfoChart)
            setGet(false)
        }

        GetData()
    }, [])

    if (get) {
        return <LoadingElement/>
    }

    const elementInfo = info.map(({ title, detail, icon }, idx) => {
        return (
            <CardInfo
                key={ idx }
                title={ title }
                detail={ detail }
            >
                { icon }
            </CardInfo>
        )
    })

    const elementLegend = chart.map(({ name, color }, idx) => {
        return (
            <KedairekaDataChartLegendDetail
                color={ color }
                key={ idx }
            >
                <FaSquare/>
                <KedairekaDataChartLegendName>{ name }</KedairekaDataChartLegendName>
            </KedairekaDataChartLegendDetail>
        )
    })

    var widthChart = 500
    var heightChart = 500
    var radius = 150

    if (window.innerWidth <= 360) {
        widthChart = 200
        heightChart = 200
        radius = 90
    } else if (window.innerWidth <= 500) {
        widthChart = 300
        heightChart = 300
        radius = 100
    }

    return (
        <KedairekaDataContainer>
            <KedairekaDataTitle>Data</KedairekaDataTitle>

            <KedairekaDataCardInfo>
                { elementInfo }
            </KedairekaDataCardInfo>

            <KedairekaDataChart>
                <ChartPie
                    width={widthChart}
                    height={heightChart}
                    radius={radius}
                    data={ chart }
                />
                <KedairekaDataChartLegend>
                    { elementLegend }
                </KedairekaDataChartLegend>
            </KedairekaDataChart>
        </KedairekaDataContainer>
    )
}

export default KedairekaData