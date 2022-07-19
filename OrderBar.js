import { Navbar, Nav, Container, Row, Col, Button, Table } from 'react-bootstrap';

export function OrderBar(props) {
    return(
    <Col xs="8" className="">
        <div className="header px-4 py-2"><h3>Order Details</h3></div>
        <Container className="px-4 py-3">
        <Table>
          <thead>
            <th>Item Name</th>
            <th>Quantity</th>
            <th>Price</th>
          </thead>
          <tbody>
            {
            props.items.map(item => {
                return (
                    <tr>
                        <td>{item[1]}</td>
                        <td>{item[0]}</td>
                        <td>${item[2].toFixed(2)}</td>
                    </tr>
                );
            })
            }
            <tr>
                <td><b>Total:</b></td>
                <td></td>
                <td>${props.sum}</td>
            </tr>
          </tbody>
        </Table>
      </Container></Col>
    )
}