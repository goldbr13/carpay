import { StyleSheet, Text, View } from 'react-native';
import { Navbar, Nav, Container, Row, Col, Button, Table, Modal, Carousel } from 'react-bootstrap';
import { Header } from './Header';
import { Home } from "./Home";
import { Wallet } from './Wallet';
import { useFonts } from 'expo-font';
import logo from './assets/flo_v8_logo.png';
import car from "./assets/Car.png"
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
      <Modal show={show} onHide={handleClose}>
        <Modal.Body>
          <Carousel>
            <Carousel.Item>
              <Container style={{display: "flex", "flex-shrink":"1" }}>
                <img src={car}></img>
                <img src={car}></img>
              </Container>
            </Carousel.Item>
            <Carousel.Item>
              <Container style={{display: "flex"}}>
                <img src={car}></img>
                <img src={car}></img>
              </Container>
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
            headerRight: () => (
              <Button onClick={() => navigation.navigate('Wallet')}>Wallet Button</Button>
            ),
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    color: "dark",
    fontFamily: "AleckSans"
  }
});


