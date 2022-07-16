import React from "react";
import { Modal, ListGroup, Nav, Container, Row, Col, Button, Table } from 'react-bootstrap';
import { useState } from 'react';
import validator from 'validator'

export function PaymentModal(){
  const [show, setShow] = useState(false);

  const handleClose = () => {
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
    setAdd(false)
  };

  const handleClose2 = () => setShow(false);

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
      setAdd(false)
    }
    else if (validator.isCreditCard(value)) {
      setErrorMessage('')
      setAdd(true)
    } else {
      setErrorMessage('Your Credit Card Number is Invalid!')
      setAdd(false)
    }
    setCardValue(value)
  }

  const re = /^[0-9]{3,4}$/

  const validateCVV = (value) => {
    if (re.test(value)) {
     setAdd2(true) 
    }
    else {
      setAdd2(false)
    }
    setCvvValue(value)
  }


  const [add, setAdd] = useState(false)
  const [add2, setAdd2] = useState(false)

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
                    <ListGroup.Item action onClick={() => {select(item); handleClose2();}}>
                      {item}
                    </ListGroup.Item>
                  );
              })
              }
            </ListGroup>
        </Modal.Body>
        <Modal.Footer>
          <form>
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
              {/* <option disabled selected> Select Card Type </option> */}
              <option value="Mastercard"> Mastercard </option>
              <option value="Visa"> Visa </option>
              <option value="American Express"> American Express </option>
              <option value="Discover"> Discover </option>
            </select>
            <br></br>
          </form>
        
          <br></br>

        <Button variant="primary" disabled={!(add && add2 && (monthValue))} onClick={handleClose}>
            Add Card
        </Button>
        </Modal.Footer>
    </Modal>
    </>
  );
};


export default Modal;