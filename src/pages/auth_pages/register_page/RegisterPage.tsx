import { RegisterPageButtonContainer, RegisterPageContainer, RegisterPageContent, RegisterPageForm, RegisterPageImage, RegisterPageLeft, RegisterPageLinkButton, RegisterPageLinkContainer, RegisterPageLinkLabel, RegisterPageRight, RegisterPageTitle } from "./RegisterPage.elements"
import Kemendikbud from "../../../images/kemendikbud.png"
import InputField from "../../../components/input/Input"
import { useState } from "react"
import { Button } from "../../../components/button/Button"
import { CopyRight } from "../../../components/footer/Footer"

export const RegisterPage = () => {
    const [store, setStore] = useState(false)
    const [error, setError] = useState({
        name: '',
        college: '',
        email: '',
        password: '',
    })
    const [form, setForm] = useState({
        name: '',
        college: '',
        email: '',
        password: '',
    })

    const InputChanged = (name: string, value: string) => {
        setForm({ ...form, [name]: value })
    }

    const formSubmit = (e: any) => {
        setStore(true)
        e.preventDefault()

        setError({ 
            ...error, 
            name: '', 
            college: '', 
            email: '', 
            password: '' 
        })
    }

    return (
        <RegisterPageContainer>
            <RegisterPageLeft>
                <RegisterPageImage src={ Kemendikbud }/>
            </RegisterPageLeft>

            <RegisterPageRight>
                <RegisterPageContent>
                    <RegisterPageTitle>Buat Akun!</RegisterPageTitle>

                    <RegisterPageForm>
                        <InputField
                            label="Nama Lengkap"
                            id="name"
                            name="name"
                            value={ form.name }
                            onChanged={ InputChanged }
                            error={ error.name }
                        />
                        <InputField
                            label="Instansi"
                            id="college"
                            name="college"
                            value={ form.college }
                            onChanged={ InputChanged }
                            error={ error.college }
                        />
                        <InputField
                            label="Alamat Email"
                            id="email"
                            name="email"
                            value={ form.email }
                            onChanged={ InputChanged }
                            error={ error.email }
                        />
                        <InputField
                            label="Kata Sandi"
                            id="password"
                            name="password"
                            value={ form.password }
                            type="password"
                            onChanged={ InputChanged }
                        />
                        <RegisterPageButtonContainer>
                            <Button
                                type="submit"
                                color="primary"
                                size="default"
                                styled="default"
                                loading={ store }
                                onClicked={ formSubmit }
                                fullWidth
                                height={ 50 }
                            >
                                Daftar
                            </Button>
                        </RegisterPageButtonContainer>

                    </RegisterPageForm>

                    <RegisterPageLinkContainer>
                        <RegisterPageLinkLabel>
                            Sudah punya akun? <RegisterPageLinkButton to="/masuk">Masuk!</RegisterPageLinkButton>
                        </RegisterPageLinkLabel>
                    </RegisterPageLinkContainer>
                </RegisterPageContent>
                <CopyRight/>
            </RegisterPageRight>
        </RegisterPageContainer>
    )
}

export default RegisterPage