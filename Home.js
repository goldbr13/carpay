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

export function Home(){
    const items = [[1, "Small Cheeseburger", 4], [1, "Large French Fries", 52], [4, "Medium Sodas", 34.02], [1, "2p Chicken Nugget", 10.01], [1, "Small Cheeseburger", 4], [1, "Large French Fries", 52], [4, "Medium Sodas", 34.02], [1, "2p Chicken Nugget", 10.01], [1, "Small Cheeseburger", 4], [1, "Large French Fries", 52], [4, "Medium Sodas", 34.02], [1, "2p Chicken Nugget", 10.01]];
    const sum = items.reduce((partialSum, a) => partialSum + a[2], 0).toFixed(2)
    return (
        <Row>
            <OrderBar items={items} sum={sum}></OrderBar>
            <PaymentBar sum={sum}></PaymentBar>
        </Row>
    );
}