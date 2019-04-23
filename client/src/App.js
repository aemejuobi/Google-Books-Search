import React, { Component } from "react";
import {BrowserRouter as Router, Route} from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Saved from "./pages/Saved";
import Search from "./pages/Search";
import Navbar from "./Components/Navbar";

class App extends Component {
  
  render() {
    return (
      <div>
        <Router>
          <Navbar />
          <Route exact path="/" component={Home} />
          <Route exact path="/saved" component={Saved} />
          <Route exact path="/search" component={Search} />
        </Router>
      </div>
    );
  }
}

export default App;
