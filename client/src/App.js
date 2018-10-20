import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Wrapper from "./components/Wrapper";
import Home from "./pages/home";

const App = () => (
    <Router>
        <div>
            <Navbar />
            <Wrapper>
                <Route exact path="/" component={Home} />
            </Wrapper>
            <Footer />
        </div>
    </Router>
);

export default App;