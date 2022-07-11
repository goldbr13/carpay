import { Modal, ListGroup, Nav, Container, Row, Col, Button, Table } from 'react-bootstrap';
import { useState } from 'react';
import { PaymentModal } from './Modal';


export function PaymentBar() {
    return(
    <Col className="min-vh-100 rightBar"><Container className="my-4">
        <PaymentModal></PaymentModal>
    </Container></Col>
    )
}