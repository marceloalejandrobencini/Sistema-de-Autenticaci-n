import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Navbar as BootstrapNavbar, Nav, Button } from 'react-bootstrap';

const Navbar = () => {
    const navigate = useNavigate();

    const handleLogout = () => {
        sessionStorage.removeItem('token');
        navigate('/login'); 
    };

    return (
        <BootstrapNavbar bg="dark" variant="dark">
            <BootstrapNavbar.Brand as={Link} to="/">Flask Logins</BootstrapNavbar.Brand>
            <Nav className="mr-auto">
                <Nav.Link as={Link} to="/">Home</Nav.Link>
                <Nav.Link as={Link} to="/signup">Registro</Nav.Link>
                <Nav.Link as={Link} to="/login">Inicio de sesión</Nav.Link>
                <Nav.Link as={Link} to="/private">Privado</Nav.Link>
            </Nav>
            <Button variant="outline-light" onClick={handleLogout}>Logout</Button>
        </BootstrapNavbar>
    );
};

export default Navbar;