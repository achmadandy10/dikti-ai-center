import HomeSection from "./home_section/HomeSection"
import NewsSection from "./news_section/NewsSection"
import RelationSection from "./relation_section/RelationSection"
import UtilizationSection from "./utilization_section/UtilizationSection"

interface Props {
    [name: string]: any
}

const LandingPage = (props: Props) => {
    return (
        <>
            <HomeSection/>
            <NewsSection/>
            <UtilizationSection/>
            <RelationSection/>
        </>
    )
}

export default LandingPage