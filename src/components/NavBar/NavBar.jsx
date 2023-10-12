import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { CartWidget } from '../CartWidget/CartWidget';
import  Imagen from '../../assets/descarga.jpg'


function NavBar () {
    return (
        <Navbar collapseOnSelect expand="lg" className="bg-dark text-light navbar-dark">
            <Container>
                <img className='imgLogo' src= {Imagen} />
                <Navbar.Brand href="#home">DREAMS</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link href="#features">Conocenos</Nav.Link>
                    <Nav.Link href="#pricing">Contacto</Nav.Link>
                    <NavDropdown title="CATEGORIAS" id="collapsible-nav-dropdown-" data-bs-theme="dark">
                    <NavDropdown.Item href="#action/3.1">Remeras</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">Pantalones</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">Diseñador</NavDropdown.Item>
                    </NavDropdown>
                </Nav>
                <Nav>
                    <CartWidget />
                </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavBar;