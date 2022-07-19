import { Modal, ListGroup, Nav, Container, Row, Col, Button, Table } from 'react-bootstrap';
import { useState } from 'react';
import checkmark from './assets/checkmark.png'
import crossmark from './assets/crossmark.png'
import { PaymentModal } from './Modal';
import { Securepay } from './Securepay';


export function PaymentBar(props) {
    const lowtip = (props.sum*0.05).toFixed(2)
    const hightip = (props.sum*0.1).toFixed(2)

    const [total, setTotal] = useState(props.sum)

    return(
    <Col className="rightBar" style={{color: "white"}}>
        {/* <div> */}
            <Row className="mx-4 my-4">
                <PaymentModal></PaymentModal>
            </Row>
            <Row className="mx-4">
                <h4>Tips:</h4>
                <ListGroup bg-dark>
                    <ListGroup.Item action className="tipsOptions" onClick={() => setTotal(props.sum)}>
                        No Tip
                    </ListGroup.Item>
                    <ListGroup.Item action className="tipsOptions" onClick={() => setTotal((props.sum*1.05).toFixed(2))}>
                        5% - ${lowtip}
                    </ListGroup.Item>
                    <ListGroup.Item action className="tipsOptions" onClick={() => setTotal((props.sum*1.1).toFixed(2))}>
                        10% - ${hightip}
                    </ListGroup.Item>
                    <ListGroup.Item action className="tipsOptions">
                        Custom - $<input id="tips" type= "number" min="0" onChange={(event) => parseFloat(event.target.value) ? setTotal((parseFloat(props.sum) + parseFloat(event.target.value)).toFixed(2)) : setTotal(props.sum)}/>
                    </ListGroup.Item>
                </ListGroup>
            </Row>
            <div>
            <Row className="mt-4 py-1 bg-black totalSum">
                <h3>${total}</h3>
            </Row>
            <Row>
                <Col><Button className='confButton' style={{backgroundColor: "#E51C1C", borderColor: "#E51C1C"}}>
                    <img src={crossmark} width="55" height="50" alt="crossmark" style={{padding: '5px'}}></img>
                </Button></Col>
                <Col>
                <Securepay> </Securepay>
                </Col>
            </Row>
            </div>
            
        {/* </div> */}
    </Col>
    )
}