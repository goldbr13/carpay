import React from "react";
import { Modal, ListGroup, Nav, Container, Row, Col, Button, Table } from 'react-bootstrap';
import { useState } from 'react';

export function PaymentModal(){
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [selected, setSelected] = useState("");
  const CreditCards = ["VISA ****0334", "VISA ****0452"];

  function showSelected(){
    if(selected){
      return selected;
    }
    else{
      return "Add Card"
    }
  }

  const select = (item) => setSelected(item)

  return (
    <>
      <Button className="bg-dark" onClick={handleShow}>{
        showSelected()
      }</Button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
        <Modal.Title>Select Credit Card</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <ListGroup>
              {
              CreditCards.map(item => {
                  return (
                    <ListGroup.Item action onClick={() => {select(item); handleClose();}}>
                      {item}
                    </ListGroup.Item>
                  );
              })
              }
            </ListGroup>
        </Modal.Body>
        <Modal.Footer>
        <Button variant="primary" onClick={handleClose}>
            Add Card
        </Button>
        <Button variant="primary" onClick={handleClose}>
            Select
        </Button>
        </Modal.Footer>
    </Modal>
    </>
  );
};

export default Modal;