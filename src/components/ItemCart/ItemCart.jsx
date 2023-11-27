
import { useCartContext } from "../../contexts/CartContext"
import "./ItemCart.css"

export const ItemCart = ({product}) => { 
    const {removeSingleItem} = useCartContext()
    return (   
        <>  
            <div className="contenedorItemCart">  
                <img className="w-15 timgcart" src={product.image} alt="image" />
                <div>{product.name}</div>   
                <div>Precio: {product.price}</div>    
                <div>Cantidad Seleccionada  {product.cant}</div>
                <button className="btn btn-outline-dark botonItem" onClick={() => removeSingleItem(product.id)}>X</button>
            </div>
            
        </> 
    )
}