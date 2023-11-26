import { Link } from "react-router-dom"


export const Item = ({product}) => {    
    return (    
        <div className="card w-25 estiloCard">
            <div className='card-img-top contenedorImagen'>   
                <img src={product.image} className="card-img-top flex timg" alt=""/>
            </div>
            <div className="card-body description">
                <h3>{product.name}</h3>
                <p>{product.category}</p>
                <p>Precio: ${product.price}</p>
                <Link to={`/detail/${product.id}`} className="card-footer">
                    <button className="btn-dark w-100">Detalle</button>
                </Link>
            </div>
        </div>
    )
}