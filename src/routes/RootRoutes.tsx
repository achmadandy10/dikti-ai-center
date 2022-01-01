import AboutCollege from "../pages/landing_pages/about_page/about_college/AboutCollege";
import AboutList from "../pages/landing_pages/about_page/about_list/AboutList";
import AboutProgram from "../pages/landing_pages/about_page/about_program/AboutProgram";
import AboutUs from "../pages/landing_pages/about_page/about_us/AboutUs";
import AboutVission from "../pages/landing_pages/about_page/about_vission_mission/AboutVission";
import RepositoryPage from "../pages/landing_pages/repository_page/RepositoryPage";
import ContactPage from "../pages/landing_pages/contact_page/ContactPage";
import KedairekaAbout from "../pages/landing_pages/kedaireka_page/kedaireka_about/KedairekaAbout";
import KedairekaData from "../pages/landing_pages/kedaireka_page/kedaireka_data/KedairekaData";
import KedairekaList from "../pages/landing_pages/kedaireka_page/kedaireka_list/KedairekaList";
import KedairekaPartner from "../pages/landing_pages/kedaireka_page/kedaireka_partner/KedairekaPartner";
import LandingPage from "../pages/landing_pages/landing_page/LandingPage";
import NewsList from "../pages/landing_pages/news_page/news_list/NewsList";
import NewsView from "../pages/landing_pages/news_page/news_view/NewsView";

export const RootRoutes = [
    { path: "/", exact: true, component: LandingPage },
    { path: "/tentang", exact: true, component: AboutList },
    { path: "/tentang/tentang-kami", exact: true, component: AboutUs },
    { path: "/tentang/visi-dan-misi", exact: true, component: AboutVission },
    { path: "/tentang/program", exact: true, component: AboutProgram },
    { path: "/tentang/kampus-super-komputer", exact: true, component: AboutCollege },
    { path: "/berita", exact: true, component: NewsList },
    { path: "/berita/view", exact: true, component: NewsView },
    { path: "/kedaireka", exact: true, component: KedairekaList },
    { path: "/kedaireka/tentang", exact: true, component: KedairekaAbout },
    { path: "/kedaireka/partner", exact: true, component: KedairekaPartner },
    { path: "/kedaireka/data", exact: true, component: KedairekaData },
    { path: "/repository", exact: true, component: RepositoryPage },
    { path: "/kontak", exact: true, component: ContactPage },
]