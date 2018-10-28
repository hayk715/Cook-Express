import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { Navbar, Nav, NavItem, ButtonToolbar,Button,SplitButton,MenuItem} from "react-bootstrap";
import "../Modal/signIn"
import SignIn from "../Modal/signIn";


// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
const SimpleNavbar = props => (
<Navbar inverse collapseOnSelect>
  
  <Navbar.Header>
    <Navbar.Brand>
      <a href="/">Cook Express</a>
    </Navbar.Brand>
    <Navbar.Toggle />
  </Navbar.Header>
  <Navbar.Collapse>
    <Nav PullLeft>
    <NavItem>
    <ButtonToolbar>
    <SplitButton
      bsSize="small"
      title={props.name}
      id="dropdown-size-small"
      bsStyle="danger"
    >
      <MenuItem eventKey="1">View Starred</MenuItem>
      <MenuItem divider />
      <MenuItem eventKey="4">Sign Out</MenuItem>
    </SplitButton>
  </ButtonToolbar>
    
      </NavItem>
    </Nav>
    <Nav pullRight>
      <NavItem eventKey={2} href="#">
      <SignIn/>
        
      </NavItem>
      <ButtonToolbar >
            <Button href="/login/twitter" bsStyle="info" bsSize="xsmall" active>
                         Twitter
             </Button>
             <a href="/login/twitter">Twitter link</a>
                <Button href="/login/google" bsStyle="info" bsSize="xsmall" active>
                     Google
                 </Button>

            </ButtonToolbar>

      <NavItem eventKey={3} href="/about-us">
      <Link to="/about-us">About</Link>

      <NavItem eventKey={3} href="/about">
        About
      </NavItem>
      </NavItem>
      <NavItem eventKey={4} href="/profile">
        Profile
      </NavItem>
    </Nav>
  </Navbar.Collapse>
</Navbar>


  );
  
  export default SimpleNavbar;