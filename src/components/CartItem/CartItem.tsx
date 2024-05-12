
import styles from './CartItem.module.css';
import cartCardBtn from "../../../public/cart/close.png"
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../store/store";
import { cartActions } from "../../store/cart.slice";
import { CartItemProps } from "./CartItem.props";

export default function CartItem(props:CartItemProps){
    
    const dispath = useDispatch<AppDispatch>()

    const increase = ()=>{
        dispath(cartActions.add(props.id))
    }

    const descrease = ()=>{
        dispath(cartActions.remove(props.id))
    }

    const remove = ()=>{
        dispath(cartActions.delete(props.id))
    }

    return(
            <div className={styles.item}>
                    <div  className={styles.image} style={{backgroundImage: `url('${props.image}')`}}></div>

                    <div className={styles.description}>
                        <div className={styles.name}>{props.name} </div>
                        <div className={styles.price}> {props.price}₽</div>
                    </div>

                    <div className={styles['actions']}>
                        <button className={styles['button']} onClick={descrease}> <div>-</div></button>
                        <div className={styles['count']}>{props.count}</div>
                        <button className={styles['button']} onClick={increase}> <div>+</div></button>

                         <button className={styles['remove']} onClick={remove}>
                            <img src={cartCardBtn} alt="Удалить все" />
                        </button>

                    </div>
            </div>
        
    )
}