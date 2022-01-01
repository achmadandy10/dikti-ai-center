import { useEffect, useState } from "react";
import { Redirect, Route } from "react-router-dom";
import { LoadingPage } from "../components/loading/Loading";
import AdminLayout from "../layouts/admin_layout/AdminLayout";
import Dashboard from "../pages/admin_pages/dashboard/Dashboard";

export const AdminRoutes = [
    { path: "/admin", exact: true},
    { path: "/admin/dasbor", exact: true, component: Dashboard},
]

export const AdminPrivateRoute = ({ ...res }) => {

    const [authState, setAuth] = useState(false)
    const [loadingState, setLoading] = useState(true)

    useEffect(() => {
        // axios.get('/api/admin_check').then((res: any) => {
        //     if (res.data.meta.code === 200) {
        //         setAuth(true)                
        //     }
        //     setLoading(false)
        // })
        setAuth(true)
        setLoading(false)

        return () => {
            setAuth(false)
        }
    }, [])

    // const history = useHistory();

    // axios.interceptors.response.use(undefined, function axiosRetryInterceptor(err) {
    //     if (err.response.status === 401) {
    //         Swal.fire({
    //             icon: 'warning',
    //             title: err.response.data.message,
    //             showClass: {
    //               popup: 'animate__animated animate__fadeInDown'
    //             },
    //             hideClass: {
    //               popup: 'animate__animated animate__fadeOutUp'
    //             }
    //         })

    //         history.push("/")
    //     }

    //     return Promise.reject(err)
    // })

    // axios.interceptors.response.use(function (response) {
    //     return response;    
    // }, function (error) {
    //     if ( error.response.status === 403 ) {
    //         Swal.fire({
    //             icon: 'warning',
    //             title: "Forbedden",
    //             text: error.response.data.message,
    //             showClass: {
    //             popup: 'animate__animated animate__fadeInDown'
    //             },
    //             hideClass: {
    //             popup: 'animate__animated animate__fadeOutUp'
    //             }
    //         })

    //         history.push("/403")
    //     } else if (error.response.status === 404 ) {
    //         Swal.fire({
    //             icon: 'warning',
    //             title: "404 Error",
    //             showClass: {
    //                 popup: 'animate__animated animate__fadeInDown'
    //             },
    //             hideClass: {
    //                 popup: 'animate__animated animate__fadeOutUp'
    //             }
    //         })

    //         history.push("/404")
    //     }

    //     return Promise.reject(error)
    // })

    if (loadingState) {
        return (
            <LoadingPage />
        )
    }

    return (
        <Route
            { ...res }

            render={ ({ history, location }) => 
                authState ?
                    ( <AdminLayout { ...history }/> )
                :
                    ( <Redirect to={ {pathname: "/masuk", state: {from: location}} }/> )
            }
        />
    )
}