import { ReactNode, useState } from "react"
import { FaEye, FaEyeSlash, FaSearch } from "react-icons/fa"
import { InputFieldContainer, InputFieldContent, InputFieldError, InputFieldIcon, InputFieldInput, InputFieldLabel, SearchFieldContainer, SearchFieldIcon, SearchFieldInput } from "./Input.elements"

interface Props {
    label: string
    type?: string
    id: string
    name: string
    value: string
    readOnly?: boolean
    disabled?: boolean
    required?: boolean
    error?: string
    icon?: string
    onChanged: Function
}

interface SearchProps {
    data: any
    placeholder: string
    onChanged: Function
}

function escapeRegExp(value: any) {
    return value.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, '\\$&');
}

export const SearchField = ({ data, onChanged, placeholder }: SearchProps) => {
    const [searchText, setSearchText] = useState('');
    const requestSearch = (value: string) => {
        setSearchText(value)
        const searchRegex = new RegExp(escapeRegExp(value), 'i');
        const filteredRows = data.filter((row: any) => {
            return Object.keys(row).some((field) => {
                return searchRegex.test(row[field].toString());
            });
        });
        onChanged(filteredRows)
    };

    return (
        <SearchFieldContainer>
            <SearchFieldIcon>
                <FaSearch/>
            </SearchFieldIcon>
            <SearchFieldInput 
                type="search"
                id="search-field"
                name="search_field"
                value={ searchText }
                placeholder={ placeholder }
                onChange={ (e) => requestSearch(e.target.value) }
            />
        </SearchFieldContainer>
    )
} 

const InputField = ({ label, type, id, name, value, readOnly, disabled, required, error, icon, onChanged}: Props) => {
    const [visible, setVisible] = useState(true)

    const fieldChange = (e: any) => {
        const fieldName = e.target.name
        const fieldValue = e.target.value

        onChanged(fieldName, fieldValue)
    }

    const visibleClicked = () => {
        setVisible(!visible)
    }

    let IconField: ReactNode = ''

    if (type === "password") {
        IconField = (
            <InputFieldIcon password={ true } onClick={ visibleClicked }>
                {
                    visible ?
                        <FaEyeSlash/>
                    :
                        <FaEye/>
                }
            </InputFieldIcon>
        )
    } else if (icon) {
        IconField = (
            <InputFieldIcon>
                { icon }
            </InputFieldIcon>
        )
    }

    return (
        <InputFieldContainer>
            <InputFieldContent>
                {
                    type === "password" ?
                        <InputFieldInput 
                            type={ visible ? "password" : "Input" } 
                            name={ name ? name : "label" } 
                            id={ id ? id : "label" } 
                            placeholder={ " " }
                            value={ value }
                            readOnly={ readOnly }
                            disabled={ disabled }
                            required={ required }
                            error={ error }
                            icon={ icon }
                            onChange={ fieldChange }
                        />
                    :
                        <InputFieldInput 
                            type={ type ? type : "Input" } 
                            name={ name ? name : "label" } 
                            id={ id ? id : "label" } 
                            placeholder={ " " }
                            value={ value }
                            readOnly={ readOnly }
                            disabled={ disabled }
                            required={ required }
                            error={ error }
                            icon={ icon }
                            onChange={ fieldChange }
                        />
                }
                { IconField }
                <InputFieldLabel htmlFor={id} error={ error }>{ label ? label : "Label" }</InputFieldLabel>
            </InputFieldContent>
            { 
                error ? 
                    <InputFieldError>{ error }</InputFieldError>
                :
                    ""
            }
        </InputFieldContainer>
    )
}

export default InputField