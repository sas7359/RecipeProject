import React from 'react';
import Modal from 'react-bootstrap/Modal';
import {Button} from 'react-bootstrap';

export default class RecipeModal extends React.Component{
    
    render(){
        return(
            <Modal {...this.props}>
              <Modal.Header closeButton>
                <Modal.Title>
                  Recipe Title
                </Modal.Title>
              </Modal.Header>
              <Modal.Body>
                Recipe/Instructions?
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