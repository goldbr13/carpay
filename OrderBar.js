import { Navbar, Nav, Container, Row, Col, Button, Table } from 'react-bootstrap';

export function OrderBar(props) {
    return(
    <Col xs="7" className="my-4"><Container>
        <h2>Order Details:</h2>
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
          </tbody>
        </Table>
      </Container></Col>
    )
}