import { SidebarBrand, SidebarContainer, SidebarDropdownItem, SidebarDropdownLink, SidebarDropdownList, SidebarItem, SidebarList, SidebarNavLink } from "./Sidebar.elements"
import { MdDashboard } from "react-icons/md"
import { FaChevronDown, FaEdit, FaList, FaNewspaper } from "react-icons/fa"

const Sidebar = () => {
    return (
        <SidebarContainer>
            <SidebarBrand to={ "/admin" }>Dikti COE</SidebarBrand>
            
            <SidebarList>
                <SidebarItem>
                    <SidebarNavLink 
                        activeClassName="active" 
                        to={ "/admin/dasbor" }
                    >
                        <MdDashboard/>
                        Dashboard    
                    </SidebarNavLink>
                </SidebarItem>

                <SidebarItem className="divider">Utama</SidebarItem>
                <SidebarItem>
                    <SidebarNavLink 
                        activeClassName="active" 
                        to={ "/admin/berita" }
                    >
                        <FaNewspaper/>
                        Berita 
                        <FaChevronDown/>

                        <SidebarDropdownList>
                            <SidebarDropdownItem>
                                <SidebarDropdownLink
                                    to={ "/admin/berita" }
                                >
                                    <FaList/>
                                    Daftar Berita
                                </SidebarDropdownLink>
                            </SidebarDropdownItem>
                            <SidebarDropdownItem>
                                <SidebarDropdownLink 
                                    to={ "/admin/berita/buat" }
                                >
                                    <FaEdit/>
                                    Buat Berita
                                </SidebarDropdownLink>
                            </SidebarDropdownItem>
                        </SidebarDropdownList>
                    </SidebarNavLink>
                </SidebarItem>
            </SidebarList>
        </SidebarContainer>
    )
}

export default Sidebar