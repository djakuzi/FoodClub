import Heading from "../../components/Headling/Heading";
import ProductCard from "../../components/ProductCard/ProductCard";
import Search from "../../components/Search/Search";
import styles from './Menu.module.css';

 export default function Menu(){
    return <>
        <div className={styles['head']}>
            <Heading>Меню</Heading>
            <Search placeholder="Введите блюдо или состав"/>
        </div>
        <div>
            <ProductCard 
            id = {1}
            title="Наслаждение"
            description="Салями, руккола, помидоры, оливки" 
            rating={4.5}
            price={650}
            image='./pizza/zalupa.jpg'
            />
        </div>
    </>
}