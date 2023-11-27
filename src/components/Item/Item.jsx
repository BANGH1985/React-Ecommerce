import { Link } from "react-router-dom"
import "./Item.css"


export const Item = ({product}) => {    
    return (    
        <div className="card w-25 estiloCard" style={{display: "flex", flexDirection: "row", justifyContent: "center"}} >
            <div className='card-img-top w-50 mt-30 contenedorImagen'>   
                <img src={product.image} className="card-img-top flex timg" alt=""/>
            </div>
            <div className="card-body description">
                <h2 className="name">{product.name}</h2>
                <p className="category" >{product.category}</p>
                <p className="price" >Precio: ${product.price}</p>
                <Link to={`/detail/${product.id}`} className="card">
                    <button className="btn btn-outline-dark w-100 text-center">Detalle</button>
                </Link>
            </div>
        </div>
    )
}