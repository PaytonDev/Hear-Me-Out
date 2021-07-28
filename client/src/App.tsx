import React from 'react';
import HomeContainer from './components/HomePage/HomeContainer';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom"
import './App.css';
import LoginPage from './components/LoginPage/LoginPage';

const code = new URLSearchParams(window.location.search).get('code')

function App() {

  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/">
            {code ? <HomeContainer code={code}/> : <LoginPage />}
          </Route>
          <Route path='/home'>
          <HomeContainer code={code}/> 
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
