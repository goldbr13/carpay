import { StyleSheet, Text, View } from 'react-native';
import { Navbar, Nav, Container, Row, Col, Button, Table, Modal, Carousel } from 'react-bootstrap';
import { Header } from './Header';
import { Home } from "./Home";
import { Wallet } from './Wallet';
import { useFonts } from 'expo-font';
import logo from './assets/flo_v8_logo.png';
import car from "./assets/Car.png"
import store from "./assets/Store.png"
import transmit from "./assets/wireless.png"
import card from "./assets/Payment.png"
import hand from "./assets/hand.png"
import food from "./assets/food.png"
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
// import Modal from "./Modal.js"
import React, { useState } from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

function Logotitle() {
  return(
    <img src={logo} width="80" height="60" alt="Flo Logo" style={{padding: '5px'}}></img>
  );
}

export default function App() {
  const Stack = createNativeStackNavigator();

  const [show, setShow] = useState(true);

  const handleClose = () => setShow(false);


  const [loaded] = useFonts({
    AleckSans: require('./assets/fonts/ATTAleckSans_W_Rg.ttf'),
  });

  if (!loaded) {
    return null;
  }
  return (
    <NavigationContainer>
      <Modal className="intro_modal" show={show} onHide={handleClose}>
        <Modal.Body style={{"text-align": "center"}}>
          <h3 className='my-2'>
            It's as easy as 1, 2, 3!
          </h3>
          <Carousel variant='dark'>
            <Carousel.Item>
              <Container style={{display: "flex", "flex-shrink":"1", alignContent: "center"}}>
                <img src={car} width="30%" style={{display: "block", "margin-left": "auto", padding: "4px"}}></img>
                <img src={store} width="30%" style={{display: "block", "margin-right": "auto"}}></img>
              </Container>
              <Carousel.Caption style={{color: "black"}}>
                1. Pull Up to the Drive-Thru
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <Container style={{display: "flex", "flex-shrink":"1", alignContent: "center"}}>
                <img src={transmit} width="30%" style={{display: "block", "margin-left": "auto", padding: "4px"}}></img>
                <img src={card} width="30%" style={{display: "block", "margin-right": "auto"}}></img>
              </Container>
              <Carousel.Caption style={{color: "black"}}>
                2. Pay With Your Car
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <Container style={{display: "flex", "flex-shrink":"1", alignContent: "center"}}>
                <img src={hand} width="30%" style={{display: "block", "margin-left": "auto", padding: "15px"}}></img>
                <img src={food} width="30%" style={{display: "block", "margin-right": "auto", padding: "15px"}}></img>
              </Container>
              <Carousel.Caption style={{color: "black"}}>
                3. Grab Your Food
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </Modal.Body>
      </Modal>
      {/* <Header></Header> */}
      <Stack.Navigator initialRout="Home" screenOptions={{}} >
        <Stack.Screen name="Home" component={Home} 
          options={({navigation}) => ({
            headerStyle: {
              backgroundColor: "black",
            },
            // headerTitleAlign: "center",
            headerShadowVisible: false,
            headerTitle: () => (<Logotitle></Logotitle>),
            // headerRight: () => (
            //   <Button onClick={() => navigation.navigate('Wallet')}>Wallet Button</Button>
            // ),
        })}/>
        <Stack.Screen name="Wallet" component={Wallet} />
      </Stack.Navigator>
      {/* <View style={styles.container}>
        <Header></Header>
        <Home></Home>
      </View> */}
    </NavigationContainer>
  );
}


