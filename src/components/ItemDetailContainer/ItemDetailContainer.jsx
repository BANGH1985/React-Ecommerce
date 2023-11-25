import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { Itemcounter } from "../itemCounter/itemCounter"
import { Button, Card, ListGroup } from "react-bootstrap"
import { mFetch } from "../../helpers/mFetch"
import { useCartContext } from "../../contexts/CartContext"


import "./ItemDetailContainer.css"



export const ItemDetailContainer = () => {  
    const [product, setProducts] = useState({})
    const {pid} = useParams()
    const {AddToCart} = useCartContext()
    useEffect(() => {   
        mFetch(pid)
        .then(resultado => setProducts(resultado))
        .catch(error => console.log(error))
        .finally(()=> setLoading(false))
    },[])

    const onAdd = cant => {  
        AddToCart({...product, cant})
    }

    return (    
        <div className="container-fluid cardDetail">   
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
                    <br />
                    <Button variant="dark">Comprar</Button>
                </Card.Body>
            </div>
        </div>
    )
}