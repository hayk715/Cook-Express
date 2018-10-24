import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from "react-bootstrap";


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
      <NavItem eventKey={1} href="#">
        Log In
      </NavItem>
      <NavItem eventKey={2} href="#">
        Sign Up
      </NavItem>
      <NavItem eventKey={3} href="/about-us">
      <Link to="/about-us">About</Link>
      </NavItem>
    </Nav>
  </Navbar.Collapse>
</Navbar>

  );
  
  export default SimpleNavbar;