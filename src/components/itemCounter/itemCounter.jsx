
import { useCounter } from "../hooks/hooks"

export const Itemcounter = ({initial=1, stock=10, onAdd}) => {  
    const {count, handleSume, handleResta} = useCounter(initial, stock)

    const handleOnAdd = ()=> {  
        onAdd(count)
    }
    
    return (    
        <>
            <div>   
                <div className="contadorDetalle">   
                    <h3>{count}</h3>
                </div>
                <div className="botonesDetalle">  
                    <div>   
                        <button className="btn btn-outline-dark" onClick={handleSume}> + </button>
                    </div>
                    <div>   
                        <button className="btn btn-outline-dark" onClick={handleResta}> - </button>
                    </div>
                    <div>   
                        <button className="btn btn-outline-dark" onClick={handleOnAdd}>Agregar al Carrito</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Itemcounter