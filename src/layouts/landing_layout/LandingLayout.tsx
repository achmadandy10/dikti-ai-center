import { Route, Switch } from "react-router-dom"
import Footer from "../../components/footer/Footer"
import Navbar from "../../components/navbar/Navbar"
import { RootRoutes } from "../../routes/RootRoutes"
import { LandingLayoutSection } from "./LandingLayout.elements"

interface Props {
    [name: string]: any
}

const LandingLayout = (props: Props) => {
    return (
        <>
            <Navbar/>

            <LandingLayoutSection>
                <Switch>
                    {
                        RootRoutes.map((route, idx) => {
                            return (
                                route.component && (
                                    <Route
                                        key={ idx }
                                        path={ route.path }
                                        exact={ route.exact }
                                        render={ (props) =>
                                            <route.component { ...props } />
                                        }
                                    />
                                )
                            )
                        })
                    }
                </Switch>
            </LandingLayoutSection>

            <Footer/>
        </>
    )
}

export default LandingLayout