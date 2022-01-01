import { Redirect, Route, Switch } from "react-router-dom"
import Sidebar from "../../components/sidebar/Sidebar"
import { AdminRoutes } from "../../routes/AdminRoutes"

interface Props {
    [name: string]: any
}

const AdminLayout = (props: Props) => {
    return (
        <>
            <Sidebar/>

            <Switch>
                {
                    AdminRoutes.map((route, idx) => {
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
                <Redirect from="/admin" to="/admin/dasbor"/>
            </Switch>
        </>
    )
}

export default AdminLayout