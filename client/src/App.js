import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Wrapper from "./components/Wrapper";
import Home from "./pages/home";

import About from "./pages/about";
import Profile from "./pages/profile";




const App = () => (
    <Router>
        <div>
            <Navbar />
            <Wrapper>
                <Route exact path="/" component={Home} />
                <Route exact path="/about-us" component={About} />

                <Route exact path="/profile" component={Profile} />
                <Route exact path="/about" component={About} />

            </Wrapper>
            <Footer />
        </div>
    </Router>
);

export default App;