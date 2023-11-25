
import { Filter } from './filter';
import { Link } from 'react-router-dom';
import "./ItemList.css"




const prouctFiltered = ({products, filterState}) => (   
    <>
        {
            filterState === '' ? 
                                    products.map(product =>
                                        <div key={product.id} className="card w-25 estiloCard">
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
                                :
                                    products
                                        .filter(prod => products.name.tolowerCase().includes(filterState.tolowerCase()))
                                        .map(product =>
                                            <div key={product.id} className="card w-25 estiloCard">
                                                <img src={product.image} className="card-img-top" alt=""/>
                                                <div className="card-body">
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
    </>
)


export const ItemList = ({products}) => { 
    return (    
        <Filter products= {products}>
            {prouctFiltered}
        </Filter>
    )
}





