
import { useCounter } from "../hooks/hooks"

export const Itemcounter = ({initial=1, stock=10, onAdd}) => {  
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
                    <button className="btn btn-outline-dark" onClick={handleSume}> + </button>
                    <button className="btn btn-outline-dark" onClick={handleResta}> - </button>
                    <button className="btn btn-outline-dark" onClick={handleOnAdd}>Agregar al Carrito</button>
                </div>
            </div>
        </>
    )
}

export default Itemcounter