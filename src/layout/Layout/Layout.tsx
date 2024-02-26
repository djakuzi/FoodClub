import { Link, Outlet } from "react-router-dom";
import Button from "../../components/Button/Button";
import styles from './Layout.module.css'

 export default function Layout(){
    return  <div className={styles['layout']}>
        <div className={styles['sidebar']}>

            <div className={styles['user']}>
                <img className={styles['avatar']} src="/user.png" alt="" />
                <div className={styles['name']}>Матвей Ананьев</div>
                <div className={styles['email']}>matvey.ananev.02@mail.ru</div>
            </div>

            <div className={styles['menu']}>
                <Link to="/" className={styles['link']}>
                    <img src="/menu.png" alt="" />
                    Меню</Link>
                <Link to="cart" className={styles['link']}>
                    <img src="/cart.png" alt="" />
                    Корзина</Link>
            </div>
            <Button className={styles['exit']}>
                <img src="/exit.png" alt="" />
                Выход
            </Button>

        </div>
        <div>
            <Outlet />
        </div>
    </div>
    
}