import { StyleSheet, Text, View } from 'react-native';
import { Navbar, Nav, Container, Row, Col, Button, Table } from 'react-bootstrap';
import { Header } from './Header';
import { Home } from "./Home";
import { Wallet } from './Wallet';
import { useFonts } from 'expo-font';
import logo from './assets/flo_v8_logo.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
// import Modal from "./Modal.js"
import React, { useState } from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const items = [[1, "Small Cheeseburger", 4], [1, "Large French Fries", 52], [4, "Medium Sodas", 34.02], [1, "2p Chicken Nugget", 10.01], [1, "Small Cheeseburger", 4], [1, "Large French Fries", 52], [4, "Medium Sodas", 34.02], [1, "2p Chicken Nugget", 10.01], [1, "Small Cheeseburger", 4], [1, "Large French Fries", 52], [4, "Medium Sodas", 34.02], [1, "2p Chicken Nugget", 10.01]]

function Logotitle() {
  return(
    <img src={logo} width="80" height="60" alt="Flo Logo" style={{padding: '5px'}}></img>
  );
}

export default function App() {
  const Stack = createNativeStackNavigator();

  const [loaded] = useFonts({
    AleckSans: require('./assets/fonts/ATTAleckSans_W_Rg.ttf'),
  });

  if (!loaded) {
    return null;
  }
  return (
    <NavigationContainer>
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


