import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { Navbar, Nav, NavItem, ButtonToolbar,Button,} from "react-bootstrap";


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