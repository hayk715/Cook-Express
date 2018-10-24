import React, { Component } from "react";
import Food from "../components/Food";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";
import Search from "../components/Search";
import {ButtonToolbar, Button} from "react-bootstrap";
import {Link} from "react-router-dom";
import API from "../utils/API";



class Home extends Component {
    
    state = {
        recipes: [],
        recipeSearch: ""
    };
    
    HandleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    }
    
    HandleFormSubmit = event => {
        event.preventDefault();
        API.getRecipes(this.state.recipeSearch)
            .then(res => this.setState({ recipes: res.data }))
            .catch(err => console.log(err));
    }
    
    
    
    
    
    render() {
        return (
            <div>
                <Food className="backgroundimg" backgroundImage="https://i.imgur.com/y59dVed.jpg">
                    <div className='headings'>
                    <h1>Cook Express</h1>
                    <h2>What's Cookin</h2>
                    <Link to="/about-us">About us link here!!!!!</Link>
                    </div>
    
                <div className="search">
                <Search 
                    name="recipeSearch"
                    placeholder="Search For a Recipe"
                    value={this.state.recipeSearch}
                    onChange={this.HandleInputChange}
                />
                    <ButtonToolbar>
                        <Button 
                        onClick={this.HandleFormSubmit}
                        bsStyle="primary" >Search</Button>
                    </ButtonToolbar>
                </div>
            </Food>
         
        </div>
        )
    }
    
    

};

export default Home;