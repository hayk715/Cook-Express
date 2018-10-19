import React from "react";
import Food from "../components/Food";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";

const Home = () => (
    <div>
        <Food backgroundImage="https://s3-ap-southeast-2.amazonaws.com/macquarie-ish-oncourse/9390f6ef-6c5f-4e92-babd-05fecaf77b41">
            <h1>Cook Express</h1>
            <h2>What's Cookin</h2>
        </Food>
    </div>
);

export default Home;