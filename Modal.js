import React from "react";
import { Modal, ListGroup, Nav, Container, Row, Col, Button, Table } from 'react-bootstrap';
import { useState } from 'react';

export function PaymentModal(){
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const Selected = "";
  const CreditCards = ["VISA ****0334", "VISA ****0452"];

  return (
    <>
      <Button className="bg-dark" onClick={handleShow}>Enter Credit Card</Button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
        <Modal.Title>Select Credit Card</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <ListGroup defaultActiveKey="#link1">
              {
              CreditCards.map(item => {
                  return (
                    <ListGroup.Item action>
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