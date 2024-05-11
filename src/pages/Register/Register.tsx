import { FormEvent, useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import Button from "../../components/Button/Button";
import Heading from "../../components/Headling/Heading";
import Input from "../../components/Input/Input";
import { AppDispatch, RootState } from "../../store/store";
import { register, userActions } from "../../store/user.slice";
import styles from './Register.module.css';

export type RegisterForm = {
    email: {
        value: string
    }
    password: {
        value: string
    }
    name: {
        value: string
    }
}

export default function Register(){

    // const [error, setError] = useState<string | null>()
    const navigate = useNavigate()
    const dispatch = useDispatch<AppDispatch>()
    const {jwt, registerErrorMessage} = useSelector((s:RootState)=> s.user)
  

    useEffect( ()=>{ 
        if (jwt) navigate('/FoodClub/menu')
    }, [jwt, navigate])

    const submit = (e: FormEvent) =>{
        e.preventDefault()
        dispatch(userActions.clearRegisterError())
        const target = e.target as typeof e.target & RegisterForm
        const {email, password, name} = target
        dispatch(register({email: email.value, password: password.value, name: name.value}))
    }


    return <div className={styles['login']} >
        <Heading>Регистрация</Heading>
        {registerErrorMessage && <div className={styles['error']}>{registerErrorMessage}</div>}
         <form className={styles['form']} onSubmit={(e) => submit(e)}>
            <div className={styles['field']}>
                <label htmlFor="email">Ваш email</label>
                <Input id='email' name="email" type="email" placeholder="Email"/>
            </div>
            <div className={styles['field']}>
                <label htmlFor="password">Ваш пароль</label>
                <Input id='password' name="password" type="password" placeholder="Пароль"/>
            </div>
            <div className={styles['field']}>
                <label htmlFor="name">Ваше имя</label>
                <Input id='name' name="text" type="text" placeholder="Имя"/>
            </div>
            <Button appearence="big">ЗАРЕГИСТРИРОВАТЬСЯ</Button>
            
        </form>
        
        <div className={styles["links"]}>
            <div>Есть аккаунта?</div>
            <Link to="/FoodClub/auth/login">Войти</Link>
        </div>
       
    </div>
}