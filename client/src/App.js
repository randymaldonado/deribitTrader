import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';
import Landing from './components/Landing';
import Config from './components/Config';
import NavBar from './components/Navbar';


function App() {
  return (
    <Router>
      <div className="App">
        <NavBar/>
        <Route exact path='/' component={Landing}/>
        <Route exact path='/config' component={Config}/>
      </div>
    </Router>
  );
}

export default App;
