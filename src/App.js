import React from 'react';
import { Form, Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <div className="App">
      <Container>
        <Form>
          <Form.Group controlId="ingredientsForSearch">
            <Form.Label>Search</Form.Label>
            <Form.Control type="ingredients" placeholder="Enter ingredients.." />
          </Form.Group>
        </Form>
      </Container>
    </div>
  );
}

export default App;
