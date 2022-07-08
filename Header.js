import { StyleSheet, Text, View } from 'react-native';
import { Navbar, Nav, Container, Row, Col, Button, Table } from 'react-bootstrap';
import logo from './assets/flo_v8_logo.png';
export function Header() {
    return(
    <Navbar bg="black" variant="dark">
        <Container>
        <Navbar.Brand href="#home">
            <img src={logo} width="80" height="60" alt="Flo Logo"></img>
            
            Flo's V8 Cafe
        </Navbar.Brand>
        
        <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
        </Nav>
        </Container>
    </Navbar>
    )
}