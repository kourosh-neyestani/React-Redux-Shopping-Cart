import React from 'react';
import { useDispatch } from 'react-redux';
import { addtocart } from './actions';
import { Container, Row, Col, Button } from 'react-bootstrap';

function App() {

  const dispatch = useDispatch()

  return (
    <div>
      <Container>
        <Row>
          <Col lg={4}>
            <div className="item">
              <img src='http://via.placeholder.com/360x240' alt="alt" />
              <h3>Product Item</h3>
              <p><span>$</span>60.30</p>
              <Button variant="primary" onClick={() => dispatch(addtocart())}>Add to cart</Button>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;