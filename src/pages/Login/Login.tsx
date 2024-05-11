// import axios, { AxiosError } from "axios";
// import { useState } from "react";
import { FormEvent, useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import Button from "../../components/Button/Button";
import Heading from "../../components/Headling/Heading";
import Input from "../../components/Input/Input";
// import { PREFIXPURPLE } from "../../helper/APi";
// import { LoginResponse } from "../../interface/auth.interface";
import { AppDispatch, RootState } from "../../store/store";
import { login, userActions } from "../../store/user.slice";
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

    // const [error, setError] = useState<string | null>()
    const navigate = useNavigate()
    const dispatch = useDispatch<AppDispatch>()
    const {jwt, loginErrorMessage} = useSelector((s:RootState)=> s.user)
  

    useEffect( ()=>{ 
        if (jwt) navigate('/FoodClub/menu')
    }, [jwt, navigate])

    const submit = (e: FormEvent) =>{
        e.preventDefault()
        dispatch(userActions.clearLoginError())
        const target = e.target as typeof e.target & LoginForm
        const {email, password} = target
        
        sendLogin(email.value, password.value)
    }

     const sendLogin = async (email: string, password: string)=>{
        dispatch(login({email, password}))
        // try {
        //     const {data} = await axios.post<LoginResponse>(`${PREFIXPURPLE}/auth/login`, {
        //         email,
        //         password
        //     })
        //     console.log(data)
        //     dispatch(userActions.addJwt(data.access_token))
            
        //     navigate('/')
            
        // } catch (e) {
        //     if ( e instanceof AxiosError){
        //         console.log(e.response?.data.message)
        //         setError(e.response?.data.message)
        //     }
        // }
    }

    return <div className={styles['login']} >
        <Heading>Вход</Heading>
        {loginErrorMessage && <div className={styles['error']}>{loginErrorMessage}</div>}
        <form className={styles['form']} onSubmit={(e) => submit(e)}>
            <div className={styles['field']}>
                <label htmlFor="email">Ваш email</label>
                <Input id='email' name="email" placeholder="Email"/>
            </div>
            <div className={styles['field']}>
                <label htmlFor="password">Ваш пароль</label>
                <Input id='password' name="password" type="password" placeholder="Пароль"/>
            </div>
            <Button appearence="big">ВХОД</Button>
            
        </form>
        
        <div className={styles["links"]}>
            <div>Нет аккаунта?</div>
            <Link to="/FoodClub/auth/register">Зарегистрироваться</Link>
        </div>
       
       
    </div>
}