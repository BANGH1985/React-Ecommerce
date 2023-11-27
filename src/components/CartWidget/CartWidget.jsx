import { useCartContext } from "../../contexts/CartContext"


export const CartWidget = () => {   
    const {totalQuantity} = useCartContext()
    return (    
        <div>   
            {totalQuantity() != 0 ? <p><span className="carrito ">{totalQuantity()}</span><img src="/public/assets/icons8-bolsa-de-compras-móvil-38.png" /></p>   
            :   
            <img src="/public/assets/icons8-bolsa-de-compras-móvil-38.png" />}
        </div>
    )
}