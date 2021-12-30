import { LoginPageButtonContainer, LoginPageContainer, LoginPageContent, LoginPageForm, LoginPageImage, LoginPageLinkButton, LoginPageLinkContainer, LoginPageLinkLabel, LoginPageTitle } from "./LoginPage.elements"
import Kemendikbud from "../../../images/kemendikbud.png"
import InputField from "../../../components/input/Input"
import { useState } from "react"
import { Button } from "../../../components/button/Button"

export const LoginPage = () => {
    const [store, setStore] = useState(false)
    const [error, setError] = useState({
        email: '',
        password: '',
    })
    const [form, setForm] = useState({
        email: '',
        password: '',
    })

    const InputChanged = (name: string, value: string) => {
        setForm({ ...form, [name]: value })
    }

    const formSubmit = (e: any) => {
        setStore(true)
        e.preventDefault()

        setError({ ...error, email: '', password: '' })
    }

    return (
        <LoginPageContainer>
            <LoginPageImage src={ Kemendikbud }/>

            <LoginPageContent>
                <LoginPageTitle>Selamat Datang!</LoginPageTitle>

                <LoginPageForm>
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
                    <LoginPageButtonContainer>
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
                            Masuk
                        </Button>
                    </LoginPageButtonContainer>

                </LoginPageForm>

                <LoginPageLinkContainer>
                    <LoginPageLinkLabel>
                        Belum punya akun? <LoginPageLinkButton to="/daftar">Daftar!</LoginPageLinkButton>
                    </LoginPageLinkLabel>
                </LoginPageLinkContainer>
            </LoginPageContent>
        </LoginPageContainer>
    )
}

export default LoginPage