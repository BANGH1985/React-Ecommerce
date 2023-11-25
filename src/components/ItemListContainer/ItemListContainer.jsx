import { useEffect, useState } from "react"
import { ItemList } from "../itemList/ItemList";
import { useParams } from "react-router-dom";
import { collection, getDoc, getFirestore } from "firebase/firestore"

import './ItemListContainer.css'

function ItemListContainer () {
    const [products, setProducts] = useState([])
    const [loading, setLoading ] = useState(true)
    
    const {cid} = useParams()
    
    // useEffect(()=> {
    //     if (cid) { 
    //         mFetch()
    //         .then(resultado => setProducts(resultado.filter(product => product.category === cid)))
    //         .catch(error => console.log(error)) 
    //         .finally(() => setLoading(false))
    //     }else{  
    //         mFetch()
    //         .then(resultado => setProducts(resultado))
    //         .catch(error => console.log(error))
    //         .finally(() => setLoading(false))
    //     }
    // }, [cid])

    useEffect(()=>{ 
        const dbFirestore = getFirestore()
        const queryCollection = collection(dbFirestore, "products")
        getDoc(queryCollection)
        .then(res => setProducts(res.docs.map(product => ({ id: res.id , ...res.data()}))))
        .catch(err => console.lag(err))
        .finally (() => setLoading(false))
    })

    return (  
        <>  
            {   
                loading ? <img src="https://cdn.dribbble.com/users/2973561/screenshots/5757826/media/221d6bfc1960ab98a7585fcc2a4d0181.gif" alt="loading" />
                :    
                <div className="row justify-content-center align-items-center contenedor" >    
                    <ItemList products={products}/>
                </div>
            }
            
        </>  
    )
}

export default ItemListContainer