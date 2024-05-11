
import { Suspense } from 'react';
import { Await, useLoaderData} from 'react-router-dom';
import { Product } from '../../interface/product.interface';
// import falseLoading from "../../data/data"

export default function Product({}){

    // const {id} = useParams()
    const data = useLoaderData() as {data: Product};
 
    return (
        <>
        <Suspense fallback={'Загружаем...'}>
            <Await resolve={data.data}>
                {({data}: {data: Product}) => (
                    <>product {data.id} </>
                )}
            </Await>
         </Suspense>
         
        </>
    )
}