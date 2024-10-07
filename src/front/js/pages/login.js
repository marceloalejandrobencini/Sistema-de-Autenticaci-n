import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import Swal from 'sweetalert2';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/api/login`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email, password }),
            });

            if (response.ok) {
                const data = await response.json();
                sessionStorage.setItem('token', data.token);
                Swal.fire({
                    icon: 'success',
                    title: 'Inicio de sesión exitoso',
                    text: '¡Bienvenido!',
                    confirmButtonText: 'Aceptar'
                }).then(() => {
                    navigate('/private');
                });
            } else {
                const data = await response.json();
                console.error(data.message);
                alert(data.message);  
            }
        } catch (error) {
            console.error('Error durante la solicitud:', error);
            alert('Error durante la solicitud');
        }
    };

    return (
        <Container className="d-flex justify-content-center align-items-center min-vh-100" style={{ backgroundColor: 'black' }}>
            <Row className="w-100">
                <Col md={{ span: 4, offset: 4 }}>
                    <Form onSubmit={handleSubmit} className="p-4 rounded" style={{ backgroundColor: 'white' }}>
                        <h3 className="text-center">Inicio de sesión</h3>
                        <Form.Group controlId="formEmail">
                            <Form.Label>Email:</Form.Label>
                            <Form.Control 
                                type="email" 
                                value={email} 
                                onChange={(e) => setEmail(e.target.value)} 
                                required 
                            />
                        </Form.Group>
                        <Form.Group controlId="formPassword">
                            <Form.Label>Contraseña:</Form.Label>
                            <Form.Control 
                                type="password" 
                                value={password} 
                                onChange={(e) => setPassword(e.target.value)} 
                                required 
                            />
                        </Form.Group>
                        <Button variant="primary" type="submit" className="w-100 mt-3">Iniciar sesión</Button>
                    </Form>
                </Col>
            </Row>
        </Container>
    );
};

export default Login;