import { Modal, ListGroup, Nav, Container, Row, Col, Button, Table } from 'react-bootstrap';
import { useState } from 'react';
import checkmark from './assets/checkmark.png'
import crossmark from './assets/crossmark.png'
import { PaymentModal } from './Modal';


export function PaymentBar() {
    return(
    <Col className="min-vh-100 rightBar">
        <div>
            <Row className="mx-4 my-4">
                <PaymentModal></PaymentModal>
            </Row>
            <Row className="mx-4">
                <ListGroup bg-dark>
                    <ListGroup.Item action className="tipsOptions">
                        15%
                    </ListGroup.Item>
                    <ListGroup.Item action className="tipsOptions">
                        20%
                    </ListGroup.Item>
                    <ListGroup.Item action className="tipsOptions">
                        Custom
                    </ListGroup.Item>
                </ListGroup>
            </Row>
            <Row className="mt-4 py-1 bg-black totalSum">
                <h3>$150.25</h3>
            </Row>
            <Row>
                <Col><Button className='confButton' style={{backgroundColor: "#E51C1C", borderColor: "#E51C1C"}}>
                    <img src={crossmark} width="60" height="50" alt="crossmark" style={{padding: '5px'}}></img>
                </Button></Col>
                <Col><Button className='confButton' style={{backgroundColor: "#29D06C", borderColor: "#29D06C"}}>
                    <img src={checkmark} width="60" height="50" alt="checkmark" style={{padding: '5px'}}></img>
                </Button></Col>
            </Row>
        </div>
    </Col>
    )
}