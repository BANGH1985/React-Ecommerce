import { Card, ListGroup } from "react-bootstrap"
import { Itemcounter } from "../itemCounter/itemCounter"
import { useCartContext } from "../../contexts/CartContext"
import { useState } from "react"
import { Link } from "react-router-dom"
import "./itemDetail.css"

export const ItemDetail = ({product}) => { 
    const [ isCount, setIsCount ] = useState(true)
    const {AddToCart} = useCartContext()
    const onAdd = cant => {  
        AddToCart({...product, cant})
        setIsCount(false)
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
                {
                    isCount ?
                        <Itemcounter initial={1} stock={15} onAdd={onAdd}/>
                    :
                        <>
                        <div className="contenedorBotonesDetalle">   
                            <div className="botonesDetalle" >   
                                <Link className="btn btn-outline-dark" to='/cart' >Ir al carrito de compras</Link>
                            </div>
                            <div>   
                                <Link className="btn btn-outline-dark" to='/' >Seguir comprando</Link>  
                            </div> 
                        </div>
                        </>
                }
            </div>
        </div>
    )
}