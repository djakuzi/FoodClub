
import { Suspense } from 'react';
import { Await, unstable_HistoryRouter, useLoaderData} from 'react-router-dom';
import Button from '../../components/Button/Button';
import { Product } from '../../interface/product.interface';
import styles from './Product.module.css';
import rating from "../../../public/menu/rating.png"
import Heading from '../../components/Headling/Heading';
import { useDispatch } from 'react-redux';
import { cartActions } from '../../store/cart.slice';
import {useNavigate} from 'react-router-dom'
// import falseLoading from "../../data/data"

export default function Product({}){

    // const {id} = useParams()
    const data = useLoaderData() as {data: Product};
    const dispatch = useDispatch()
    const navigate = useNavigate()
 
    return (
        <>
        <Suspense fallback={'Загружаем...'}>
            <Await resolve={data.data}>
                {({data}: {data: Product}) => (

                    <div className={styles['product']}>

                        <div className={styles['header']}>
                           <div onClick={ () => navigate(-1)} className={styles['exit']}>{'<'}</div>
                           <Heading className={styles['title']}>{data.name}</Heading>
                        </div>


                        <div className={styles['box']}>

                            <div style={{backgroundImage: `url('${data.image}')`}} className={styles['image']}></div>

                            <div className={styles['info']}>

                                <div className={styles['line']}>
                                    <div className={styles['text']}>Цена</div>
                                    <div className={styles['price']}> {data.price}&nbsp;<span> ₽</span></div>
                                </div>

                                <hr className={styles['hr']}/>

                                <div className={styles['line']}>
                                    <div className={styles['text']}>Рейтинг</div>
                                    <div className={styles['rate']}> {data.rating}&nbsp; <img src={rating} alt="иконка звезды" /></div>
                                </div>

                                <div className={styles['list']}>
                                    <div className={styles['text']}>Состав:</div>
                                    <div className={styles['ingredients']}> {data.ingredients.map((el, i) => <li key={i}>{el}</li>)}</div>
                                </div>

                            </div>

                        </div>

                         <div className={styles['add']}>
                            <Button onClick={() => dispatch(cartActions.add(data.id))}>В КОРЗИНУ</Button>
                        </div>
                       
                    </div>

                )}
            </Await>
         </Suspense>
         
        </>
    )
}