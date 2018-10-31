import React from "react";
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
    <Nav pullRight>
    <SignIn/>
      <NavItem eventKey={2} href="#">   
      </NavItem>
      <NavItem eventKey={3} href="/about-us">
      </NavItem>
    </Nav>
  </Navbar.Collapse>
</Navbar>


  );
  
  export default SimpleNavbar;