import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import Button from "../../components/Button/Button";
import CartItem from "../../components/CartItem/CartItem";
import Heading from "../../components/Headling/Heading";
import { PREFIXPURPLE } from "../../helper/APi";
import { Product } from "../../interface/product.interface";
import { cartActions } from "../../store/cart.slice";
import { RootState } from "../../store/store";
import styles from './Cart.module.css';


const DELIVERY_FEE = 169

export default function Cart(){

    const [cartProducts, setCardProducts] = useState<Product[]>([])
    const items = useSelector( (s:RootState) => s.cart.items)
    const jwt = useSelector( (s:RootState) => s.user.jwt)
    const dispath = useDispatch()
    const navigate = useNavigate()
    const total = items.map( el => {
                    const product = cartProducts.find( p => p.id === el.id)
                    if(!product) {
                        return 0
                    }
                    return el.count * product.price
                }).reduce((sum, el)=> sum+= el,0)

    const getItem = async (id: number) =>{
        const {data} = await axios.get<Product>(PREFIXPURPLE + '/products/' + id)
        return data
    }

    const loadAllItems = async() => {
        const res = await Promise.all(items.map( i => getItem(i.id)))
        setCardProducts(res)
    }

    const checkOut = async()=>{
        await axios.post(PREFIXPURPLE + "/order", {
            products: items
        }, {
            headers:{
                Authorization: `Bearer ${jwt}`
            }
        })
        dispath(cartActions.clear())
        navigate("/FoodClub/success")
    }

    useEffect(()=>{
         loadAllItems()
    },[items])

    return <div className={styles['cart']}>
            <Heading className={styles['header']}>Корзина</Heading>
                {items.map( el => {
                    const product = cartProducts.find( p => p.id === el.id)
                    if(!product) {
                        return
                    }

                    return <CartItem key={product.id} count={el.count} {...product}/>
                })}

                {!items.length && <Link to='/FoodClub/menu' className={styles['cart-zero']}>Отправиться в меню</Link>}

                <div className={styles['line']}>
                    <div className={styles['text']}>Итог</div>
                    <div className={styles['price']}>{total}&nbsp;<span> ₽</span></div>
                </div>
                <hr className={styles['hr']}/>
                <div className={styles['line']}>
                    <div className={styles['text']}>Доставка</div>
                    <div className={styles['price']}>{DELIVERY_FEE}&nbsp;<span> ₽</span></div>
                    
                </div>
                <hr className={styles['hr']}/>
                <div className={styles['line']}>
                    <div className={styles['text']}>Итог <span>({items.length})</span></div>
                    <div className={styles['price']}>{total + DELIVERY_FEE}&nbsp;<span> ₽</span></div>
                </div>
                <div className={styles['cheackout']}>
                    <Button onClick={checkOut} appearence="big">ОфОРМИТЬ</Button>
                </div>
         </div>
}