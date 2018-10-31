import React from "react";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";
import { throws } from "assert";
import { Navbar, Nav, NavItem, ButtonToolbar,SplitButton,MenuItem} from "react-bootstrap";
import Search from "../components/Search";
import Home from "./home"
import { RecipeList, RecipeListItem } from "../components/RecipeList";
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
                        <MenuItem eventKey="4">Sign Out</MenuItem>
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