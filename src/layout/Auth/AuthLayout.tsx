import styles from './AuthLayout.module.css';
import { Outlet } from 'react-router-dom';
import authIMG from "../../../public/auth/auth.png"

 export default function AuthLayout(){


    return  <div className={styles['layout']}>
        

        <div className={styles['auth']}> 
            <img  src={authIMG} alt="иконка авторазации" />
        </div>

        <div className={styles['content']}>
           
            <Outlet />
        </div>
    </div>
    
}