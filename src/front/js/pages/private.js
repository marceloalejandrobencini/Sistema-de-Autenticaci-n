import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';

const Private = () => {
    const navigate = useNavigate();

    useEffect(() => {
        const token = sessionStorage.getItem('token');
        if (!token) {
            navigate('/login');
        }
    }, [navigate]);

    return (
        <Container className="d-flex justify-content-center align-items-center vh-100">
            <Row>
                <Col className="text-center">
                    <div className="bg-dark text-light p-5 rounded">
                        <h2>Página Privada</h2>
                        <p>Bienvenido a la página privada. Solo los usuarios autenticados pueden ver esto.</p>
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default Private;