import { useEffect, useState } from "react";
import { Link, NavLink, Outlet, useLocation, useNavigate } from "react-router-dom";
import Button from "../../components/Button/Button";
import styles from './Layout.module.css';
import cn from 'classnames';
import menuIMG from "../../../public/menu/menu.png"
import cartIMG from "../../../public/cart/cart.png"
// import ProductCard from "../../components/ProductCard/ProductCard";
import userIMG from "../../../public/layout/user.png"
import exitIMG from "../../../public/layout/exit.png"
import { JWT_PERSISTENT_STATE, userActions } from "../../store/user.slice";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../store/store";

 export default function Layout(){

    const location = useLocation()
    const navigate = useNavigate()
    const dispatch = useDispatch<AppDispatch>()

    const [statusBurger, setStatusBurger] = useState<boolean>(false)

    const logOut = ()=>{
        localStorage.removeItem(JWT_PERSISTENT_STATE)
        dispatch(userActions.logOut())
        navigate("/auth/login")
    }
    
    useEffect( ()=>{
        console.log(location)
    },[ location])

    return  <div className={styles['layout']}>
        

        <div className={cn(styles['sidebar'], {
            [styles.open]: statusBurger, 
            })}>

            <div className={styles['user']}>
                <img className={styles['avatar']} src={userIMG} alt="фото профиля"/>
                <div className={styles['name']}>Матвей Ананьев</div>
                <div className={styles['email']}>matvey.ananev.02@mail.ru</div>
            </div>

{/* NavLink, for change active with help useLocatin.psthname == 'url' start*/}
            <div className={styles['menu']}>
        {/* 1 */} <NavLink onClick={ () => setStatusBurger(false)} to="/menu" className={ ({isActive}) => cn(styles['link'],{
                    [styles.active]: isActive,
                })}>  
                    <img src={menuIMG} alt="лого меню" />
                    Меню</NavLink>
        {/* 2 */} <Link onClick={ () => setStatusBurger(false)} to="/cart" className={cn(styles['link'],{
                    [styles['active']]: location.pathname === '/cart'
                })}>
                    <img src={cartIMG} alt="лого корзины" />
                    Корзина</Link>
            </div>
{/*  end */}

            <Button className={styles['exit']} onClick={()=> logOut()}>
                <img src={exitIMG} alt="" />
                Выход
            </Button>

        </div>

 {/* className={styles['content']} */}

 {/* className={cn(styles['content'], {
            [styles.open]: statusBurger, 
            })} */}
        <div className={cn(styles['content'], {
            [styles.openContent]: statusBurger, 
            })} >

            <div onClick={ () => setStatusBurger(true)} className={styles['burger']}>

            </div>

            <Outlet />
        </div>
    </div>
    
}