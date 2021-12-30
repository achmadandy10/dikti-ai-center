import { lazy, Suspense } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import { GlobalStyle } from "./styles/GlobalStyle";

const LandingLayout = lazy(() => import('./layouts/landing_layout/LandingLayout'))
const LoginPage = lazy(() => import('./pages/auth_pages/login_page/LoginPage'))
const RegisterPage = lazy(() => import('./pages/auth_pages/register_page/RegisterPage'))

function App() {
  return (
    <>
      <GlobalStyle/>
      <Router>
        <Suspense fallback={ <>Loading...</> }>
          <Switch>
            <Route exact path="/masuk" component={ LoginPage } />
            <Route exact path="/daftar" component={ RegisterPage } />
            <Route path="/" render={(props) => <LandingLayout {...props} />}/>
          </Switch>
        </Suspense>
      </Router>
    </>
  );
}

export default App;
