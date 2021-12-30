import AboutList from "../pages/landing_pages/about_page/about_list/AboutList";
import AboutProgram from "../pages/landing_pages/about_page/about_program/AboutProgram";
import AboutVission from "../pages/landing_pages/about_page/about_vission_mission/AboutVission";
import LandingPage from "../pages/landing_pages/landing_page/LandingPage";
import NewsList from "../pages/landing_pages/news_page/news_list/NewsList";
import NewsView from "../pages/landing_pages/news_page/news_view/NewsView";

export const RootRoutes = [
    { path: "/", exact: true, component: LandingPage },
    { path: "/tentang", exact: true, component: AboutList },
    { path: "/tentang/tentang-kami", exact: true, component: AboutList },
    { path: "/tentang/visi-dan-misi", exact: true, component: AboutVission },
    { path: "/tentang/program", exact: true, component: AboutProgram },
    { path: "/berita", exact: true, component: NewsList },
    { path: "/berita/view", exact: true, component: NewsView },
]