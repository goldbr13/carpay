import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Navbar, Nav, Container, Row, Col, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'

export default function App() {
  return (
    <View style={styles.container}>
      <Navbar bg="dark" variant="dark">
        
        <Container>
        <Navbar.Brand href="#home">Navbar</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#features">Features</Nav.Link>
          <Nav.Link href="#pricing">Pricing</Nav.Link>
        </Nav>
        </Container>
      </Navbar>
      <div>
        {/* <Row>

        </Row> */}
        <Row>
          <Col xs="7" className="my-4"><Container>
            <h2>Order Details:</h2>
          </Container></Col>
          <Col className="min-vh-100 rightBar">
            <Button>This is a button</Button>
          </Col>
        </Row>
      </div>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    color: "dark"
  }
});


