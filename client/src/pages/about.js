import React from "react";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";

const About = () => (
    <div>
        <Container style={{ marginTop: 30}}>
            <Row>
                <Col size="md-12">
                    <h1>Welcome To Cook Express</h1>
                </Col>
            </Row>
            <Row>
                <Col size="md-12">
                    <p>
                        Hey welcome to Cook Express. Your one stop shop on figuring out how to cook your favorite dish. Here you can search for what ever recipe your heart desires and we'll give you a detailed list on all ingredients and a step by step guide.
                    </p>
                </Col>
            </Row>
        </Container>
    </div>
);

export default About;