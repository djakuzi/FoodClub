import axios, { AxiosError } from "axios";
import { FormEvent, useState } from "react";
import { useDispatch } from "react-redux";
import { json, Link, useNavigate } from "react-router-dom";
import Button from "../../components/Button/Button";
import Heading from "../../components/Headling/Heading";
import Input from "../../components/Input/Input";
import { PREFIXPURPLE } from "../../helper/APi";
import { LoginResponse } from "../../interface/auth.interface";
import { AppDispatch } from "../../store/store";
import { userActions } from "../../store/user.slice";
import styles from './Login.module.css';

export type LoginForm = {
    email: {
        value: string
    }
    password: {
        value: string
    }
}

export default function Login(){

    const [error, setError] = useState<string | null>()
    const navigate = useNavigate()
    const dispatch = useDispatch<AppDispatch>()

    const submit = (e: FormEvent) =>{
        e.preventDefault()
        setError(null)
        const target = e.target as typeof e.target & LoginForm
        const {email, password} = target
        
        sendLogin(email.value, password.value)
    }

     const sendLogin = async (email: string, password: string)=>{
        try {
            const {data} = await axios.post<LoginResponse>(`${PREFIXPURPLE}/auth/login`, {
                email,
                password
            })
            console.log(data)
            dispatch(userActions.addJwt(data.access_token))
            
            navigate('/')
            
        } catch (e) {
            if ( e instanceof AxiosError){
                console.log(e.response?.data.message)
                setError(e.response?.data.message)
            }
        }
    }

    return <div className={styles['login']} >
        <Heading>Вход</Heading>
        {error && <div className={styles['error']}>{error}</div>}
        <form className={styles['form']} onSubmit={(e) => submit(e)}>
            <div className={styles['field']}>
                <label htmlFor="email">Ваш email</label>
                <Input id='email' name="email" placeholder="Email"/>
            </div>
            <div className={styles['login']}>
                <label htmlFor="password">Ваш пароль</label>
                <Input id='password' name="password" type="password" placeholder="Пароль"/>
            </div>
            <Button appearence="big">ВХОД</Button>
            
        </form>
        
        <div className={styles["links"]}>
            <div>Нет аккаунта?</div>
            <Link to="/auth/register">Зарегистрироваться</Link>
        </div>
       
    </div>
}