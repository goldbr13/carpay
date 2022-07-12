import { Navbar, Nav, Container, Row, Col, Button, Table } from 'react-bootstrap';

export function OrderBar(props) {
    return(
    <Col xs="8" className="">
        <div className="header px-4 py-3"><h4>Order Details</h4></div>
        <Container className="px-4 py-3">
        <Table>
          <thead>
            <th>Quantity</th>
            <th>Item Name</th>
            <th>Price</th>
          </thead>
          <tbody>
            {
            props.items.map(item => {
                return (
                    <tr>
                        <td>{item[0]}</td>
                        <td>{item[1]}</td>
                        <td>${item[2].toFixed(2)}</td>
                    </tr>
                );
            })
            }
            <tr>
                <td><b>Total:</b></td>
                <td></td>
                <td>${props.items.reduce((partialSum, a) => partialSum + a[2], 0).toFixed(2)}</td>
            </tr>
          </tbody>
        </Table>
      </Container></Col>
    )
}