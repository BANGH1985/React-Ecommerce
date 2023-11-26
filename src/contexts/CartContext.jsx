import { createContext, useContext, useState } from "react"


export const CartContext = createContext([])

export const useCartContext = () => useContext(CartContext)

export const CartContextProvider = ({children}) => {    
    const [cartList, setCartList] = useState([])
    
    const IsInCart = (id) => {  
        return cartList.find(product => product.id === id)
    }

    const AddToCart = (product, cant) => {   
        if(IsInCart(product.id)){   
            const index = cartList.findIndex(prod => prod.id === product.id)
            const aux = [...cartList]
            aux[index].cant = cant
            setCartList(aux)
        }else { 
            const newProduct = {    
                ...product, 
                cant: cant
            }
            setCartList([...cartList, newProduct])
        }
    }
    const empyCart = () => {    
        setCartList([])
    }

    const removeItem = (id) => {    
        setCartList(cartList.filter(prod => prod.id !== id))
    }
    const getItemQuantity = () => { 
        return cartList.reduce ((acum, prod) => acum +- prod.cant, 0)
    }
    const totalPrice = () => {  
        return cartList.reduce((acum, prod) => acum + (prod.cant * prod.price), 0)
    }
    
    return( 
        <CartContext.Provider value={{  
            cartList, 
            IsInCart,
            AddToCart,
            empyCart,
            removeItem,
            getItemQuantity,
            totalPrice
        }}> 
            {children}
        </CartContext.Provider>
    )
}


