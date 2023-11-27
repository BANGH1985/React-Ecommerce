import { useCartContext } from "../../contexts/CartContext"
import { addDoc, collection, getFirestore } from "firebase/firestore";
import { ItemCart } from "../ItemCart/ItemCart";
import { useState } from "react";
import { Link } from "react-router-dom";
import "./CartContainer.css"

export const CartContainer = () => {  
    const [formData, setFormData] = useState({  
        name: "",
        phone: "",
        email: ""
    })
    const [isId, setIsId] = useState("")
    const {cartList, emptyCart, totalPrice, totalQuantity} = useCartContext()
    const handleOrders = (evt) => {
        evt.preventDefault()
        const order = {}
        order.buyer = formData
        order.items = cartList.map(({id, price, cant, name}) => ({id: id, price: price, name: name, cant: cant}))
        order.total = totalPrice()  
        const db = getFirestore()
        const queryCollection = collection(db, 'orders')

        addDoc(queryCollection, order)
        .then(({ id }) => setIsId(id))
        .catch(err => console.log(err))
        .finally(() => {    
                setFormData({  
                    name: "",
                    phone: "",
                    email: ""
            })
            emptyCart()
        })
    }
    const handleOnChange = (evt) => {   
        setFormData({   
            ...formData,
            [evt.target.name]: evt.target.value
        })
    }
    return( 
        <>  
            {isId !== "" &&
                <>
                    <div>   
                        <div>   
                            <h3>El ID de tu Compra es: {isId}</h3>
                        </div>
                    </div>
                </>
            }
            { cartList.length == 0 ? 
                <>  
                    <h1 className="text-center">Carrito Vacio</h1>
                    <Link className="btn btn-outline-dark"  to="/">HOME</Link>
                </>
                :
                <>
                    <div>   
                        <div>   
                            {cartList.map(product => 
                                                    <ItemCart key={product.id} product={product} />
                            )}
                        </div>
                        <div className="contenedorItemCart">   
                            {totalQuantity() != 0 && <p>Cantidad Total de Carrito = {totalQuantity()}</p>}
                            <br /> 
                            {totalPrice() != 0 && <p>Precio Total de la Compra = ${totalPrice()}</p>}
                            <br />  
                        </div>
                        <div className="text-center " style={{display: "flex", flexDirection: "row", justifyContent: "center"}} >   
                            <form className="text-centers w-50" onSubmit={handleOrders}>  
                                <input className="form-control text-center" type="text" placeholder="Ingrese Nombre Completo" name="name" onChange={handleOnChange} value={formData.name} />
                                <input className="form-control text-center"  type="text" name="phone" placeholder="Ingrese Numero de Telefono" onChange={handleOnChange} value={formData.phone} />
                                <input className="form-control text-center"  type="text" name="email" placeholder="Ingrese email de Contacto" onChange={handleOnChange} value={formData.email}/>
                                <br />
                            </form>
                        </div>
                        <button className="btn btn-outline-dark" onClick={handleOrders} >Comprar</button>
                        <br />
                        <br />
                        <button className="btn btn-outline-dark" onClick={emptyCart}>Borrar Carrito</button>
                    </div>
                </>
            }
        </>
    )
}


