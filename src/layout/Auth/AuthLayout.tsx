import styles from './AuthLayout.module.css';
import { Outlet } from 'react-router-dom';
import authIMG from "../../../public/auth/auth.png"
import { useEffect, useState } from 'react';

 export default function AuthLayout(){

    const [width, setWidth] = useState<number>(+document.body.offsetWidth)
    
    useEffect(()=>{
        window.addEventListener('resize', function(){ setWidth(document.body.offsetWidth)})
    },[])

    console.log(authIMG)
    return  <div style={{backgroundImage: (width > 500) ? 'none': `url(${authIMG})`}} className={styles['layout']}>
        
        <div className={styles['auth']}> 
            <img  src={authIMG} alt="иконка авторазации" />
        </div>

        <div  className={styles['content']}>
           
            <Outlet />
        </div>
    </div>
    
}