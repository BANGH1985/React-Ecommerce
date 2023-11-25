import { useCartContext } from "../../contexts/CartContext"

export const CartContainer = () => {    
    const {cartList, clearCart} = useCartContext()
    const handleOrders = () =>{ 
        
    }
    return( 
        <div>   
            {cartList.map(product => 
                                    <div>  
                                        <img className="w-25" src={product.img} alt="image" />
                                        {product.name} - Precio: {product.price} - Cantidad{product.cant}
                                    </div>
            )}
            Precio Total: 
            <br />  
            <button className="btn btn-outline-dark" onClick={clearCart}>Borrar Carrito</button>
        </div>
    )
}