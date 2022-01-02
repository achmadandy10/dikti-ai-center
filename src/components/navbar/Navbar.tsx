import { NavbarBorderBotttom, NavbarContainer, NavbarItem, NavbarLink, NavbarList, NavbarLogo, NavbarLogoImg, NavbarMenu, NavbarToggle } from "./Navbar.elements"
import { FaBars, FaChevronDown, FaTimes } from "react-icons/fa"
import { useState } from "react"
import Dropdown from "../dropdown/Dropdown"
import { DropdownAbout, DropdownKedaireka, DropdownService } from "../../dummy/DropdownUri"
import Kemendikbud from "../../images/kemendikbud.png"
import Dikti from "../../images/dikti.png"
import Merdeka from "../../images/kmerdeka.png"
import { Button } from "../button/Button"

const Navbar = () => {
    const [click, setClick] = useState(false)
    const [about, setAbout] = useState(false)
    const [service, setService] = useState(false)
    const [kedaireka, setKedaireka] = useState(false)
    const [scroll, setScroll]= useState(false)

    const handleClick = () => setClick(!click)
    const closeMobileMenu = () => setClick(false)

    const changeScroll = () => {
        if (window.scrollY >= 80) {
            setScroll(true)
        } else {
            setScroll(false)
        }
    }

    window.addEventListener('scroll', changeScroll)

    return (
        <NavbarContainer>
            <NavbarLogo 
                to={"/"}
                onClick={ closeMobileMenu }
            >
                <NavbarLogoImg src={ Kemendikbud }/>
                <NavbarLogoImg src={ Dikti }/>
                <NavbarLogoImg src={ Merdeka }/>
            </NavbarLogo>

            <NavbarMenu className={ click ? "active" : "" }>
                <NavbarList>
                    <NavbarItem
                        onMouseEnter={ () => setAbout(true) }
                        onMouseLeave={ () => setAbout(false) }
                    >
                        <NavbarLink 
                            to={"/tentang"} 
                            onClick={ closeMobileMenu }
                        >
                            Tentang <FaChevronDown/>
                        </NavbarLink>
                        <Dropdown
                            condition={ about }
                            link={ DropdownAbout }
                        />
                    </NavbarItem>

                    <NavbarItem>
                        <NavbarLink 
                            to={"/berita"} 
                            onClick={ closeMobileMenu }
                        >
                            Berita
                        </NavbarLink>
                    </NavbarItem>

                    <NavbarItem>
                        <NavbarLink 
                            to={"/#"} 
                            onClick={ closeMobileMenu }
                        >
                            Kegiatan
                        </NavbarLink>
                    </NavbarItem>

                    <NavbarItem
                        onMouseEnter={ () => setService(true) }
                        onMouseLeave={ () => setService(false) }
                    >
                        <NavbarLink 
                            to={"/layanan"} 
                            onClick={ closeMobileMenu }
                        >
                            Layanan <FaChevronDown/>
                        </NavbarLink>
                        <Dropdown 
                            condition={ service }
                            link={ DropdownService }
                        />
                    </NavbarItem>

                    <NavbarItem
                        onMouseEnter={ () => setKedaireka(true) }
                        onMouseLeave={ () => setKedaireka(false) }
                    >
                        <NavbarLink 
                            to={"/kedaireka"} 
                            onClick={ closeMobileMenu }
                        >
                            Kedaireka <FaChevronDown/>
                        </NavbarLink>
                        <Dropdown 
                            condition={ kedaireka }
                            link={ DropdownKedaireka }
                        />
                    </NavbarItem>

                    <NavbarItem>
                        <NavbarLink 
                            to={"/repository"} 
                            onClick={ closeMobileMenu }
                        >
                            Repository
                        </NavbarLink>
                    </NavbarItem>

                    <NavbarItem>
                        <Button
                            color="primary"
                            size="default"
                            styled="default"
                            to="/#"
                            type="link"
                        >
                            Daftar
                        </Button>
                    </NavbarItem>
                </NavbarList>
            </NavbarMenu>

            <NavbarToggle onClick={ handleClick }>
                { click ? <FaTimes/> : <FaBars/> }
            </NavbarToggle>
            <NavbarBorderBotttom className={ scroll ? "active" : "" }/>
        </NavbarContainer>
    )
}

export default Navbar