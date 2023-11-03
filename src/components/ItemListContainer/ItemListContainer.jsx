import { useEffect, useState } from "react"
import { mFetch } from "../../helpers/mFetch"
import './ItemListContainer.css'
import { ItemList } from "../itemList/ItemList";
import { useParams } from "react-router-dom";

function ItemListContainer ({greeting = "texto home"}) {
    const [products, setProducts] = useState([])
    
    const {cid} = useParams()
    
    useEffect(()=> {
        if (cid) { 
            mFetch()
            .then(resultado => setProducts(resultado.filter(product => product.category === cid)))
            .catch(error => console.log(error)) 
            .finally(() => setLoading(false))
        }else{  
            mFetch()
            .then(resultado => setProducts(resultado))
            .catch(error => console.log(error))
            .finally()
        }
    }, [cid])

    return (  
        <>
            <div>   
                {greeting}
            </div>
            <div className="row justify-content-center">   
                <ItemList products={products} />
            </div>
        </>  
    )
}

export default ItemListContainer