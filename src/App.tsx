import { lazy, Suspense } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import { GlobalStyle } from "./styles/GlobalStyle";
import { LoadingPage } from "./components/loading/Loading"
import { AdminPrivateRoute } from "./routes/AdminRoutes";
const LandingLayout = lazy(() => import('./layouts/landing_layout/LandingLayout'))
const LoginPage = lazy(() => import('./pages/auth_pages/login_page/LoginPage'))
const RegisterPage = lazy(() => import('./pages/auth_pages/register_page/RegisterPage'))

function App() {
  return (
    <>
      <GlobalStyle/>
      <Router>
        <Suspense fallback={ <LoadingPage/> }>
          <Switch>
            <Route exact path="/masuk" component={ LoginPage } />
            <Route exact path="/daftar" component={ RegisterPage } />
            <AdminPrivateRoute path="/admin"/>
            <Route path="/" render={(props) => <LandingLayout {...props} />}/>
          </Switch>
        </Suspense>
      </Router>
    </>
  );
}

export default App;
