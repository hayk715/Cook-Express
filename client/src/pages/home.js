import React from "react";
import Food from "../components/Food";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";
import Search from "../components/Search";
import {ButtonToolbar, Button} from "react-bootstrap";


const Home = () => (
    <div>
        <Food className="backgroundimg" backgroundImage="https://i.imgur.com/y59dVed.jpg">
            <div className='headings'>
            <h1>Cook Express</h1>
            <h2>What's Cookin</h2>
            </div>

            <div className="search">
            <Search 
                name="recipeSearch"
                placeholder="Search For a Recipe"
            />
                <ButtonToolbar>
                    <Button bsStyle="primary" >Search</Button>
                </ButtonToolbar>
            </div>
        </Food>
     
    </div>
);

export default Home;