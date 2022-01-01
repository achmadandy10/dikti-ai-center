import HomeSection from "./home_section/HomeSection"
import NewsSection from "./news_section/NewsSection"
import RelationSection from "./relation_section/RelationSection"
import FacilitySection from "./facility_section/FacilitySection"
import ResearchSection from "./research_section/ResearchSection"
import TrainingSection from "./training_section/TrainingSection"

interface Props {
    [name: string]: any
}

const LandingPage = (props: Props) => {
    return (
        <>
            <HomeSection/>
            <NewsSection/>
            <FacilitySection/>
            <ResearchSection/>
            <TrainingSection/>
            <RelationSection/>
        </>
    )
}

export default LandingPage