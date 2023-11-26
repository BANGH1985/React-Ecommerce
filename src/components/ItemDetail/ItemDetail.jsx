import { Card, ListGroup } from "react-bootstrap"
import { Itemcounter } from "../itemCounter/itemCounter"
import { useCartContext } from "../../contexts/CartContext"

export const ItemDetail = ({product}) => {   
    const {AddToCart} = useCartContext()
    const onAdd = cant => {  
        AddToCart({...product, cant})
    }
    return (    
        <div  className="container-fluid cardDetail">   
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
    )
}