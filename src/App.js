import React, {Component} from 'react';
import { Form, Container, Button, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

class App extends Component{
  state = {
    recipeNames: [1]
  }

  componentDidMount(){
    fetch('https://api.spoonacular.com/recipes/findByIngredients?ingredients=apples,+flour,+sugar&number=2&apiKey=bc971f99f0344848a295b37d2d04d829')
      .then(res => res.json())
      .then((data) => {
        this.setState({ recipeNames: data[0].title})
      })
      
  }
  render(){
    return (
      <div className="App">
        <Container>
          <br></br>
            {this.state.recipeNames}
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
}

export default App;
