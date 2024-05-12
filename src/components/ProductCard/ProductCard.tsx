import { ProductCardProps } from "./ProductCard.props";
import styles from './ProductCard.module.css';
import { Link } from "react-router-dom";
import cartCardBtn from "../../../public/menu/cart-card-btn.png"
import rating from "../../../public/menu/rating.png"
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../store/store";
import { cartActions } from "../../store/cart.slice";
import { MouseEvent } from "react";

export default function ProductCard(props:ProductCardProps){
    
    const dispath = useDispatch<AppDispatch>()

    const add = (e: MouseEvent)=>{
        e.preventDefault()
        dispath(cartActions.add(props.id))
    }

    return(
        
        <Link className={styles['link']}to={`/FoodClub/product/${props.id}`}> 
            <div className={styles.card}>
                <div className={styles.head} style={{backgroundImage: `url('${props.image}')`}}>
                    <div className={styles.price}>
                        {props.price}
                        <span> ₽</span>
                    </div>
                    <button className={styles['add-to-card']} onClick={add}>
                        <img src={cartCardBtn} alt="добавить в корзину" />
                    </button>
                    <div className={styles['rating']}>
                        {props.rating}
                        <img src={rating} alt="иконка звезды" />
                    </div>
                </div>
                <div className={styles.footer}>
                    <div className={styles['title']}>{props.name}</div>
                    <div className={styles['description']}>{props.ingredients}</div>
                </div>
            </div>
        </Link>
        
    )
}