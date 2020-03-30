import React, { useRef } from 'react';
import Modal from 'react-bootstrap/Modal';
import {Button} from 'react-bootstrap';
import ReactToPrint from 'react-to-print';

export default class RecipeModal extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            recipe: []
        }
    }

    getRecipe(id){
        fetch("https://api.spoonacular.com/recipes/" + id
        + "/analyzedInstructions?apiKey=053c403cb3f34a599d8b22c9afa1293b")
            .then(res => res.json())
            .then(data => {
                this.setState({recipe: data});
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
                {this.getRecipe(this.props.modalId)}
                <div>
                    <button onClick={() => window.print()}>Print this recipe!</button>
                </div>
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

class Print extends React.Component {
    render() {
        return (
            <div>
                <ReactToPrint
                    trigger={() => <a href="#">Print this out!</a>}
                    content={() => this.componentRef}
                />
                <RecipeModal ref={el => (this.componentRef = el)} />
            </div>
        );
    }
}