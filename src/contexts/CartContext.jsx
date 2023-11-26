import { createContext, useContext, useState } from "react";


export const CartContext = createContext([])

export const useCartContext = () => useContext(CartContext)

export const CartContextProvider = ({children}) => {
    const [cartList, setCartList] = useState([])

    const AddToCart = (product) => {
        const existingProductIndex = cartList.findIndex(
            (item) => item.id === product.id
        );

        if (existingProductIndex !== -1) {
            const updatedCart = [...cartList]
            updatedCart[existingProductIndex].cant += product.cant
            setCartList(updatedCart)
        } else {
            setCartList([...cartList, product])
        }
    }
    const totalQuantity = () => {
        return cartList.reduce((total, product) => total + product.cant, 0)
    }
    const totalPrice = () => {           
        return cartList.reduce((acum, prod) => acum + (prod.cant * prod.price), 0)     
    }
    const emptyCart = () => {
        setCartList([])
    }
    const removeSingleItem = (productId) => {
        const updatedCart = cartList.map((product) => {
            if (product.id === productId && product.cant > 0) {
                return { ...product, cant: product.cant - 1 }
            }
            return product
        });
        setCartList(updatedCart.filter((product) => product.cant > 0))
    }
    return (
        <CartContext.Provider value= {{
            cartList,
            AddToCart,
            emptyCart,
            totalQuantity,
            totalPrice,
            removeSingleItem
        }}>
            {children}
        </CartContext.Provider>
    )

}