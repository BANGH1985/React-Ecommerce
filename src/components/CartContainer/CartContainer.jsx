import { useCartContext } from "../../contexts/CartContext"
import { addDoc, collection, getFirestore } from "firebase/firestore";

export const CartContainer = () => {    
    const {cartList, emptyCart, totalPrice, totalQuantity, removeSingleItem} = useCartContext()
    const handleOrders = () => {
        const order = {}
        order.buyer = {}
        order.items = cartList.map(({id, price, cant, name}) => ({id: id, price: price, name: name, cant: cant}))
        order.total = totalPrice()  
        const db = getFirestore()
        const queryCollection = collection(db, 'orders')

        addDoc(queryCollection, order)
        .then(({ id }) => console.log(id))
        .catch(err => console.log(err))
    }
    return( 
        <div>   
            {cartList.map(product => 
                                    <div key={product.id}>  
                                        <img className="w-25" src={product.image} alt="image" />
                                        Detalle: {product.name} -    
                                        Precio: {product.price} -   
                                        Cantidad {product.cant} -  
                                        <button className="btn btn-outline-dark botonItem" onClick={() => removeSingleItem(product.id)}>X</button>
                                    </div>
            )}
            Cantidad total : {totalQuantity()}
            <br /> 
            Precio Total: {totalPrice()}
            <br />  
            <button className="btn btn-outline-dark" onClick={emptyCart}>Borrar Carrito</button>
            <br />
            <button className="btn btn-outline-dark" onClick={handleOrders}>Comprar</button>
        </div>
    )
}


