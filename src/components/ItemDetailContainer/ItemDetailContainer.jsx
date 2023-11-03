import { useState } from "react"
import { useParams } from "react-router-dom"
import { Itemcounter } from "../itemCounter/itemCounter"
import { Button, Card, ListGroup } from "react-bootstrap"
import { mFetch } from "../../helpers/mFetch"

export const ItemDetailContainer = () => {  
    const [product, setProduct] = useState({})
    const {pid} = useParams()

    return (    
        <div className="card w-25 h-100 ">   
            <Card.Img  variant="top" src={product.image} />
            <Card.Body>
                <Card.Title>{product.name}</Card.Title>
            </Card.Body>
            <ListGroup className="list-group-flush">
                {product.category}
                <br />
                {product.price}
            </ListGroup>
            <Card.Body>
                {/* <Itemcounter initial={1} stock={10} onAdd={onAdd}/> */}
                <br />
                <Button variant="dark">Comprar</Button>
            </Card.Body>
        </div>
    )
}