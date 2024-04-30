import ProductCard from "../../../components/ProductCard/ProductCard"
import { MenuListProprs } from "./MenuList.props"
import styles from './MenuList.module.css';

export default function MenuList({products}:MenuListProprs){
    
    return<div className={styles['wrapper']}>{products.map( (p) => {
                return <ProductCard 
                    key={p.id}
                    id = {p.id}
                    title={p.title}
                    description={p.description.join(', ')} 
                    rating={p.rating}
                    price={p.price}
                    image={p.image}
                />
            })}
        </div>
}