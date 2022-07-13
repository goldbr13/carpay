import React from "react";
import Textbox from './textbox.js'
import { Modal, ListGroup, Nav, Container, Row, Col, Button, Table } from 'react-bootstrap';
import { useState } from 'react';
import checkmark from './assets/checkmark.png'

export function Securepay(){
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [selected, setSelected] = useState("");
  const CreditCards = ["VISA ****0334", "VISA ****0452"];

  const select = (item) => setSelected(item)
  
  return (
    <>
      <Button className='confButton' style={{backgroundColor: "#29D06C", borderColor: "#29D06C"}} onClick={handleShow}>
                    <img src={checkmark} width="55" height="50" alt="checkmark" style={{padding: '5px'}}></img>
                </Button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
        <Modal.Title>Enter your PIN</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <input type= "number"/>
       
        </Modal.Body>
        <Modal.Footer>
        <Button variant="primary" onClick={handleClose}>
            Submit
        </Button>
        </Modal.Footer>
    </Modal>
    </>
  );
};
export default Securepay;