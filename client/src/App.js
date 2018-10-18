import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';


class App extends Component {
  // state={
  //   data:null
  // };

  // componentDidMount(){
  //   this.useServer()
  //   .then(res => this.setState({ data: res.express }))
  //   .catch(err => console.log(err));
  // }
  // useServer = async () => {
  //   const response = await fetch('/');
  //   const body = await response.json();

  //   if (response.status !== 200) {
  //     throw Error(body.message) 
  //   }
  //   return body;
  // };
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          <a href="/login/google">log on with Google</a>
          <a href="/login/twitter">log on with Twitter</a>
          {/* <Router><Link to="localhost:3001/login/google">Log in using google</Link></Router> */}
          
        </header>
      </div>
    );
  }
}

export default App;
