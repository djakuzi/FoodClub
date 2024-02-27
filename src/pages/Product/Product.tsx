import styles from './Search.module.css';
import cn from 'classnames'
import { useLocation, useParams } from 'react-router-dom';

export default function Product({}){

    const {id}= useParams()
 
    return (
        <>
        product {id}
        </>
    )
}