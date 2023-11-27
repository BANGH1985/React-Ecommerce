import { Item } from "../Item/Item"


export const ItemList = ({products}) => { 
    return (    
        <div className="container mt-3" style={{display: "flex", flexDirection: "row", flexWrap: "wrap", justifyContent:"center"}} >   
            {products.map(product => <Item key={product.id} product={product}/>)}
        </div>
    )
}





