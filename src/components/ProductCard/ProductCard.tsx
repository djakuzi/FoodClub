import { ProductCardProps } from "./ProductCard.props";
import styles from './ProductCard.module.css';
import { Link } from "react-router-dom";

export default function ProductCard(props:ProductCardProps){

    return(
        
        <Link to={`/product/${props.id}`}> 
            <div className={styles.card}>
                <div className={styles.head} style={{backgroundImage: `url('${props.image}')`}}>
                    <div className={styles.price}>
                        {props.price}
                        <span> ₽</span>
                    </div>
                    <button className={styles['add-to-card']}>
                        <img src="./menu/cart-card-btn.png" alt="добавить в корзину" />
                    </button>
                    <div className={styles['rating']}>
                        {props.rating}
                        <img src="./menu/rating.png" alt="иконка звезды" />
                    </div>
                </div>
                <div className={styles.footer}>
                    <div className={styles['title']}>{props.title}</div>
                    <div className={styles['description']}>{props.description}</div>
                </div>
            </div>
        </Link>
        
    )
}