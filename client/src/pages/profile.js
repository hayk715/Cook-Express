import React from "react";
import { Navbar, Nav, NavItem, ButtonToolbar,SplitButton,MenuItem} from "react-bootstrap";
import Home from "./home"

function logout(){
    window.location.href="/logout"
;}


class Profile extends React.Component {
    constructor(){
        super();
        this.state={
           name:"",
           id:""
        }
    }
    componentDidMount() {
        fetch('/loggedin')
            .then((res) => res.json())
            .then((user) => {
              return(this.setState({name:user.name,id:user.id}))
            })
    }
    render() {
        return <div>
            
<Navbar inverse collapseOnSelect>
     <Navbar.Header>
        <Navbar.Brand>
             <a href="/">Cook Express</a>
        </Navbar.Brand>
        <Navbar.Toggle />
        </Navbar.Header>
            <Navbar.Collapse>
                <Nav pullRight>
                <NavItem>
                <ButtonToolbar>
                    <SplitButton 
                        bsSize="small"
                        title={this.state.name}
                        id="dropdown-size-small"
                        bsStyle="danger"
                        href="/profile"
                    >
                        <MenuItem eventKey="1">View Starred</MenuItem>
                        <MenuItem divider />
                        <MenuItem onClick={logout} eventKey="4">Sign Out</MenuItem>
                    </SplitButton>
            </ButtonToolbar>
            </NavItem>
            </Nav>
            </Navbar.Collapse>
  </Navbar>
  <Home>
  </Home>
        </div>;
    }
}
export default Profile;