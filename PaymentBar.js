import { Modal, ListGroup, Nav, Container, Row, Col, Button, Table } from 'react-bootstrap';
import { useState } from 'react';
import { PaymentModal } from './Modal';


export function PaymentBar() {
    return(
    <Col className="min-vh-100 rightBar">
        <div>
            <Row className="mx-4 my-4">
                <PaymentModal></PaymentModal>
            </Row>
            <Row className="mx-4">
                <ListGroup>
                    <ListGroup.Item action>
                        15%
                    </ListGroup.Item>
                    <ListGroup.Item action>
                        20%
                    </ListGroup.Item>
                    <ListGroup.Item action>
                        Custom
                    </ListGroup.Item>
                </ListGroup>
            </Row>
            <Row className="mt-4 py-1 bg-black totalSum">
                <h3>$150.25</h3>
            </Row>
            <Row>
                <Col><Button className='confButton' style={{backgroundColor: "#E51C1C", borderColor: "#E51C1C"}}>
                    X
                </Button></Col>
                <Col><Button className='confButton' style={{backgroundColor: "#29D06C", borderColor: "#29D06C"}}>
                    O
                </Button></Col>
            </Row>
        </div>
    </Col>
    )
}