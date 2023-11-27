import { useCartContext } from "../../contexts/CartContext"

export const ItemCart = ({product}) => { 
    const {removeSingleItem} = useCartContext()
    return (    
        <div >  
            <img className="w-15 timg" src={product.image} alt="image" />
            {product.name} -    
            Precio: {product.price} -   
            Cantidad Seleccionada  {product.cant} -  
            <button className="btn btn-outline-dark botonItem" onClick={() => removeSingleItem(product.id)}>X</button>
        </div>
    )
}