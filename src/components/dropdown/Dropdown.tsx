import { useState } from "react"
import { DropdownItem, DropdownLink, DropdownList } from "./Dropdown.elements"

interface Link {
    title: string
    path: string
}

interface Props {
    condition: boolean
    link: Link[]
}

const Dropdown = ({ condition, link }: Props) => {
    const [click, setClick] = useState(false)
    
    const handleClick = () => setClick(!click)

    function showDropdown() {
        if (condition) {
            return "show"
        } else {
            return ""
        }
    }

    return (
        <DropdownList 
            className={ click ? "clicked" : showDropdown() } 
            onClick={ handleClick }
        >
            { link.map((v, idx) => {
                return (
                    <DropdownItem key={ idx }>
                        <DropdownLink 
                            to={ v.path }
                            onClick={ () => setClick(false) }
                        >
                            { v.title }
                        </DropdownLink>
                    </DropdownItem>
                )
            }) }
        </DropdownList>
    )
}

export default Dropdown