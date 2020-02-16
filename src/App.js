import React from 'react';
import { Form, Container, Button, Row, Col, Image, Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      ingredients: [],
      resultingRecipes: []
    };
    this.handleSearch = this.handleSearch.bind(this);
    this.handleIngredientChange = this.handleIngredientChange.bind(this);
    this.buildRequest = this.buildRequest.bind(this);
    this.doSearch = this.doSearch.bind(this);
  }

  handleIngredientChange(e) {
    this.setState({
      ingredients: e.target.value.split(','),
    })
  }

  buildRequest() {
    // Using the list or array of ingredients, build the search request and perform it
    let ingredientString = "";
    
    // Build string containing ingredients to add to request
    let i;
    for (i = 0; i < this.state.ingredients.length; i++) {
      if (i === 0) {
        ingredientString += (this.state.ingredients[i] + ",")
      } else {
        ingredientString += ("+" + this.state.ingredients[i] + ",")
      }
    }
    ingredientString = ingredientString.replace(/,\s*$/, "")
    
    return 'https://api.spoonacular.com/recipes/findByIngredients?ingredients=' + ingredientString + '&number=10&apiKey=bc971f99f0344848a295b37d2d04d829';
  }

  doSearch = (request) => fetch(request)
      .then(res => res.json())
      .then(data => {
        this.setState({ resultingRecipes: data});
      })
      .catch(err => {
        console.log(err);
      })

  handleSearch(e) {
    e.preventDefault();
    // Reference request
    // https://api.spoonacular.com/recipes/findByIngredients?ingredients=apples,+flour,+sugar&number=2&apiKey=bc971f99f0344848a295b37d2d04d829

    let request = this.buildRequest();
    this.doSearch(request)
  }

  render() {
    return (
      <div className="App">
        <Container>
          <br></br>
            <Form onSubmit={this.handleSearch}>
              <Row className="justify-content-md-center">
                <Col >
                  <Form.Group controlId="ingredientsForSearch">
                    <Form.Control type="ingredients" placeholder="Enter ingredients.." onChange={this.handleIngredientChange}/>
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
            <Row className="justify-content-md-center">
            {
                this.state.resultingRecipes.map((recipe) =>
                    <Card key={recipe.id} style={{ width: '18rem' }}>
                      <br></br>
                      <Image
                            width={256}
                            height={256}
                            className="align-self-center mr-3"
                            src={recipe.image}
                            alt={recipe.title}
                        fluid />
                      <Card.Title>
                        {recipe.title}
                      </Card.Title>
                    </Card>
                )
              } 
            </Row>
        </Container>
      </div>
    )
  }

}

export default App;
