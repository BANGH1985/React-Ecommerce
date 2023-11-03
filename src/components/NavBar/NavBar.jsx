import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { CartWidget } from '../CartWidget/CartWidget';
import  Imagen from '../../assets/descarga.jpg'
import { Link,NavLink  } from 'react-router-dom';


function NavBar () {
    return (
        <Navbar collapseOnSelect expand="lg" className="bg-light text-dark navbar-light">
            <Container>
                <img className='imgLogo' src= {Imagen} />
                <NavLink className={({isActive})=> isActive ? 'btn btn-dark' : 'btn' } to="/">DREAMS</NavLink>
                <Navbar.Collapse id="basic-navbar-nav">
                    <NavLink className={({isActive})=> isActive ? 'btn btn-dark' : 'btn' } to="/category/remeras">Remeras</NavLink>
                    <NavLink className={({isActive})=> isActive ? 'btn btn-dark' : 'btn' } to="/category/pantalones">Pantalones</NavLink>
                    <NavLink className={({isActive})=> isActive ? 'btn btn-dark' : 'btn' } to="/category/gorras">Gorras</NavLink>
                </Navbar.Collapse>
                <NavLink to="/cart">
                    <CartWidget />
                </NavLink>
            </Container>
        </Navbar>
    );
}

export default NavBar;