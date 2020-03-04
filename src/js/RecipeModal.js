import React from 'react';
import Modal from 'react-bootstrap/Modal';
import { Button, ListGroup} from 'react-bootstrap';

const apiKeys = [
  'f9ca635dd36148128474e808f56ca996',
  'bc971f99f0344848a295b37d2d04d829',
  '053c403cb3f34a599d8b22c9afa1293b',
  '69c636750f134249ae3dee79acebc3da'
]

export default class RecipeModal extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            loading: true,
            recipeSteps: props.recipeSteps
        }

        this.renderRecipeInstructions = this.renderRecipeInstructions.bind(this);
    }

    renderRecipeInstructions() {
      return (
        <ListGroup variant="flush">
          {
            this.state.recipeSteps.map((step) => 
              <ListGroup.Item>
                {step.step}
              </ListGroup.Item>
            )
          }
        </ListGroup>
      )
    }

    render(){
        return(
            <Modal {...this.props} onOpen>
              <Modal.Header closeButton>
                <Modal.Title>
                  {this.props.modalTitle}
                </Modal.Title>
              </Modal.Header>
              <Modal.Body>
                {!this.state.loading ? <p>Loading...</p> : this.renderRecipeInstructions()}
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