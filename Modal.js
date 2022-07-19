import React from "react";
import { Modal, ListGroup, Nav, Container, Row, Col, Button, Table, Form, FloatingLabel } from 'react-bootstrap';
import { useState } from 'react';
import validator from 'validator'

export function PaymentModal(){
  const [show, setShow] = useState(false);

  const handleClose2 = () => {
    let len = cardValue.length
    if (typeValue == "Mastercard"){
      let newCard = "MC ****" + cardValue.slice(len-4,len)
      setCreditCards(arr=>[...arr, newCard])
    }
    else if (typeValue == "Visa"){
      let newCard = "Visa ****" + cardValue.slice(len-4,len)
      setCreditCards(arr=>[...arr, newCard])
    }
    else if (typeValue == "American Express"){
      let newCard = "AMEX ****" + cardValue.slice(len-4,len)
      setCreditCards(arr=>[...arr, newCard])
    }
    else {
      let newCard = "DISC ****" + cardValue.slice(len-4,len)
      setCreditCards(arr=>[...arr, newCard])
    }
    setCardValue('')
    setCvvValue('')
    setMonthValue('')
    setCCValid(false)
  };

  const handleClose = () => setShow(false);

  const handleShow = () => setShow(true);

  const [selected, setSelected] = useState("");
  // const CreditCards = ["Visa ****0334", "Visa ****0452"];

  const [creditCards, setCreditCards] = useState(["Visa ****0334", "Visa ****0452"]);

  function showSelected(){
    if(selected){
      return selected;
    }
    else{
      return "Add Card"
    }
  }

  const select = (item) => setSelected(item)

  const [errorMessage, setErrorMessage] = useState('')
    
  const validateCreditCard = (value) => {
    if (value == '') {
      setErrorMessage('')
      setCCValid(false)
    }
    else if (validator.isCreditCard(value)) {
      setErrorMessage('')
      setCCValid(true)
    } else {
      setErrorMessage('Your Credit Card Number is Invalid!')
      setCCValid(false)
    }
    setCardValue(value)
  }

  const re = /^[0-9]{3,4}$/

  const validateCVV = (value) => {
    if (re.test(value)) {
     setCVVValid(true) 
    }
    else {
      setCVVValid(false)
    }
    setCvvValue(value)
  }


  const [CCValid, setCCValid] = useState(false)
  const [CVVValid, setCVVValid] = useState(false)

  const [cardValue, setCardValue] = useState('')
  const [cvvValue, setCvvValue] = useState('')
  const [monthValue, setMonthValue] = useState('')
  const [typeValue, setTypeValue] = useState('Mastercard')


  return (
    <>
      <Button variant="dark" className="bg-dark" onClick={handleShow}>{
        showSelected()
      }</Button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
        <Modal.Title>Select Credit Card</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <ListGroup>
              {
              creditCards.map(item => {
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
          <Form style={{width: "100%"}}>
            <h4>Add New Payment Method</h4>
            <Row className="my-2">
              <Form.Group>
                <FloatingLabel label="Card Number">
                  <Form.Control type="number" placeholder="0" value={cardValue} onChange={(e) => validateCreditCard(e.target.value)}/>
                </FloatingLabel>
                <span style={{
                    fontWeight: 'bold',
                    color: 'red',
                }}>{errorMessage}</span> <br></br>
              </Form.Group>
            </Row>
            <Row className="my-2">
              <Form.Group>
                <FloatingLabel label="CVV">
                  <Form.Control type="number" placeholder="0" value={cvvValue} onChange={(e) => validateCVV(e.target.value)} id="cvv"/>
                </FloatingLabel>
              </Form.Group>
            </Row>
            <Row className="my-2">
              <Col xs="5" className="me-auto">
                <Form.Group>
                  <Form.Label>
                    Expiration Date:
                  </Form.Label>
                  <Form.Control type="month" id="date" min="2022-07" value={monthValue} onChange={(e) => setMonthValue(e.target.value)}/>
                </Form.Group>
              </Col>
              <Col xs="5" className="ms-auto">
                <Form.Group>
                  <Form.Label>
                    Type:
                  </Form.Label>
                  <Form.Select id="types" value={typeValue} onChange={(e) => setTypeValue(e.target.value)}>
                    <option value="Mastercard"> Mastercard </option>
                    <option value="Visa"> Visa </option>
                    <option value="American Express"> American Express </option>
                    <option value="Discover"> Discover </option>
                  </Form.Select>
                </Form.Group>
              </Col>
            </Row>
          </Form>
          {/* <form>
            <br></br>
            <label for="card"> Enter card number: </label>
            <input type="number" value={cardValue} onChange={(e) => validateCreditCard(e.target.value)} id="card"></input><br></br>
            <span style={{
                fontWeight: 'bold',
                color: 'red',
            }}>{errorMessage}</span> <br></br>
            <label for="cvv"> CVV: </label>
            <input type="number" value={cvvValue} onChange={(e) => validateCVV(e.target.value)} id="cvv"></input> 
            <br></br>
            <label for="date"> Expiration Date: </label>
            <input type="month" id="date" min="2022-07" value={monthValue} onChange={(e) => setMonthValue(e.target.value)}></input><br></br>
            <select id="types" value={typeValue} onChange={(e) => setTypeValue(e.target.value)}>
              <option value="Mastercard"> Mastercard </option>
              <option value="Visa"> Visa </option>
              <option value="American Express"> American Express </option>
              <option value="Discover"> Discover </option>
            </select>
            <br></br>
          </form>
        
          <br></br> */}

        <Button variant="primary" disabled={!(CCValid && CVVValid && (monthValue))} onClick={handleClose2}>
            Add Card
        </Button>
        </Modal.Footer>
    </Modal>
    </>
  );
};


export default Modal;