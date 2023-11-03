import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import { Button } from "react-bootstrap";
import { Filter } from './filter';
import { Link } from 'react-router-dom';




const prouctFiltered = ({products, filterState, handleFilterChange}) => (   
    <>
        <div>   
            <label>Buscar </label>
            <input className='form-control' type="text" value='' onChange={handleFilterChange} />
        </div>
        {
            filterState === '' ? 
                                    products.map(product =>      
                                        <div key={product.id} className="card w-25 h-100 ">   
                                            <Card>
                                                <Card.Img variant="top" src={product.image} />
                                                <Card.Body>
                                                    <Card.Title>{product.name}</Card.Title>
                                                </Card.Body>
                                                <ListGroup className="list-group-flush">
                                                    {product.category}
                                                    <br />
                                                    {product.price}
                                                </ListGroup>
                                                <Card.Body>
                                                    <Link to={`/detail/${product.id}`}>  
                                                        <Button variant="dark">detalle</Button>
                                                    </Link>
                                                    <br />
                                                    <Button variant="dark">Comprar</Button>
                                                </Card.Body>
                                            </Card>
                                        </div>
                                    )
                                :
                                    products
                                        .filter(prod => prod.name.tolowerCase().includes(filterState.tolowerCase()))
                                        .map(product =>      
                                            <div key={product.id} className="card w-25">   
                                                <Card>
                                                    <Card.Img  variant="top" src={product.image} />
                                                    <Card.Body>
                                                        <Card.Title>{product.name}</Card.Title>
                                                    </Card.Body>
                                                    <ListGroup className="list-group-flush">
                                                        {product.category}
                                                        <br />
                                                        {product.price}
                                                    </ListGroup>
                                                    <Card.Body>
                                                        <Button variant="dark">detalle</Button>
                                                        <br />
                                                        <Button variant="dark">Comprar</Button>
                                                    </Card.Body>
                                                </Card>
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





