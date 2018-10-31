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
<<<<<<< HEAD

      <NavItem eventKey={3} href="/about">
        About

      </NavItem>
      <NavItem eventKey={4} href="/profile">
        Profile
=======
      <NavItem eventKey={3} href="/about-us">
<<<<<<< HEAD
      <Link to="/about-us">About</Link>
>>>>>>> ca42e5f798ca624cd50c945ebc2ca428fd2ae5ee
=======
>>>>>>> 39983757b9dddf57472b0c25b6f5dc0e9ea144b0
      </NavItem>
    </Nav>
  </Navbar.Collapse>
</Navbar>


  );
  
  export default SimpleNavbar;