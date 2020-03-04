import React from 'react';
import Modal from 'react-bootstrap/Modal';
import {Button} from 'react-bootstrap';

export default class RecipeModal extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            recipe: []
        }
    }

    getRecipe(id){
        return fetch("https://api.spoonacular.com/recipes/" + id
        + "/analyzedInstructions?apiKey=053c403cb3f34a599d8b22c9afa1293b")
            .then(res => res.json())
            .then(data => {
                this.setState({recipe: data});
                console.log(data);
            })
            .catch(err => {
              console.log(err);
            })
    }
    render(){
        return(
            <Modal {...this.props}>
              <Modal.Header closeButton>
                <Modal.Title>
                  {this.props.modalTitle}
                </Modal.Title>
              </Modal.Header>
              <Modal.Body>
                {this.props.modalId}
                {this.state.recipe}
                {this.props.object.toString()}
                {/*this.props.object.map((step) => {
                  return {step}
                })*/}
                {/*{this.state.recipe.map((step) => {
                  <h1>{step}</h1>
                })}*/}
              </Modal.Body>
              <Modal.Footer>
                <Button variant="primary" onClick={this.props.onHide}>
                  Close
                </Button>
              </Modal.Footer>
            </Modal>
        )
    }
}