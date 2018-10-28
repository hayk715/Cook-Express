import React from 'react'
import {Modal,Button,ButtonToolbar,Popover,Tooltip,OverlayTrigger} from 'react-bootstrap';
import "../Buttons/button"


class SignIn extends React.Component {
    constructor(props, context) {
      super(props, context);
  
      this.handleShow = this.handleShow.bind(this);
      this.handleClose = this.handleClose.bind(this);
  
      this.state = {
        show: false
      };
    }
  
    handleClose() {
      this.setState({ show: false });
    }
  
    handleShow() {
      this.setState({ show: true });
    }
  
    render() {
      const popover = (
        <Popover id="modal-popover" title="popover">
          very popover. such engagement
        </Popover>
      );
      const tooltip = <Tooltip id="modal-tooltip">wow.</Tooltip>;
  
      return (
        <div>
          <Button bsStyle="primary" bsSize="large" onClick={this.handleShow}>
          Sign In
          </Button>
  
          <Modal show={this.state.show} onHide={this.handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>Sign Up</Modal.Title>
            </Modal.Header>
            <Modal.Body>
            <ButtonToolbar >
            <Button href="/login/twitter" bsStyle="info" bsSize="xsmall" active>
                         Twitter
             </Button>
             <a href="/login/twitter">Twitter link</a>
                <Button href="/login/google" bsStyle="info" bsSize="xsmall" active>
                     Google
                 </Button>

            </ButtonToolbar>
            
    
              {/* <p>
                there is a{' '}
                <OverlayTrigger overlay={popover}>
                  <a href="#popover">popover</a>
                </OverlayTrigger>{' '}
                here
              </p>
  
              <h4>Tooltips in a modal</h4>
              <p>
                there is a{' '}
                <OverlayTrigger overlay={tooltip}>
                  <a href="#tooltip">tooltip</a>
                </OverlayTrigger>{' '}
                here
              </p> */}
            </Modal.Body>
            <Modal.Footer>
              <Button onClick={this.handleClose}>Close</Button>
            </Modal.Footer>
          </Modal>
        </div>
      );
    }
  }
  
  export default SignIn;