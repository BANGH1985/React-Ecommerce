import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";
import { collection, getDocs, getFirestore, query, where } from "firebase/firestore"
import { ItemList } from "../itemList/ItemList";

import './ItemListContainer.css'



function ItemListContainer () {
    const [products, setProducts] = useState([])
    const [loading, setLoading ] = useState(true)
    
    const {cid} = useParams()

    useEffect(() =>{
        if (cid) {
            const dbFirestore = getFirestore()
            const queryCollection = collection(dbFirestore, "products")
            const queryFilter = query(queryCollection, where("category", "==", cid))
            getDocs(queryFilter)
            .then(res => {setProducts(res.docs.map(product => ({id: product.id, ...product.data()})))})
            .catch((err) => console.log(err))
            .finally(() => setLoading(false))
        } else {
            const dbFirestore = getFirestore()
            const queryCollection = collection(dbFirestore, "products")
            getDocs(queryCollection)
                .then(res => setProducts(res.docs.map(product => ({id: product.id, ...product.data()}))))
                .catch((err) => console.log(err))
                .finally(() => setLoading(false))
        }
    }, [cid])

    return (  
        <>  
            {   
                loading ? <img src="https://media.tenor.com/0iK9a1WkT40AAAAC/loading-white.gif" alt="loading" />
                :    
                <div className="row justify-content-center align-items-center contenedor" >    
                    <ItemList products={products}/>
                </div>
            }
            
        </>  
    )
}

export default ItemListContainer