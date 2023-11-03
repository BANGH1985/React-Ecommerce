import { useState } from "react"
import { useCounter } from "../hooks/hooks"

export const Itemcounter = ({initial=1, stock=500, onAdd}) => {  
    const {count, handleSume, handleResta} = useCounter(initial, stock)

    const handleOnAdd = ()=> {  
        onAdd(count)
    }
    return (    
        <>
            <div>   
                <div>   
                    <p>{count}</p>
                </div>
                <div>   
                    <button onClick={handleSume}> + </button>
                    <button onClick={handleResta}> - </button>
                    <button onClick={handleOnAdd}>Agregar al Carrito</button>
                </div>
            </div>
        </>
    )
}

export default Itemcounter