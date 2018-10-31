import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Wrapper from "./components/Wrapper";
import Home from "./pages/home";

import Profile from "./pages/profile";




const App = () => (
    <Router>
        <div>
            <Navbar/>
            <Wrapper>
                <Route exact path="/" component={Home} />
            </Wrapper>
            <Route exact path="/profile" component={Profile} />
            <Footer />
        </div>
    </Router>
);

export default App;