import { ReactNode, useState } from "react"
import { FaEye, FaEyeSlash } from "react-icons/fa"
import { InputFieldContainer, InputFieldContent, InputFieldError, InputFieldIcon, InputFieldInput, InputFieldLabel } from "./Input.elements"

interface Props {
    label: string,
    type?: string,
    id: string,
    name: string,
    value: string,
    readOnly?: boolean,
    disabled?: boolean,
    required?: boolean,
    error?: string,
    icon?: string,
    onChanged: Function,
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