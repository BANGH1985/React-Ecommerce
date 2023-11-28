import { useCartContext } from "../../contexts/CartContext"
import { addDoc, collection, getFirestore } from "firebase/firestore";
import { ItemCart } from "../ItemCart/ItemCart";
import { useState } from "react";
import { Link } from "react-router-dom";
import "./CartContainer.css"
import Swal from "sweetalert2";

export const CartContainer = () => {  
    const [formData, setFormData] = useState({  
        name: "",
        phone: "",
        email: "",
        email2: ""
    })
    const [isId, setIsId] = useState("")
    const {cartList, emptyCart, totalPrice, totalQuantity} = useCartContext()
    const handleOrders = (evt) => {
        evt.preventDefault()
        const order = {}
        order.buyer = formData
        order.items = cartList.map(({id, price, cant, name}) => ({id: id, price: price, name: name, cant: cant}))
        order.total = totalPrice()  
        
        if (formData.email !== formData.email2) {
            Swal.fire({
                title: "¡Error!",
                text: "Los correos electrónicos no coinciden.",
                icon: "error"
            });
            return
        }

        const db = getFirestore()
        const queryCollection = collection(db, 'orders')

        addDoc(queryCollection, order)
        .then(({ id }) => setIsId(id))
        .catch(err => console.log(err))
        .finally(() => {    
                setFormData({  
                    name: "",
                    phone: "",
                    email: "",
                    email2: ""
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
                        <div className="idCompra">   
                            <h3 className="h3Id">El ID de tu Compra es: <strong>{isId}</strong> </h3>
                            <img className="w-25 imagenID" src="https://i.pinimg.com/564x/30/27/bb/3027bb63aa7e82fe11e7268179820b70.jpg" alt="" />
                        </div>
                    </div>
                </>
            }
            { cartList.length == 0 ? 
                <>  
                    <div className="botonesId">   
                        <div className="carritoVacio">
                            <h1 className="text-center">Carrito Vacio</h1>
                        </div>
                        <div className="botonHome">   
                            <Link className="btn btn-outline-light"  to="/">HOME</Link>
                        </div>
                    </div>
                </>
                :
                <>
                    <div className="contenedorOrden">   
                        <div >   
                            {cartList.map(product => 
                                                    <>  
                                                        <ItemCart key={product.id} product={product} /> <hr />
                                                    </>
                            )}
                        </div>
                        <hr />
                        <div className="contenedorPrecio">   
                            <div><strong>{totalQuantity() != 0 && <p>Cantidad Total de Carrito = {totalQuantity()}</p>}</strong></div>
                            <div><strong>{totalPrice() != 0 && <p>Precio Total de la Compra = ${totalPrice()}</p>}</strong></div>
                        </div>
                        <hr />
                        <div className="text-center " style={{display: "flex", flexDirection: "row", justifyContent: "center"}} >   
                            <form className="text-center w-50" onSubmit={handleOrders}> 
                                <div className="inputForm"><input className="form-control w-50 text-center" type="text" placeholder="Ingrese nombre" name="name" onChange={handleOnChange} value={formData.name} /></div>
                                <div className="inputForm"><input className="form-control w-50 text-center"  type="text" name="phone" placeholder="Ingrese Numero telefonico" onChange={handleOnChange} value={formData.phone} /></div>
                                <div className="inputForm"><input className="form-control w-50 text-center"  type="text" name="email" placeholder="Ingrese email" onChange={handleOnChange} value={formData.email}/></div>
                                <div className="inputForm"><input className="form-control w-50 text-center"  type="text" name="email2" placeholder="Conformar email " onChange={handleOnChange} value={formData.email2}/></div>
                                <br />
                            </form>
                        </div>
                        <button className="btn btn-outline-dark" onClick={handleOrders} >Enviar Compra</button>
                        <br />
                        <br />
                        <button className="btn btn-outline-dark" onClick={emptyCart}>Borrar Carrito</button>
                    </div>
                </>
            }
        </>
    )
}


