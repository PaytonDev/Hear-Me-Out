import HomeContainer from './components/HomePage/HomeContainer';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom"
import './App.css';
import LoginPage from './components/LoginPage/LoginPage';


function App() {
  
  const code = new URLSearchParams(window.location.search).get('code')

  if (code) {
    window.localStorage.setItem('yourCode', `${code}`)
  }
  
  let yourCode = localStorage.getItem('yourCode') || null

  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/">
            {yourCode ? <HomeContainer code={code}/> : <LoginPage />}
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
