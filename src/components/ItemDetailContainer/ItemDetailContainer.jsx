import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { doc, getDoc, getFirestore } from "firebase/firestore"


import "./ItemDetailContainer.css"
import { ItemDetail } from "../ItemDetail/ItemDetail"



export const ItemDetailContainer = () => {  
    const [product, setProduct] = useState({})
    const [loading, setLoading] = useState(true)
    const {pid} = useParams()
    
    useEffect(()=>{
        const dbFirestore = getFirestore()
        const queryDoc    = doc(dbFirestore, 'products', pid) 
        getDoc(queryDoc)
        .then(res => setProduct( { id: res.id , ...res.data() } ))
        .catch(err => console.log(err))
        .finally(() => setLoading(false))
},[])

    return (
        <> 
            {
                loading ? <img src="https://cdn.dribbble.com/users/2973561/screenshots/5757826/media/221d6bfc1960ab98a7585fcc2a4d0181.gif" alt="loading" />
                :
                <ItemDetail key={product.id} product={product}/>
            }
        </>    
    )
}
