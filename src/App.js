import React from 'react';
import { Form, Container, Button, Row, Col, Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      ingredients: [],
      resultingRecipes: []
    };
  }

  componentDidMount(){
    fetch('https://api.spoonacular.com/recipes/findByIngredients?ingredients=apples,+flour,+sugar&number=2&apiKey=bc971f99f0344848a295b37d2d04d829')
      .then(res => res.json())
      .then((data) => {
        this.setState({ resultingRecipes: data})
      })
      
  }

  render() {
    return (
      <div className="App">
        <Container>
          <br></br>
            <Form>
              <Row className="justify-content-md-center">
                <Col >
                  <Form.Group controlId="ingredientsForSearch">
                    <Form.Control type="ingredients" placeholder="Enter ingredients.." />
                  </Form.Group>
                </Col>
                <Col xs lg="2">
                  <Button variant="primary" type="search">
                    Search
                  </Button>
                </Col>
              </Row>
            </Form>
            <br></br>
            <h2>Searched recipes:</h2>
              {
                this.state.resultingRecipes.map((recipe) =>
                    <Card>
                      <Card.Body>
                        {recipe.title}
                      </Card.Body>
                    </Card>
                )
              } 
        </Container>
      </div>
    )
  }

}

export default App;
