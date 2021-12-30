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

    function showDropdown() {
        if (condition) {
            return "show"
        } else {
            return ""
        }
    }

    return (
        <DropdownList 
            className={ showDropdown() } 
        >
            { link.map((v, idx) => {
                return (
                    <DropdownItem key={ idx }>
                        <DropdownLink 
                            to={ v.path }
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