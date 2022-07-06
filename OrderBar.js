import { Navbar, Nav, Container, Row, Col, Button, Table } from 'react-bootstrap';

export function OrderBar() {
    return(
    <Col xs="7" className="my-4"><Container>
        <h2>Order Details:</h2>
        <Table>
          <thead>
            <th>Quantity</th>
            <th></th>
          </thead>
        </Table>
      </Container></Col>
    )
}