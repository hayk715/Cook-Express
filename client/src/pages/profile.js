import React from "react";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";


const Profile = () => (
    <div>
        <Container style={{ marginTop: 30}}>
            <Row>
                <Col size="md-12">
                    <h1>Profile</h1>
                </Col>
            </Row>
            <Row>
                <Col size="md-12">
                    <p>
                        Starred Recipes: 
                    </p>
                </Col>
            </Row>
        </Container>
    </div>
);


export default Profile;