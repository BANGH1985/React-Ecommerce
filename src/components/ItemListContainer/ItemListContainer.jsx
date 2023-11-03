import { useEffect, useState } from "react"
import { mFetch } from "../../helpers/mFetch"
import { ItemList } from "../itemList/ItemList";
import { useParams } from "react-router-dom";

import Itemcounter from "../itemCounter/itemCounter";

import './ItemListContainer.css'

function ItemListContainer ({greeting = "texto home"}) {
    const [products, setProducts] = useState([])
    
    const {cid} = useParams()
    
    useEffect(()=> {
        if (cid) { 
            mFetch()
            .then(resultado => setProducts(resultado.filter(product => product.category === cid)))
            .catch(error => console.log(error)) 
            .finally()
        }else{  
            mFetch()
            .then(resultado => setProducts(resultado))
            .catch(error => console.log(error))
            .finally()
        }
    }, [cid])

    const OnAdd = cant => {  
        console.log(cant)
    }

    return (  
        <>
            <ItemList products={products}/>
        </>  
    )
}

export default ItemListContainer