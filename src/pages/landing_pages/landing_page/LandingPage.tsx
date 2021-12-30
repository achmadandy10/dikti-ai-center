import HomeSection from "./home_section/HomeSection"
import NewsSection from "./news_section/NewsSection"

interface Props {
    [name: string]: any
}

const LandingPage = (props: Props) => {
    return (
        <>
            <HomeSection/>
            <NewsSection/>
        </>
    )
}

export default LandingPage