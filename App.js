import { StyleSheet, Text, View } from 'react-native';
import { Navbar, Nav, Container, Row, Col, Button, Table } from 'react-bootstrap';
import { Header } from './Header';
import { PaymentBar } from './PaymentBar';
import { OrderBar } from './OrderBar';
import { useFonts } from 'expo-font';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
// import Modal from "./Modal.js"
import React, { useState } from "react";

const items = [[1, "Small Cheeseburger", 4], [1, "Large French Fries", 52], [4, "Medium Sodas", 34.02], [1, "2p Chicken Nugget", 10.01], [1, "Small Cheeseburger", 4], [1, "Large French Fries", 52], [4, "Medium Sodas", 34.02], [1, "2p Chicken Nugget", 10.01], [1, "Small Cheeseburger", 4], [1, "Large French Fries", 52], [4, "Medium Sodas", 34.02], [1, "2p Chicken Nugget", 10.01]]

export default function App() {



  const [isOpen, setIsOpen] = useState(false);

  const [loaded] = useFonts({
    AleckSans: require('./assets/fonts/ATTAleckSans_W_Rg.ttf'),
  });

  if (!loaded) {
    console.log("hi")
    return null;
  }
  return (
    <View style={styles.container}>
      
      <Header></Header>
      {/* <button className={styles.primaryBtn} onClick={() => setIsOpen(true)}>
        Credit Card
      </button> */}
      {isOpen && <Modal setIsOpen={setIsOpen} />}
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
    color: "dark",
    fontFamily: "AleckSans"
  }
});


