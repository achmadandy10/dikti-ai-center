import { LoadingElementContainer, LoadingPageContainer } from "./Loading.elements"
import Loader from "react-loader-spinner";

export const LoadingPage = () => {
    return (
        <LoadingPageContainer>
            <Loader
                type="BallTriangle"
                color="#215C91"
                height={100}
                width={100}
            />
        </LoadingPageContainer>
    )
}

export const LoadingElement = () => {
    return (
        <LoadingElementContainer>
            <Loader
                type="ThreeDots"
                color="#215C91"
                height={100}
                width={100}
            />
        </LoadingElementContainer>
    )
}