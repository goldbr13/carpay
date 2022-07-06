import { StyleSheet, Text, View } from 'react-native';
import { Navbar, Nav, Container, Row, Col, Button, Table } from 'react-bootstrap';
import { Header } from './Header';
import { PaymentBar } from './PaymentBar';
import { OrderBar } from './OrderBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'

const items = [[1, "Small Cheeseburger", 4], [1, "Large French Fries", 52], [4, "Medium Sodas", 34.02], [1, "2p Chicken Nugget", 10.01]]

export default function App() {
  return (
    <View style={styles.container}>
      <Header></Header>
      <div>
        <Row>
          <OrderBar items={items}></OrderBar>
          <PaymentBar></PaymentBar>
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


