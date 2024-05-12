
import { useNavigate } from "react-router-dom"
import pizzaIMG from "../../../public/success/success.png"
import Button from "../../components/Button/Button"
import styles from './Success.module.css';

export function Success(){
    const navigate = useNavigate()
    return (
        <div className={styles['success']}>
            <img src={pizzaIMG} alt="изображение пицыы" />
            <div className={styles['text']}>Ваш заказ успешно оформлен!</div>
            <Button onClick={() => navigate('/FoodClub/menu')}>Сделать новый</Button>
        </div>
    )
}