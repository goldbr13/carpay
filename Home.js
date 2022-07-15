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
    const items = [[1, "Small Cheeseburger", 4.59], [2, "Large French Fries", 7.98], [1, "Medium Soda", 1.99], [1, "4p Chicken Nugget", 3.99], [1, "Apple Pie", 2.99], [1, "V8 Special Motor Oil", 14.99]]
    const sum = items.reduce((partialSum, a) => partialSum + a[2], 0).toFixed(2)
    return (
        <Row>
            <OrderBar items={items} sum={sum}></OrderBar>
            <PaymentBar sum={sum}></PaymentBar>
        </Row>
    );
}