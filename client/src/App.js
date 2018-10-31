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
            <Navbar/>
            <Wrapper>
                <Route exact path="/" component={Home} />
<<<<<<< HEAD

                <Route exact path="/profile" component={Profile} />
=======
                <Route exact path="/about-us" component={About} />
>>>>>>> ca42e5f798ca624cd50c945ebc2ca428fd2ae5ee
                <Route exact path="/about" component={About} />
            </Wrapper>
            <Route exact path="/profile" component={Profile} />
            <Footer />
        </div>
    </Router>
);

export default App;