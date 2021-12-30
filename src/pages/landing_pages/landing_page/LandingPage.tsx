import HomeSection from "./home_section/HomeSection"

interface Props {
    [name: string]: any
}

const LandingPage = (props: Props) => {
    return (
        <>
            <HomeSection/>
        </>
    )
}

export default LandingPage