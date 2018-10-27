import React from "react";
import{ButtonToolbar,Button} from "react-bootstrap";

const LoginButtons=(props)=>(
    <ButtonToolbar>
        <Button href="/login/twitter" bsStyle="info" bsSize="xsmall" active>
          Twitter
         </Button>
         <Button href="/login/google" bsStyle="info" bsSize="xsmall" active>
          Google
         </Button>
      </ButtonToolbar>
)
export default LoginButtons;



