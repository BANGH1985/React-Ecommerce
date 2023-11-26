import { useCartContext } from "../../contexts/CartContext"

export const CartContainer = () => {    
    const {cartList, empyCart, totalPrice} = useCartContext()
    const handleOrders = () => {
        const order = {}
        order.buyer = { name: 'federico', phone: '321321321', email: 'f@gmail.com' }

        order.items = cartList.map(( { id, price, cant, name } ) => ( { id: id, price: price, name: name, cant: cant} ) )
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
                                    <div>  
                                        <img className="w-25" src={product.img} alt="image" />
                                        Detalle: {product.name} -    
                                        Precio: {product.price} -   
                                        Cantidad {product.cant} -
                                    </div>
            )}
            Precio Total: {totalPrice()}
            <br />  
            <button className="btn btn-outline-dark" onClick={empyCart}>Borrar Carrito</button>
            <br />
            <button className="btn btn-outline-dark" onClick={handleOrders}>Comprar</button>
        </div>
    )
}