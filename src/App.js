import React from 'react';
import { Form, Container, Button, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <div className="App">
      <Container>
        <br></br>
          <Form>
            <Row className="justify-content-md-center">
              <Col>
                <Form.Group controlId="ingredientsForSearch">
                  <Form.Control type="ingredients" placeholder="Enter ingredients.." />
                </Form.Group>
              </Col>
              <Col>
                <Button variant="primary" type="search">
                  Search
                </Button>
              </Col>
            </Row>
          </Form>
      </Container>
    </div>
  );
}

export default App;
