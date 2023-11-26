import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { Itemcounter } from "../itemCounter/itemCounter"
import { Button, Card, ListGroup } from "react-bootstrap"
import { useCartContext } from "../../contexts/CartContext"
import { doc, getDoc, getFirestore } from "firebase/firestore"


import "./ItemDetailContainer.css"



export const ItemDetailContainer = () => {  
    const [product, setProduct] = useState({})
    const [loading, setLoading] = useState(true)
    const {pid} = useParams()
    const {AddToCart} = useCartContext()
    useEffect(()=>{
        const dbFirestore = getFirestore()
        const queryDoc    = doc(dbFirestore, 'products', pid) 
        getDoc(queryDoc)
        .then(res => setProduct( { id: res.id , ...res.data() } ))
        .catch(err => console.log(err))
        .finally(() => setLoading(false));
},[])

    const onAdd = cant => {  
        AddToCart({...product, cant})
    }

    return (
        <> 
        {
            loading ? <img src="https://cdn.dribbble.com/users/2973561/screenshots/5757826/media/221d6bfc1960ab98a7585fcc2a4d0181.gif" alt="loading" />
            :
            <div key={product.id} className="container-fluid cardDetail">   
                <div className="card w-25 h-100">   
                    <Card.Img  variant="top" src={product.image} />
                    <Card.Body>
                        <Card.Title>{product.name}</Card.Title>
                    </Card.Body>
                    <ListGroup className="list-group-flush">
                        {product.category}
                        <br />
                        Precio: ${product.price}
                    </ListGroup>
                    <Card.Body>
                        <Itemcounter initial={1} stock={10} onAdd={onAdd}/>
                    </Card.Body>
                </div>
            </div>
        }
        </>    
    )
}
