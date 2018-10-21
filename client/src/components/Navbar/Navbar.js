import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { Navbar, Nav, NavItem, ButtonToolbar,Button, NavDropdown, MenuItem } from "react-bootstrap";


// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
const SimpleNavbar = props => (
<Navbar inverse collapseOnSelect>
  
  <Navbar.Header>
    <Navbar.Brand>
      <a href="#brand">Cook Express</a>
    </Navbar.Brand>
    <Navbar.Toggle />
  </Navbar.Header>
  <Navbar.Collapse>
    <Nav>
    </Nav>
    <Nav pullRight>
    <ButtonToolbar>
        <Button href="/login/twitter" bsStyle="info" bsSize="xsmall" active>
          Twitter
         </Button>
         <Button href="/login/google" bsStyle="info" bsSize="xsmall" active>
          Google
         </Button>
      </ButtonToolbar>
      <NavItem eventKey={2} href="#">
        Sign Up
      </NavItem>
      <NavItem eventKey={3} href="#">
        About
      </NavItem>
    </Nav>
  </Navbar.Collapse>
</Navbar>


  );
  
  export default SimpleNavbar;