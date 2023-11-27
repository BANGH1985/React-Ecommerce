import { useCartContext } from "../../contexts/CartContext"


export const CartWidget = () => {   
    const {totalQuantity} = useCartContext()
    return (    
        <div>   
            {totalQuantity() != 0 ? <p><span className="carrito ">{totalQuantity()}</span><img src="/assets/icons8-carrito-de-compras-40.png" /></p>   
            :   
            <img src="/assets/icons8-carrito-de-compras-40.png" />}
        </div>
    )
}