import { useState } from "react"

export const useCounter = (min, max) => {   
    const [count, setCount] = useState(min)
    const handleSume = () => {  
        if (count < max) {  
            setCount(count+1)
        }
    }
    const handleResta = () => { 
        if (count > min) {  
            setCount(count-1)
        }
    }

    const handleOnAdd = ()=>{   
        onAdd(count)
    }

    return {    
        count,
        handleSume,
        handleResta
    }
}