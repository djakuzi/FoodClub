import axios, { AxiosError } from "axios";
import { useEffect, useState } from "react";
import Heading from "../../components/Headling/Heading";
import Search from "../../components/Search/Search";
import { PREFIXPURPLE } from "../../helper/APi";
import { Product } from "../../interface/product.interface";
import styles from './Menu.module.css';
import MenuList from "./MenuList/MenuList";
// import falseLoading from "../../data/data"



 export default function Menu(){

    const [products, setProducts] = useState<Product[]>([])
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const [error, setError] = useState<string | undefined>()

    const getMenu = async() => {

        try {
            setIsLoading(true)
            await new Promise<void>((resolve) => {
                setTimeout(()=>{
                    resolve()
                }, 1000)
            }) // for loading product
            
            const {data} = await axios.get<Product[]>(PREFIXPURPLE + '/products') //  or PREFIX add in import
            setProducts(data)
            setIsLoading(false)
        } catch (e) {
            console.error(e)
            if (e instanceof AxiosError){
                // alert("Данные загружены локально " + e.message)
                setError("Данные загружены локально " + e.message)
                // setProducts(falseLoading.products)
                setIsLoading(false)
            }

            setTimeout(()=> setError(undefined), 3000)
            
            return
        }
        // try {
        //     const res = await fetch(PREFIX + '/products')

        //     if (!res.ok){
        //         return
        //     }
 
        //     const data = await res.json() as Product[];
        //     console.log(data)
        //     setProducts(data)
            
        // } catch (e) {
        //     console.error(e)
        //     return
        // }

    }

    useEffect(()=>{
        getMenu()
    },[])

    return <>

        <div className={styles['head']}>
            <Heading>Меню</Heading>
            <Search placeholder="Введите блюдо или состав"/>
        </div>

        <div>
            {error && <>{error}</>}
            {!isLoading && <MenuList products={products}/>}
            {isLoading && <>Загружаем продукты...</>}

        </div>
    </>
}