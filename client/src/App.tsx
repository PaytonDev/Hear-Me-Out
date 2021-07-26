import React from 'react';
import HomeContainer from './components/HomePage/HomeContainer';
import {BrowserRouter as Router, Route, Switch } from "react-router-dom"
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/">
            <HomeContainer />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
