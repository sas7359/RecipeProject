import React from 'react';
import Modal from 'react-bootstrap/Modal';
import { Button, ListGroup} from 'react-bootstrap';

export default class RecipeModal extends React.Component{
    constructor(props){
        super(props);
        this.renderRecipeInstructions = this.renderRecipeInstructions.bind(this);
    }

    renderRecipeInstructions() {
      return (
        <ListGroup variant="flush">
          <h5>Steps</h5>
          {
            this.props.recipeSteps.map((step) => 
              <ListGroup.Item>
                {step.number + ". " + step.step}
              </ListGroup.Item>
            )
          }
        </ListGroup>
      )
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
                {this.renderRecipeInstructions()}
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