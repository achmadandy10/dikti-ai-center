import AboutCollege from "../pages/landing_pages/about_page/about_college/AboutCollege";
import AboutList from "../pages/landing_pages/about_page/about_list/AboutList";
import AboutProgram from "../pages/landing_pages/about_page/about_program/AboutProgram";
import AboutUs from "../pages/landing_pages/about_page/about_us/AboutUs";
import AboutVission from "../pages/landing_pages/about_page/about_vission_mission/AboutVission";
import RepositoryPage from "../pages/landing_pages/repository_page/RepositoryPage";
import LandingPage from "../pages/landing_pages/landing_page/LandingPage";
import NewsList from "../pages/landing_pages/news_page/news_list/NewsList";
import NewsView from "../pages/landing_pages/news_page/news_view/NewsView";
import ResearchList from "../pages/landing_pages/research_page/ResearchList";
import ServiceList from "../pages/landing_pages/service_page/service_list/ServiceList";
import ServiceResearch from "../pages/landing_pages/service_page/service_research/ServiceResearch";
import ServiceFacility from "../pages/landing_pages/service_page/service_facility/ServiceFacility";
import ServiceTraining from "../pages/landing_pages/service_page/service_training/ServiceTraining";

export const RootRoutes = [
    { path: "/", exact: true, component: LandingPage },
    { path: "/tentang", exact: true, component: AboutList },
    { path: "/tentang/tentang-kami", exact: true, component: AboutUs },
    { path: "/tentang/visi-dan-misi", exact: true, component: AboutVission },
    { path: "/tentang/program", exact: true, component: AboutProgram },
    { path: "/tentang/kampus-super-komputer", exact: true, component: AboutCollege },
    { path: "/layanan", exact: true, component: ServiceList },
    { path: "/layanan/fasilitas", exact: true, component: ServiceFacility },
    { path: "/layanan/penelitian", exact: true, component: ServiceResearch },
    { path: "/layanan/pelatihan", exact: true, component: ServiceTraining },
    { path: "/berita", exact: true, component: NewsList },
    { path: "/berita/view", exact: true, component: NewsView },
    { path: "/repository", exact: true, component: RepositoryPage },
    { path: "/penelitian/list", exact: true, component: ResearchList },
]